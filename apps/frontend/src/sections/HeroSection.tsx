import { useEffect, useMemo, useRef, useState } from "react";
import { DecryptedText } from "../components/ui/DecryptedText";
import FaultyTerminal from "../components/ui/FaultyTerminal";
import { useTranslation } from "react-i18next";
import nvidiaLogo from "../assets/logo/NvidiaLogo.png";

type HeroSectionProps = {
  heroImageUrl?: string;
  heroImageAlt?: string;
};

type HeroCard = {
  id: number;
  title: string;
  badge: string;
  description: string;
  imageUrl?: string;
  imageAlt: string;
};

const AUTO_SLIDE_MS = 3200;
const SWIPE_THRESHOLD = 56;

export function HeroSection({
  heroImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  heroImageAlt = "Hero visual"
}: HeroSectionProps) {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartYRef = useRef<number | null>(null);

  const faultyGridMul = useMemo<[number, number]>(() => [2, 1], []);

  const heroCards = useMemo<HeroCard[]>(
    () => [
      {
        id: 1,
        title: "Mind Ops",
        badge: t("hero.slides.news"),
        description: t("hero.slides.desc1"),
        imageUrl: heroImageUrl,
        imageAlt: heroImageAlt
      },
      {
        id: 2,
        title: "Mind Secure",
        badge: t("hero.slides.update"),
        description: t("hero.slides.desc2"),
        imageUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1170&q=80",
        imageAlt: "Mountain valley"
      },
      {
        id: 3,
        title: "Mind Vision",
        badge: t("hero.slides.case"),
        description: t("hero.slides.desc3"),
        imageUrl:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1170&q=80",
        imageAlt: "Forest lake"
      }
    ],
    [heroImageUrl, heroImageAlt, t]
  );

  const totalSlides = heroCards.length;

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(goToNext, AUTO_SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartYRef.current === null) {
      setIsPaused(false);
      return;
    }

    const endY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
    const deltaY = endY - touchStartYRef.current;
    touchStartYRef.current = null;

    if (deltaY <= -SWIPE_THRESHOLD) {
      goToNext();
    } else if (deltaY >= SWIPE_THRESHOLD) {
      goToPrev();
    }

    setIsPaused(false);
  };

  const handleTouchCancel = () => {
    touchStartYRef.current = null;
    setIsPaused(false);
  };

  return (
    <section
      className="relative grid min-h-screen grid-rows-1 overflow-hidden px-0 pb-8 pt-[5.75rem]"
      id="home"
    >
      <div className="absolute inset-0 -z-10">
        <FaultyTerminal
          scale={2.1}
          gridMul={faultyGridMul}
          digitSize={2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#464646"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.5}
        />
      </div>

      <div className="relative z-[3] mx-auto grid w-[min(1120px,calc(100%-2rem))] self-center gap-7 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex min-h-0 flex-col justify-center lg:min-h-[calc(100vh-7.75rem)]">
          <div className="mt-5 mb-5 flex items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(35,43,53,0.92)] px-3 py-2 text-[0.82rem] font-semibold tracking-[0.08em] text-[#eef3f9] uppercase shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
              <span className="grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-[#76b900]">
                <img src={nvidiaLogo} alt="NVIDIA logo" className="h-full w-full object-cover" />
              </span>
              <span>{`${t("hero.partOf")} ${t("hero.partner")}`}</span>
            </span>
          </div>
          <h1 className="max-w-[12ch] text-[clamp(4.0rem,6.5vw,5.6rem)] leading-[1.02] tracking-[-0.02em] text-white max-[1023px]:max-w-none">
            <span className="block font-semibold text-white">
              {t("hero.from")} <DecryptedText text={t("hero.insight")} className="font-extrabold text-[#2f99ff]" />
            </span>
            <span className="block font-semibold text-white">
              {t("hero.to")} <DecryptedText text={t("hero.impact")} className="font-extrabold text-[#2f99ff]" />
            </span>
          </h1>
        </div>

        <div className="relative w-full self-center lg:max-w-[560px]">
          <div
            className="w-full overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.07)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <div
              className="flex h-[390px] flex-col transition-transform duration-700 ease-out sm:h-[430px] lg:h-[470px]"
              style={{ transform: `translateY(-${activeSlide * 100}%)` }}
            >
              {heroCards.map((card) => (
                <article key={card.id} className="group relative h-full shrink-0 overflow-hidden">
                  {card.imageUrl ? (
                    <img
                      src={card.imageUrl}
                      alt={card.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.85),rgba(190,197,207,0.76)),repeating-linear-gradient(-45deg,rgba(80,90,105,0.2)_0_16px,rgba(216,222,230,0.2)_16px_32px)]" />
                  )}

                  <div className="absolute inset-x-4 bottom-4 rounded-[24px] bg-[rgba(10,14,22,0.4)] px-5 py-4 backdrop-blur-sm sm:inset-x-4 sm:bottom-2 sm:px-6 sm:py-5 hover:bg-[rgba(10,14,22,0)] hover:backdrop-blur duration-300">
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-[rgba(255,255,255,0.3)] px-3 py-1 text-[0.8rem] font-semibold text-white">
                        {card.badge}
                      </span>
                    </div>
                    <h2 className="mt-2 text-[clamp(1.2rem,3.4vw,1.5rem)] font-semibold leading-[1.15] text-white transition-colors duration-300 group-hover:text-[#2f99ff]">{card.title}</h2>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-[#d9e3ef]">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="absolute right-[-24px] top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex">
            {heroCards.map((card, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={card.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full border-0 transition-all duration-200 ${
                    isActive ? "scale-110 bg-[#2f99ff]" : "bg-[rgba(255,255,255,0.45)]"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
