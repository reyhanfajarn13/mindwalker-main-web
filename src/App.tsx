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

    sections.forEach((section) => section.classList.add("section-animate"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (sectionId) {
              sectionRatiosRef.current[sectionId] = entry.intersectionRatio;
            }
          } else {
            entry.target.classList.remove("is-visible");
            if (sectionId) {
              sectionRatiosRef.current[sectionId] = 0;
            }
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
        className={`navbar-floating${isNavbarVisible ? " is-visible" : " is-hidden"}`}
        activeSection={activeSection}
        onNavigate={handleNavbarNavigate}
      />
      <main className="app-scroll" ref={scrollRootRef}>
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
