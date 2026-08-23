import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Image as ImageIcon } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useTranslation } from "react-i18next";
import { getLocalizedProductBySlug, getProductBySlug, type ProductItem } from "../pages/Product/productData";

const mindwalkerLogo = "/assets/logo/mindwalker_logo.png";

const sectionSlugs = ["mind-ops", "mind-sec", "mind-graph", "mind-flow", "visioncraft"];

const mascotBySlug: Record<string, string> = {
  "mind-ops": "/assets/mascots/mindops-mascot.png",
  "mind-sec": "/assets/mascots/mindsoc-mascot.png",
  "mind-graph": "/assets/mascots/mindgraph-mascot.png",
  "mind-flow": "/assets/mascots/mindflow-mascot.png",
  visioncraft: "/assets/mascots/visioncraft-mascot.png"
};

type ProductSectionProps = {
  onOpenProductDetails?: (slug: string) => void;
  onBookDemo?: () => void;
};

export function ProductSection({ onOpenProductDetails, onBookDemo }: ProductSectionProps) {
  const { t } = useTranslation();
  const [activeSlug, setActiveSlug] = useState(sectionSlugs[0]);

  const tabs = useMemo(
    () =>
      sectionSlugs
        .map((slug) => {
          const rawItem = getProductBySlug(slug);
          if (!rawItem) return undefined;
          return getLocalizedProductBySlug(slug, t) ?? rawItem;
        })
        .filter((item): item is ProductItem => Boolean(item)),
    [t]
  );

  const activeItem = useMemo(() => {
    const rawItem = getProductBySlug(activeSlug);
    if (!rawItem) return undefined;

    return getLocalizedProductBySlug(activeSlug, t) ?? rawItem;
  }, [activeSlug, t]);

  if (!activeItem) return null;

  return (
    <section
      className="grid items-center bg-white/20 px-0 py-12 backdrop-blur-lg lg:py-16"
      id="product"
    >
      <div className="mx-auto grid w-[min(1500px,calc(100%-1.5rem))] content-center sm:w-[min(1600px,calc(100%-2rem))]">
        <SectionHeading
          className="[&>h2]:text-[clamp(1.6rem,5.5vw,2.5rem)] [&>h2]:font-bold"
          kicker={t("product.kicker")}
          kickerSlot={
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.95)] px-3 py-2 shadow-[0_5px_14px_rgba(12,28,44,0.12)]">
              <img src={mindwalkerLogo} alt="Mindwalker logo" className="h-5 w-auto object-contain" loading="lazy" />
              <span className="text-[0.96rem] font-semibold text-[#2f3e4f]">{t("product.kicker")}</span>
            </span>
          }
          title={t("product.title")}
          description={t("product.description")}
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveSlug(item.slug)}
                className={
                  isActive
                    ? "flex flex-col items-start gap-0.5 rounded-2xl bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-4 py-2.5 text-left shadow-[0_8px_18px_rgba(35,146,255,0.32)] transition-all duration-300"
                    : "flex flex-col items-start gap-0.5 rounded-2xl border border-[rgba(15,27,42,0.06)] bg-[#f1f4f9] px-4 py-2.5 text-left transition-all duration-300 hover:border-[rgba(35,146,255,0.35)]"
                }
              >
                <span
                  className={`text-[0.64rem] font-bold uppercase tracking-[0.06em] ${
                    isActive ? "text-white/85" : "text-[#8a97a8]"
                  }`}
                >
                  {item.label}
                </span>
                <span className={`text-[0.95rem] font-bold ${isActive ? "text-white" : "text-[#132031]"}`}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-visible rounded-[28px] border border-[rgba(15,27,42,0.08)] bg-white shadow-[0_14px_34px_rgba(8,15,28,0.1)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid gap-6 p-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:p-8"
            >
              <div className="flex flex-col">
                <span className="inline-flex w-fit items-center rounded-full bg-[rgba(35,146,255,0.12)] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#1976c5]">
                  {activeItem.label}
                </span>
                <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-tight text-[#111c2b]">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[#5b6b80]">{activeItem.description}</p>

                <hr className="my-5 border-[rgba(15,27,42,0.08)]" />

                <ul className="flex flex-col gap-2.5">
                  {activeItem.featurePoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.9rem] text-[#2f3e4f]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#2392ff]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={onBookDemo}
                    className="rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-5 py-2.5 text-[0.85rem] font-bold text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {t("product.bookDemo")}
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenProductDetails?.(activeItem.slug)}
                    className="rounded-full border border-[rgba(15,27,42,0.14)] bg-transparent px-5 py-2.5 text-[0.85rem] font-semibold text-[#2f3e4f] transition-colors duration-300 hover:border-[rgba(35,146,255,0.4)] hover:text-[#1976c5]"
                  >
                    {t("product.viewDetails")} &rarr;
                  </button>
                </div>
              </div>

              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-[rgba(15,27,42,0.08)] bg-[#f4f7fb]">
                  {activeItem.isComingSoon || !activeItem.imageDetailsUrl ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-[rgba(15,27,42,0.14)] text-[#8a97a8]">
                      <ImageIcon size={28} strokeWidth={1.5} />
                      <p className="px-4 text-center text-[0.85rem] font-medium">
                        {t("product.screenshotUnavailable")}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={activeItem.imageDetailsUrl}
                      alt={activeItem.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <img
                  src={mascotBySlug[activeItem.slug]}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 -right-4 z-10 w-28 drop-shadow-xl sm:-top-10 sm:-right-6 sm:w-36 lg:-top-12 lg:-right-8 lg:w-40"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
