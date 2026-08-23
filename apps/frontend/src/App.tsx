import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { Navbar } from "./components/Navbar";
import { motion } from "motion/react";

const ProductSection = lazy(() =>
  import("./sections/ProductSection").then((module) => ({ default: module.ProductSection }))
);
const SolutionSection = lazy(() =>
  import("./sections/SolutionSection").then((module) => ({ default: module.SolutionSection }))
);
const IndustrialUsecaseSection = lazy(() =>
  import("./sections/IndustrialUsecaseSection").then((module) => ({ default: module.IndustrialUsecaseSection }))
);
const FooterSection = lazy(() =>
  import("./sections/FooterSection").then((module) => ({ default: module.FooterSection }))
);
const FloatingChatbot = lazy(() =>
  import("./components/FloatingChatbot").then((module) => ({ default: module.FloatingChatbot }))
);
const NewsPage = lazy(() =>
  import("./pages/News/NewsPage").then((module) => ({ default: module.NewsPage }))
);
const NewsDetailsPage = lazy(() =>
  import("./pages/News/NewsDetailsPage").then((module) => ({ default: module.NewsDetailsPage }))
);
const ProductDetailsPage = lazy(() =>
  import("./pages/Product/ProductDetailsPage").then((module) => ({ default: module.ProductDetailsPage }))
);
const VisionCraftDemo = lazy(() =>
  import("./pages/Product/demo/visionCraftDemo").then((module) => ({ default: module.VisionCraftDemo }))
);

function SectionFallback() {
  return <div className="min-h-[48vh] w-full bg-transparent" />;
}

const getPageFromPathname = (pathname: string): "main" | "news" | "product" => {
  const normalized = pathname.toLowerCase();
  if (normalized.startsWith("/news")) return "news";
  if (normalized.startsWith("/product/")) return "product";
  return "main";
};

const getNewsIdFromPathname = (pathname: string): number | null => {
  const match = pathname.match(/^\/news\/(\d+)$/i);
  if (!match) return null;

  const id = Number(match[1]);
  return Number.isFinite(id) ? id : null;
};

const getProductSlugFromPathname = (pathname: string): string | null => {
  const match = pathname.match(/^\/product\/([^/]+)$/i);
  if (!match) return null;

  return decodeURIComponent(match[1]);
};

function App() {
  const scrollRootRef = useRef<HTMLElement | null>(null);
  const pendingTargetRef = useRef<string | null>(null);
  const lastScrollTopRef = useRef(0);
  const latestScrollTopRef = useRef(0);
  const scrollRafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);
  const isNavbarVisibleRef = useRef(true);
  const activeSectionRef = useRef("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState<"main" | "news" | "product">(() =>
    getPageFromPathname(window.location.pathname)
  );
  const [isVisionCraftDemoOpen, setIsVisionCraftDemoOpen] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(() =>
    getNewsIdFromPathname(window.location.pathname)
  );
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(() =>
    getProductSlugFromPathname(window.location.pathname)
  );

  const setNavbarVisibility = (visible: boolean) => {
    if (isNavbarVisibleRef.current === visible) return;
    isNavbarVisibleRef.current = visible;
    setIsNavbarVisible(visible);
  };

  const setActiveSectionSafe = (sectionId: string) => {
    if (activeSectionRef.current === sectionId) return;
    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);
  };

  useEffect(() => {
    isNavbarVisibleRef.current = isNavbarVisible;
  }, [isNavbarVisible]);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const handlePopState = () => {
      const nextPage = getPageFromPathname(window.location.pathname);
      setCurrentPage(nextPage);
      setSelectedNewsId(getNewsIdFromPathname(window.location.pathname));
      setSelectedProductSlug(getProductSlugFromPathname(window.location.pathname));
      if (nextPage === "news") {
        setActiveSectionSafe("news");
      } else if (nextPage === "product") {
        setActiveSectionSafe("product");
      } else {
        setActiveSectionSafe("home");
      }
      setIsVisionCraftDemoOpen(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) return;

    const scheduleIdleReveal = () => {
      if (idleTimerRef.current !== null) window.clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        setNavbarVisibility(true);
      }, 500);
    };

    const processScroll = () => {
      scrollRafRef.current = null;

      const currentTop = latestScrollTopRef.current;
      const previousTop = lastScrollTopRef.current;
      const delta = currentTop - previousTop;

      if (Math.abs(delta) >= 4) {
        if (delta > 0) {
          setNavbarVisibility(true);
        } else {
          setNavbarVisibility(false);
        }

        lastScrollTopRef.current = currentTop;
      }

      scheduleIdleReveal();
    };

    latestScrollTopRef.current = scrollRoot.scrollTop;
    lastScrollTopRef.current = latestScrollTopRef.current;
    scheduleIdleReveal();

    const handleScroll = () => {
      latestScrollTopRef.current = scrollRoot.scrollTop;
      if (scrollRafRef.current !== null) return;
      scrollRafRef.current = window.requestAnimationFrame(processScroll);
    };

    scrollRoot.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollRoot.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
      if (idleTimerRef.current !== null) window.clearTimeout(idleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentPage !== "main") return;

    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) return;

    const sectionRatios: Record<string, number> = {};
    const trackTargets = Array.from(
      scrollRoot.querySelectorAll<HTMLElement>("section, footer")
    );
    const fadeTargets = Array.from(
      new Set(
        Array.from(
          scrollRoot.querySelectorAll<HTMLElement>("section, footer, [data-scroll-fade]")
        )
      )
    ).filter((el) => el.id !== "home");
    const fadeTargetSet = new Set(fadeTargets);
    const trackTargetSet = new Set(trackTargets);
    const observerTargets = new Set<HTMLElement>([...trackTargets, ...fadeTargets]);

    const staggerNodes: HTMLElement[] = [];
    fadeTargets.forEach((el) => el.classList.add("scroll-fade-in"));
    fadeTargets.forEach((el) => {
      const title = el.querySelector<HTMLElement>("h1, h2");
      if (!title) return;

      title.classList.add("scroll-stagger-title");
      staggerNodes.push(title);

      const parent = title.parentElement;
      if (!parent) return;

      const children = Array.from(parent.children) as HTMLElement[];
      const titleIndex = children.indexOf(title);
      if (titleIndex < 0) return;

      children.slice(titleIndex + 1).forEach((child) => {
        child.classList.add("scroll-stagger-body");
        staggerNodes.push(child);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let shouldRecomputeTopSection = false;

        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const sectionId = target.id;

          if (trackTargetSet.has(target) && sectionId) {
            sectionRatios[sectionId] = entry.isIntersecting ? entry.intersectionRatio : 0;
            shouldRecomputeTopSection = true;
          }

          if (fadeTargetSet.has(target) && entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });

        if (!shouldRecomputeTopSection) return;

        const topSection = Object.entries(sectionRatios).reduce<{
          id: string;
          ratio: number;
        }>(
          (best, [id, ratio]) => (ratio > best.ratio ? { id, ratio } : best),
          { id: "home", ratio: 0 }
        );

        if (topSection.id) {
          setActiveSectionSafe(topSection.id);
        }
      },
      {
        root: scrollRoot,
        threshold: [0.3, 0.35, 0.5, 0.75],
        rootMargin: "0px 0px -15% 0px"
      }
    );

    observerTargets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      fadeTargets.forEach((el) => {
        el.classList.remove("scroll-fade-in");
        el.classList.remove("is-visible");
      });
      staggerNodes.forEach((node) => {
        node.classList.remove("scroll-stagger-title");
        node.classList.remove("scroll-stagger-body");
      });
    };
  }, [currentPage, selectedNewsId, selectedProductSlug]);

  const scrollToSection = (targetId: string) => {
    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) return;

    const targetSection = scrollRoot.querySelector<HTMLElement>(`#${targetId}`);
    if (!targetSection) return;

    setActiveSectionSafe(targetId);
    scrollRoot.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  };

  const handleNavbarNavigate = (targetId: string) => {
    if (targetId === "news") {
      if (window.location.pathname !== "/news") {
        window.history.pushState({}, "", "/news");
      }
      setCurrentPage("news");
      setSelectedNewsId(null);
      setSelectedProductSlug(null);
      setActiveSectionSafe("news");
      const scrollRoot = scrollRootRef.current;
      if (scrollRoot) {
        scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (currentPage !== "main") {
      pendingTargetRef.current = targetId;
      if (window.location.pathname !== "/") {
        window.history.replaceState({}, "", "/");
      }
      setCurrentPage("main");
      setSelectedNewsId(null);
      setSelectedProductSlug(null);
      return;
    }

    scrollToSection(targetId);
  };

  useEffect(() => {
    if (currentPage !== "main" || !pendingTargetRef.current) return;

    const targetId = pendingTargetRef.current;
    pendingTargetRef.current = null;
    window.requestAnimationFrame(() => {
      scrollToSection(targetId);
    });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== "main") return;

    const hashTarget = window.location.hash.replace("#", "");
    if (!hashTarget) return;

    let attempts = 0;
    const maxAttempts = 30;

    const tryScrollToHash = () => {
      const scrollRoot = scrollRootRef.current;
      const targetSection = scrollRoot?.querySelector<HTMLElement>(`#${hashTarget}`);

      if (targetSection) {
        scrollToSection(hashTarget);
        return;
      }

      if (attempts >= maxAttempts) return;
      attempts += 1;
      window.setTimeout(tryScrollToHash, 80);
    };

    tryScrollToHash();
  }, [currentPage]);

  const handleOpenNewsDetails = (id: number) => {
    if (window.location.pathname !== `/news/${id}`) {
      window.history.pushState({}, "", `/news/${id}`);
    }

    setCurrentPage("news");
    setSelectedNewsId(id);
    setSelectedProductSlug(null);
    setActiveSectionSafe("news");

    const scrollRoot = scrollRootRef.current;
    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOpenProductDetails = (slug: string) => {
    const targetPath = `/product/${encodeURIComponent(slug)}`;
    if (window.location.pathname !== "/" && window.location.pathname !== targetPath) {
      window.history.replaceState({}, "", "/");
    }
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, "", targetPath);
    }

    setCurrentPage("product");
    setSelectedProductSlug(slug);
    setSelectedNewsId(null);
    setActiveSectionSafe("product");

    const scrollRoot = scrollRootRef.current;
    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOpenVisionCraftDemo = () => {
    setIsVisionCraftDemoOpen(true);
  };

  const handleCloseVisionCraftDemo = () => {
    setIsVisionCraftDemoOpen(false);
  };

  const handleGoRoot = () => {
    pendingTargetRef.current = "home";

    if (window.location.pathname !== "/" || window.location.search || window.location.hash) {
      window.history.replaceState({}, "", "/");
    }

    setCurrentPage("main");
    setSelectedNewsId(null);
    setSelectedProductSlug(null);
    setActiveSectionSafe("home");

    const scrollRoot = scrollRootRef.current;
    if (scrollRoot && currentPage === "main") {
      scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed left-1/2 top-[0.9rem] z-[140] -translate-x-1/2 max-[550px]:left-auto max-[550px]:right-4 max-[550px]:translate-x-0">
        <motion.div
          initial={false}
          animate={isNavbarVisible ? "shown" : "hidden"}
          variants={{
            shown: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            },
            hidden: {
              y: "-130%",
              opacity: 0,
              transition: { duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }
            }
          }}
          className={isNavbarVisible ? "pointer-events-auto" : "pointer-events-none"}
        >
          <Navbar
            activeSection={currentPage === "news" ? "news" : currentPage === "product" ? "product" : activeSection}
            onNavigate={handleNavbarNavigate}
            onGoRoot={handleGoRoot}
          />
        </motion.div>
      </div>
      <main
        className="h-screen overflow-x-hidden overflow-y-auto scroll-smooth motion-reduce:scroll-auto"
        ref={scrollRootRef}
      >
        {currentPage === "news" ? (
          <Suspense fallback={<SectionFallback />}>
            {selectedNewsId ? (
              <NewsDetailsPage newsId={selectedNewsId} onOpenNewsDetails={handleOpenNewsDetails} />
            ) : (
              <NewsPage onOpenNewsDetails={handleOpenNewsDetails} />
            )}
          </Suspense>
        ) : currentPage === "product" ? (
          <Suspense fallback={<SectionFallback />}>
            {selectedProductSlug ? (
              <ProductDetailsPage
                productSlug={selectedProductSlug}
                onOpenNewsDetails={handleOpenNewsDetails}
                onOpenDemo={handleOpenVisionCraftDemo}
              />
            ) : null}
          </Suspense>
        ) : (
          <>
            <HeroSection />
            <Suspense fallback={<SectionFallback />}>
              <ProductSection
                onOpenProductDetails={handleOpenProductDetails}
                onBookDemo={() => scrollToSection("footer")}
              />
              <SolutionSection onContactUs={() => scrollToSection("footer")} />
              <IndustrialUsecaseSection />
              <FooterSection />
            </Suspense>
          </>
        )}
      </main>
      {currentPage === "product" && selectedProductSlug === "visioncraft" && isVisionCraftDemoOpen ? (
        <Suspense fallback={null}>
          <VisionCraftDemo onClose={handleCloseVisionCraftDemo} />
        </Suspense>
      ) : null}
      {/*
      <Suspense fallback={null}>
        <FloatingChatbot />
      </Suspense>
      */}
    </>
  );
}

export default App;
