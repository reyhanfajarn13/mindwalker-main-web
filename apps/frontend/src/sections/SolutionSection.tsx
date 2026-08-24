import {
  ArrowRight,
  Binary,
  BookCheck,
  Boxes,
  Database,
  GitBranch,
  GripVertical,
  PlugZap,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

type ProcessStep = { number: string; title: string; description: string };
type DifferentiatorItem = { number: string; title: string; description: string };

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 220, damping: 24 }
  }
};

const cardHover = { y: -6, transition: { type: "spring" as const, stiffness: 320, damping: 22 } };

type SolutionSectionProps = {
  onContactUs?: () => void;
};

export function SolutionSection({ onContactUs }: SolutionSectionProps) {
  const { t } = useTranslation();
  const comparisonRef = useRef<HTMLDivElement | null>(null);
  const [inset, setInset] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHorizontalSplit, setIsHorizontalSplit] = useState(false);
  const DESKTOP_MIN = 18;
  const DESKTOP_MAX = 82;
  const HORIZONTAL_MIN = 25;
  const HORIZONTAL_MAX = 75;

  const modelForgeHighlights = t("solutions.cards.modelForge.backHighlights", { returnObjects: true }) as string[];
  const agenticAiHighlights = t("solutions.cards.agenticAi.backHighlights", { returnObjects: true }) as string[];

  const modelForgeHeadline = t("solutions.cards.modelForge.backTitle");
  const agenticAiHeadline = t("solutions.cards.agenticAi.backTitle");
  const modelForgeDescription = t("solutions.cards.modelForge.description");
  const agenticAiDescription = t("solutions.cards.agenticAi.description");

  const processSteps = t("solutions.process.steps", { returnObjects: true }) as ProcessStep[];
  const differentiatorItems = t("solutions.differentiators.items", { returnObjects: true }) as DifferentiatorItem[];

  const modelForgeIcons = useMemo(() => [Database, Boxes, Binary, ShieldCheck], []);
  const agenticAiIcons = useMemo(() => [GitBranch, PlugZap, UserCheck, BookCheck], []);

  const modelForgeImage = "https://ik.imagekit.io/mindwalker/public/assets/modelForgeSolutionSection.webp?updatedAt=1772427231030&tr=w-1200,q-72";
  const agenticAiImage = "https://ik.imagekit.io/mindwalker/public/assets/agenticAISolutionSection.webp?updatedAt=1772427231045&tr=w-1200,q-72";

  const getHeadlineParts = (headline: string) => {
    const match = headline.match(/^(.*?)(\s*\(.*\))$/);
    if (!match) return { main: headline, sub: "" };
    return { main: match[1].trim(), sub: match[2].trim() };
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    const handleMediaChange = () => setIsHorizontalSplit(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    setInset((current) =>
      clamp(current, isHorizontalSplit ? HORIZONTAL_MIN : DESKTOP_MIN, isHorizontalSplit ? HORIZONTAL_MAX : DESKTOP_MAX)
    );
  }, [isHorizontalSplit]);

  const updateInset = (clientX: number, clientY: number, container: HTMLDivElement) => {
    const rect = container.getBoundingClientRect();
    const relativePosition = isHorizontalSplit ? clientY - rect.top : clientX - rect.left;
    const totalSize = isHorizontalSplit ? rect.height : rect.width;
    const ratio = (relativePosition / totalSize) * 100;
    setInset(clamp(ratio, isHorizontalSplit ? HORIZONTAL_MIN : DESKTOP_MIN, isHorizontalSplit ? HORIZONTAL_MAX : DESKTOP_MAX));
  };

  const renderPanelContent = (
    headline: string,
    description: string,
    highlights: string[],
    icons: Array<typeof Database>,
    isDark: boolean
  ) => {
    const parts = getHeadlineParts(headline);
    return (
      <>
        <h3
          className={`font-semibold tracking-[-0.02em] ${
            isHorizontalSplit
              ? "text-[clamp(1.5rem,4.8vw,2.35rem)] leading-[1.08]"
              : "text-[clamp(2rem,4vw,3rem)] leading-[1.04]"
          } ${isDark ? "text-white" : "text-[#132031]"}`}
        >
          <span className="block">{parts.main}</span>
          {parts.sub ? (
            <span
              className={`mt-1 block ${
                isHorizontalSplit
                  ? "text-[clamp(0.95rem,2.9vw,1.3rem)] leading-[1.2]"
                  : "text-[clamp(1rem,1.7vw,1.35rem)] leading-[1.16]"
              } ${isDark ? "text-[rgba(230,239,250,0.92)]" : "text-[#41546a]"}`}
            >
              {parts.sub}
            </span>
          ) : null}
        </h3>
        <p
          className={`max-w-[62ch] ${
            isHorizontalSplit ? "mt-3 text-[clamp(0.92rem,2.3vw,1.03rem)] leading-[1.52]" : "mt-4 text-[clamp(0.95rem,1.05vw,1.1rem)] leading-[1.62]"
          } ${isDark ? "text-[rgba(223,234,248,0.9)]" : "text-[#4a5d73]"}`}
        >
          {description}
        </p>
        <ul className={isHorizontalSplit ? "mt-4 space-y-3" : "mt-6 space-y-4"}>
          {highlights.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li key={point} className={`flex items-start gap-3 ${isDark ? "text-white" : "text-[#1a2a3f]"}`}>
                <span
                  className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                    isDark
                      ? "border border-[rgba(171,215,255,0.6)] bg-[rgba(41,143,243,0.16)]"
                      : "border border-[#9bc8f4] bg-[rgba(41,143,243,0.09)]"
                  }`}
                >
                  <Icon size={16} className={isDark ? "text-[#59adff]" : "text-[#248ef3]"} />
                </span>
                <span
                  className={`${
                    isHorizontalSplit ? "text-[clamp(0.9rem,2.35vw,1.05rem)] leading-[1.35]" : "text-[clamp(0.92rem,1.02vw,1.08rem)] leading-[1.4]"
                  } ${isDark ? "text-[rgba(238,245,255,0.96)]" : ""}`}
                >
                  {point}
                </span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <section className="bg-white/20 px-0 py-10 lg:py-14" id="solutions">
      <div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] sm:w-[min(1600px,calc(100%-2.2rem))]">
        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#2490ef]">
          {t("solutions.kicker")}
        </span>
        <h2 className="mt-2 text-[clamp(1.9rem,4vw,3.1rem)] font-bold leading-[1.1] tracking-[-0.015em] text-[#2490ef]">
          {t("solutions.title")}
        </h2>
        <p className="mt-3 text-[clamp(0.92rem,1.15vw,1.15rem)] leading-[1.62] text-[#607186]">
          {t("solutions.description")}
        </p>

        <div className="mt-8">
          <div
            ref={comparisonRef}
            className="relative w-full overflow-hidden rounded-[26px] select-none"
            onMouseMove={(event) => {
              if (!isDragging) return;
              updateInset(event.clientX, event.clientY, event.currentTarget);
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={(event) => {
              if (!isDragging || event.touches.length === 0) return;
              updateInset(event.touches[0].clientX, event.touches[0].clientY, event.currentTarget);
            }}
            onTouchEnd={() => setIsDragging(false)}
          >
            <div className={`relative ${isHorizontalSplit ? "min-h-[780px] sm:min-h-[860px]" : "min-h-[480px] lg:min-h-[480px]"}`}>
              <div className="absolute inset-0 z-0 bg-[#f7f9fc]">
                <img
                  src={agenticAiImage}
                  alt={agenticAiHeadline}
                  className="absolute inset-0 h-full w-full object-cover grayscale-[0.1] opacity-[0.2]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.5)_0%,rgba(248,251,255,0.5)_54%,rgba(245,249,255,0.5)_100%)]" />
                {isHorizontalSplit ? (
                  <div className="absolute inset-x-0 bottom-0 px-6 py-6 sm:px-8 sm:py-8 lg:px-12" style={{ top: `${inset}%` }}>
                    <div className="mx-auto h-full w-full max-w-[900px] overflow-hidden">
                      {renderPanelContent(agenticAiHeadline, agenticAiDescription, agenticAiHighlights, agenticAiIcons, false)}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
                    <div className="ml-auto h-full w-full max-w-[560px] overflow-hidden">
                      {renderPanelContent(agenticAiHeadline, agenticAiDescription, agenticAiHighlights, agenticAiIcons, false)}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="absolute inset-0 z-20 overflow-hidden"
                style={{
                  clipPath: isHorizontalSplit
                    ? `inset(0 0 ${100 - inset}% 0)`
                    : `inset(0 ${100 - inset}% 0 0)`
                }}
              >
                <div className="absolute inset-0 bg-[#1c6fbc]">
                  <img
                    src={modelForgeImage}
                    alt={modelForgeHeadline}
                    className="absolute inset-0 h-full w-full object-cover grayscale opacity-[0.42]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(36,144,239,0.7)_0%,rgba(24,120,214,0.7)_54%,rgba(15,92,176,0.7)_100%)]" />
                  {isHorizontalSplit ? (
                    <div className="absolute inset-x-0 top-0 px-6 py-6 sm:px-8 sm:py-8 lg:px-12" style={{ bottom: `${100 - inset}%` }}>
                      <div className="mx-auto h-full w-full max-w-[900px] overflow-hidden">
                        {renderPanelContent(modelForgeHeadline, modelForgeDescription, modelForgeHighlights, modelForgeIcons, true)}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
                      <div className="h-full w-full max-w-[560px] overflow-hidden">
                        {renderPanelContent(modelForgeHeadline, modelForgeDescription, modelForgeHighlights, modelForgeIcons, true)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`absolute z-30 bg-[rgba(255,255,255,0.7)] ${
                  isHorizontalSplit ? "inset-x-0 h-px" : "inset-y-0 w-px"
                }`}
                style={isHorizontalSplit ? { top: `${inset}%` } : { left: `${inset}%` }}
              >
                <button
                  type="button"
                  aria-label="Slide comparison"
                  className={`absolute grid place-items-center rounded-md border border-[rgba(183,201,224,0.9)] bg-[rgba(246,250,255,0.93)] text-[#1f2e43] shadow-[0_10px_24px_rgba(16,30,48,0.24)] transition-transform duration-200 hover:scale-105 ${
                    isHorizontalSplit
                      ? "left-1/2 h-8 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ns-resize"
                      : "top-1/2 h-12 w-8 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize"
                  }`}
                  style={isHorizontalSplit ? { top: `${inset}%` } : undefined}
                  onMouseDown={(event) => {
                    if (!comparisonRef.current) return;
                    setIsDragging(true);
                    updateInset(event.clientX, event.clientY, comparisonRef.current);
                  }}
                  onTouchStart={(event) => {
                    if (!comparisonRef.current || event.touches.length === 0) return;
                    setIsDragging(true);
                    updateInset(event.touches[0].clientX, event.touches[0].clientY, comparisonRef.current);
                  }}
                  onMouseUp={() => setIsDragging(false)}
                  onTouchEnd={() => setIsDragging(false)}
                >
                  <GripVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[0.73rem] font-bold uppercase tracking-[0.06em] text-[#6f87a3]">
            {t("solutions.process.kicker")}
          </p>
          <motion.div
            className="relative mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[2.85rem] right-[12.5%] left-[12.5%] hidden h-px bg-[linear-gradient(90deg,rgba(35,146,255,0.35),rgba(35,146,255,0.08)_92%,transparent)] xl:block"
            />
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={cardHover}
                className="group relative rounded-2xl border border-[rgba(15,27,42,0.07)] bg-white p-5 shadow-[0_1px_2px_rgba(15,27,42,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-[rgba(35,146,255,0.28)] hover:shadow-[0_26px_46px_-20px_rgba(35,146,255,0.4)]"
              >
                <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2392ff,#3ab1ff)] text-[0.82rem] font-bold text-white shadow-[0_6px_14px_-2px_rgba(35,146,255,0.5)]">
                  {step.number}
                </span>
                <h3 className="mt-3 text-[1.02rem] font-bold leading-[1.3] text-[#132031]">{step.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-[1.55] text-[#4a5d73]">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10">
          <p className="text-[0.73rem] font-bold uppercase tracking-[0.06em] text-[#6f87a3]">
            {t("solutions.differentiators.kicker")}
          </p>
          <motion.div
            className="mt-4 grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {differentiatorItems.map((item) => (
              <motion.div
                key={item.number}
                variants={staggerItem}
                whileHover={cardHover}
                className="rounded-2xl bg-[#f4f7fb] p-6 shadow-[0_1px_2px_rgba(15,27,42,0.03)] transition-shadow duration-300 hover:shadow-[0_26px_46px_-20px_rgba(35,146,255,0.32)]"
              >
                <span className="inline-flex items-center rounded-full bg-[rgba(35,146,255,0.14)] px-2.5 py-1 text-[0.78rem] font-bold text-[#2490ef]">
                  {item.number}
                </span>
                <h3 className="mt-3 text-[1.05rem] font-bold leading-[1.3] text-[#132031]">{item.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[0.9rem] leading-[1.6] text-[#4a5d73]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-5 text-[0.9rem] text-[#4a5d73]">
            {t("solutions.differentiators.ctaPrefix")}
            <button
              type="button"
              onClick={onContactUs}
              className="group/cta inline-flex items-center gap-1 align-baseline font-semibold text-[#2490ef] underline underline-offset-2 transition-colors duration-200 hover:text-[#1976c5]"
            >
              {t("solutions.differentiators.ctaLink")}
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover/cta:translate-x-1"
              />
            </button>
            {t("solutions.differentiators.ctaSuffix")}
          </p>
        </div>
      </div>
    </section>
  );
}
