import { useEffect, useMemo, useState } from "react";
import type { NewsCard } from "./types";

type HeroNewsSectionProps = {
  items: NewsCard[];
};

export function HeroNewsSection({ items }: HeroNewsSectionProps) {
  const carouselItems = useMemo(() => items.slice(0, 4), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (carouselItems.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [carouselItems.length]);

  if (!carouselItems.length) {
    return null;
  }

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#18325a_0%,#0d1c35_48%,#091326_100%)] px-4 pb-12 pt-[4.5rem] sm:px-6"
    >
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_70%_30%,#2f7ddf_0%,transparent_45%),radial-gradient(circle_at_80%_80%,#1b4f93_0%,transparent_40%)]" />
      <div className="relative mx-auto w-[min(1120px,100%)]">
        <h1 className="text-center text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#f3f8ff]">MindWalker News</h1>

        <div className="mt-4 overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.12)] bg-white shadow-[0_24px_45px_rgba(6,15,29,0.35)]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {carouselItems.map((item) => (
              <article key={item.id} className="group grid min-w-full lg:grid-cols-[1.35fr_1fr]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full min-h-[260px] w-full object-cover grayscale brightness-[0.74] transition-[filter] duration-500 ease-out group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#e9f1fb] px-3 py-1 text-[0.68rem] font-semibold text-[#2e6eb1]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[0.74rem] text-[#8a97a8]">
                    {item.category} | {item.date}
                  </p>
                  <h2 className="mt-2 text-[2.8rem] leading-[1.22] text-[#27313e]">{item.title}</h2>
                  <p className="mt-3 text-[0.9rem] leading-[1.6] text-[#6a7788]">{item.excerpt}</p>
                  <button type="button" className="mt-6 text-[0.88rem] font-semibold text-[#0d84e6]">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {carouselItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
