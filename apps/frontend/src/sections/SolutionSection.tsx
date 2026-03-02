import { Binary, BookCheck, Boxes, Database, GitBranch, PlugZap, ShieldCheck, UserCheck } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function SolutionSection() {
  const { t } = useTranslation();
  const [hoveredCardKey, setHoveredCardKey] = useState<string | null>(null);
  const modelForgeHighlights = t("solutions.cards.modelForge.backHighlights", { returnObjects: true }) as string[];
  const agenticAiHighlights = t("solutions.cards.agenticAi.backHighlights", { returnObjects: true }) as string[];

  const cards = [
    {
      key: "model-forge",
      title: t("solutions.cards.modelForge.title"),
      headline: t("solutions.cards.modelForge.backTitle"),
      points: modelForgeHighlights,
      icons: [Database, Boxes, Binary, ShieldCheck],
      imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772423775436-361afaca238036a6.png"
    },
    {
      key: "agentic-ai",
      title: t("solutions.cards.agenticAi.title"),
      headline: t("solutions.cards.agenticAi.backTitle"),
      points: agenticAiHighlights,
      icons: [GitBranch, PlugZap, UserCheck, BookCheck],
      imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1771327700802-303fa21f6a6ba29b.jpeg"
    }
  ];

  const getHeadlineParts = (headline: string) => {
    const match = headline.match(/^(.*?)(\s*\(.*\))$/);
    if (!match) return { main: headline, sub: "" };
    return { main: match[1].trim(), sub: match[2].trim() };
  };

  return (
    <section className="bg-white/20 px-0 py-10 lg:py-14" id="solutions">
      <div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] sm:w-[min(1600px,calc(100%-2.2rem))]">
        <h2 className="text-center text-[clamp(2.2rem,4.3vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-[#2490ef]">{t("solutions.title")}</h2>
        <p className="mx-auto mt-3 max-w-[78ch] text-center text-[clamp(0.92rem,1.25vw,1.32rem)] leading-[1.62] text-[#607186]">{t("solutions.description")}</p>

        <div className="mt-8 grid gap-5 xl:flex xl:items-stretch xl:gap-6">
          {cards.map((card) => {
            const headlineParts = getHeadlineParts(card.headline);
            return (
            <article
              key={card.key}
              onMouseEnter={() => setHoveredCardKey(card.key)}
              onMouseLeave={() => setHoveredCardKey(null)}
              className={`group relative overflow-hidden rounded-[30px] border-2 border-[rgba(255,255,255,0.28)] shadow-[0_18px_36px_rgba(11,25,45,0.28)] transition-all duration-500 ease-out hover:border-[3px] hover:border-white hover:shadow-[0_36px_76px_rgba(47,153,255,0.34),0_0_0_1px_rgba(255,255,255,0.62)_inset,0_0_40px_rgba(47,153,255,0.32)] xl:basis-0 ${
                hoveredCardKey === null
                  ? "xl:flex-[1]"
                  : hoveredCardKey === card.key
                    ? "xl:flex-[1.24]"
                    : "xl:flex-[0.82]"
              }`}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="absolute inset-0 h-full w-full scale-[1.04] object-cover grayscale blur-[1.6px] transition-[filter,transform] duration-500 group-hover:scale-[1.06] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(8,17,31,0.78)_0%,rgba(8,17,31,0.56)_46%,rgba(8,17,31,0.76)_100%)]" />
              <div className="absolute inset-0 bg-[rgba(136,194,255,0.06)] backdrop-blur-[1.2px]" />
              <div className="relative grid gap-7 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:px-10 lg:py-9">
                <h3 className="max-w-[9.2ch] self-center text-[clamp(2rem,4.4vw,2.7rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-white">
                  <span className="block">{headlineParts.main}</span>
                  {headlineParts.sub ? (
                    <span className="mt-1 block text-[clamp(1.1rem,2.1vw,1.4rem)] leading-[1.12] text-[rgba(240,246,255,0.96)]">
                      {headlineParts.sub}
                    </span>
                  ) : null}
                </h3>

                <div className="rounded-2xl bg-[rgba(14,24,39,0.22)] p-4 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-[rgba(116,186,255,0.18)] group-hover:backdrop-blur-[7px] group-hover:shadow-[0_14px_34px_rgba(120,194,255,0.24),inset_0_0_0_1px_rgba(199,232,255,0.38)] sm:p-5">
                  <ul className="space-y-4 sm:space-y-5">
                    {card.points.map((point, index) => {
                      const Icon = card.icons[index % card.icons.length];
                      return (
                        <li key={point} className="flex items-start gap-4 text-white">
                          <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[rgba(255,255,255,0.72)] bg-[rgba(47,153,255,0.14)] shadow-[inset_0_0_0_1px_rgba(47,153,255,0.15)]">
                            <Icon size={18} className="text-[#2f99ff]" />
                          </span>
                          <span className="text-[clamp(0.96rem,1.05vw,1.2rem)] leading-[1.35] text-[rgba(241,246,255,0.98)]">{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
