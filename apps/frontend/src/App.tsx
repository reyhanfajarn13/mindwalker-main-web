import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { Navbar } from "./components/Navbar";

const ProductSection = lazy(() =>
  import("./sections/ProductSection").then((module) => ({ default: module.ProductSection }))
);
const SolutionSection = lazy(() =>
  import("./sections/SolutionSection").then((module) => ({ default: module.SolutionSection }))
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
  const idleTimerRef = useRef<number | null>(null);
  const sectionRatiosRef = useRef<Record<string, number>>({});
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState<"main" | "news" | "product">(() =>
    getPageFromPathname(window.location.pathname)
  );
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(() =>
    getNewsIdFromPathname(window.location.pathname)
  );
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(() =>
    getProductSlugFromPathname(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPathname(window.location.pathname));
      setSelectedNewsId(getNewsIdFromPathname(window.location.pathname));
      setSelectedProductSlug(getProductSlugFromPathname(window.location.pathname));
      if (getPageFromPathname(window.location.pathname) === "news") {
        setActiveSection("news");
      } else if (getPageFromPathname(window.location.pathname) === "product") {
        setActiveSection("product");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage !== "main") return;

    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) return;

    const sections = Array.from(
      scrollRoot.querySelectorAll<HTMLElement>("section, footer")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            if (sectionId) {
              sectionRatiosRef.current[sectionId] = entry.intersectionRatio;
            }
          } else if (sectionId) {
            sectionRatiosRef.current[sectionId] = 0;
          }
        });

        const topSection = Object.entries(sectionRatiosRef.current).reduce<{
          id: string;
          ratio: number;
        }>(
          (best, [id, ratio]) => (ratio > best.ratio ? { id, ratio } : best),
          { id: "home", ratio: 0 }
        );

        if (topSection.id) {
          setActiveSection(topSection.id);
        }
      },
      {
        root: scrollRoot,
        threshold: [0.35, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sectionRatiosRef.current = {};
    };
  }, [currentPage]);

  useEffect(() => {
    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) return;

    const scheduleIdleReveal = () => {
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = window.setTimeout(() => {
        setIsNavbarVisible(true);
      }, 500);
    };

    scheduleIdleReveal();

    const handleScroll = () => {
      const currentTop = scrollRoot.scrollTop;
      const previousTop = lastScrollTopRef.current;
      const delta = currentTop - previousTop;

      scheduleIdleReveal();

      if (Math.abs(delta) < 4) return;

      if (delta > 0) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }

      lastScrollTopRef.current = currentTop;
    };

    scrollRoot.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollRoot.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (targetId: string) => {
    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) return;

    const targetSection = scrollRoot.querySelector<HTMLElement>(`#${targetId}`);
    if (!targetSection) return;

    setActiveSection(targetId);
    scrollRoot.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  };

  const handleNavbarNavigate = (targetId: string) => {
    if (targetId === "news") {
      if (window.location.pathname !== "/News") {
        window.history.pushState({}, "", "/News");
      }
      setCurrentPage("news");
      setSelectedNewsId(null);
      setSelectedProductSlug(null);
      setActiveSection("news");
      const scrollRoot = scrollRootRef.current;
      if (scrollRoot) {
        scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (currentPage !== "main") {
      pendingTargetRef.current = targetId;
      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
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

  const handleOpenNewsDetails = (id: number) => {
    if (window.location.pathname !== `/News/${id}`) {
      window.history.pushState({}, "", `/News/${id}`);
    }

    setCurrentPage("news");
    setSelectedNewsId(id);
    setSelectedProductSlug(null);
    setActiveSection("news");

    const scrollRoot = scrollRootRef.current;
    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOpenProductDetails = (slug: string) => {
    const targetPath = `/Product/${encodeURIComponent(slug)}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, "", targetPath);
    }

    setCurrentPage("product");
    setSelectedProductSlug(slug);
    setSelectedNewsId(null);
    setActiveSection("product");

    const scrollRoot = scrollRootRef.current;
    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        className={`fixed left-1/2 top-[0.9rem] z-[140] -translate-x-1/2 transition-[transform,opacity] duration-300 max-[550px]:left-auto max-[550px]:right-4 max-[550px]:translate-x-0 ${
          isNavbarVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[130%] opacity-0 pointer-events-none"
        }`}
        activeSection={currentPage === "news" ? "news" : currentPage === "product" ? "product" : activeSection}
        onNavigate={handleNavbarNavigate}
      />
      <main
        className={`h-full overflow-x-hidden overflow-y-auto scroll-smooth motion-reduce:scroll-auto ${
          currentPage === "main" || currentPage === "product"
            ? "snap-y snap-mandatory max-[720px]:snap-proximity"
            : ""
        }`}
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
              />
            ) : null}
          </Suspense>
        ) : (
          <>
            <HeroSection />
            <Suspense fallback={<SectionFallback />}>
              <ProductSection onOpenProductDetails={handleOpenProductDetails} />
              <SolutionSection />
              <FooterSection />
            </Suspense>
          </>
        )}
      </main>
      <Suspense fallback={null}>
        <FloatingChatbot />
      </Suspense>
    </>
  );
}

export default App;
