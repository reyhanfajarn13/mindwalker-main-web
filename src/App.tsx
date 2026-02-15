import { useEffect, useRef, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { ProductSection } from "./sections/ProductSection";
import { SolutionSection } from "./sections/SolutionSection";
import { FooterSection } from "./sections/FooterSection";
import { FloatingChatbot } from "./components/FloatingChatbot";
import { Navbar } from "./components/Navbar";

function App() {
  const scrollRootRef = useRef<HTMLElement | null>(null);
  const lastScrollTopRef = useRef(0);
  const idleTimerRef = useRef<number | null>(null);
  const sectionRatiosRef = useRef<Record<string, number>>({});
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
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
  }, []);

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

  const handleNavbarNavigate = (targetId: string) => {
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

  return (
    <>
      <Navbar
        className={`fixed left-1/2 top-[0.9rem] z-[140] -translate-x-1/2 transition-[transform,opacity] duration-300 ${
          isNavbarVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[130%] opacity-0 pointer-events-none"
        }`}
        activeSection={activeSection}
        onNavigate={handleNavbarNavigate}
      />
      <main
        className="h-full overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth max-[720px]:snap-proximity motion-reduce:scroll-auto"
        ref={scrollRootRef}
      >
        <HeroSection />
        <ProductSection />
        <SolutionSection />
        <FooterSection />
      </main>
      <FloatingChatbot />
    </>
  );
}

export default App;
