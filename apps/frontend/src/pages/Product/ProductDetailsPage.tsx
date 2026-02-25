import { useMemo, useState } from "react";
import {
  BellRing,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  Lightbulb,
  Radar,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { FooterSection } from "../../sections/FooterSection";
import { getLocalizedProductBySlug } from "./productData";
import heroDetailsBackground from "../../assets/heroDetailsBackground.png";

type ProductDetailsPageProps = {
  productSlug: string;
  onOpenNewsDetails?: (id: number) => void;
};

export function ProductDetailsPage({ productSlug, onOpenNewsDetails }: ProductDetailsPageProps) {
  const { t } = useTranslation();
  const product = useMemo(() => getLocalizedProductBySlug(productSlug, t), [productSlug, t]);
  const [openBenefitIndex, setOpenBenefitIndex] = useState(0);

  if (!product) {
    return (
      <div className="bg-[#ececf0] px-4 pb-12 pt-[6rem] sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)] rounded-2xl bg-white p-6 text-center shadow-[0_8px_24px_rgba(24,39,58,0.12)]">
          <h1 className="text-[1.8rem] font-bold text-[#243242]">{t("productDetails.common.notFoundTitle")}</h1>
          <p className="mt-2 text-[#627489]">{t("productDetails.common.notFoundMessage")}</p>
        </div>
      </div>
    );
  }

  void onOpenNewsDetails;
  const featureIcons = useMemo(() => {
    if (product.slug === "mind-ops") {
      return [BellRing, SearchCheck, Lightbulb, UsersRound];
    }

    if (product.slug === "mind-sec") {
      return [ShieldAlert, Radar, ShieldCheck, FileCheck2];
    }

    return [Sparkles, Workflow, Lightbulb, UsersRound];
  }, [product.slug]);
  const activeBenefitIndex = openBenefitIndex >= 0 ? openBenefitIndex : 0;
  const activeBenefitImage =
    product.enterpriseBenefits[activeBenefitIndex]?.imageUrl || product.imageDetailsUrl || product.imageUrl;

  return (
    <div className="bg-[#ececf0]">
      <section className="relative min-h-[calc(100vh-1.5rem)] overflow-hidden px-4 pb-14 pt-[6rem] sm:px-6 sm:pb-16">
        <div className="group/hero absolute inset-0">
          <img
            src={heroDetailsBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover/hero:scale-[1.02] group-hover/hero:grayscale-0"
          />
          <div className="absolute inset-0 bg-[rgba(8,14,24,0.66)] transition-colors duration-500 group-hover/hero:bg-[rgba(8,14,24,0.48)]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-[min(1120px,100%)] items-center">
          <div className="max-w-[780px]">
            <h1 className="text-[clamp(2.2rem,5.2vw,3.9rem)] font-bold leading-[1.02] text-[#2f92ff]">
              <span className="text-white">{product.title.split(" ")[0]}</span>
              {product.title.includes(" ") ? ` ${product.title.split(" ").slice(1).join(" ")}` : ""}
            </h1>
            <p className="mt-4 max-w-[66ch] text-[clamp(1rem,1.4vw,1.1rem)] leading-[1.75] text-[rgba(231,241,255,0.94)]">
              {product.heroDescription}
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-7 py-2.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_28px_rgba(23,122,217,0.35)]"
            >
              {product.demoLabel}
            </button>
          </div>

          {/* Temporary hidden hero news cards in ProductDetailsPage.
          <div className={`mt-8 grid gap-3 ${heroCardGridClass}`}>
            {heroNewsCards.map((item) => {
              return (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-[rgba(15,26,42,0.78)] transition-transform duration-400 ease-out hover:scale-[1.03]"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-[clamp(140px,20vh,220px)] w-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.08] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[rgba(4,10,22,0.2)] transition-colors duration-300" />
                  <div className="relative rounded-b-2xl bg-transparent p-3 transition-colors duration-300 group-hover:bg-white">
                    <h3 className="line-clamp-1 text-[clamp(1rem,1.4vw,1.1rem)] font-semibold text-white transition-colors duration-300 group-hover:text-[#0f1720]">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[0.8rem] text-[rgba(225,236,249,0.92)] transition-colors duration-300 group-hover:text-[#1f2a37]">
                      {item.excerpt}
                    </p>
                    <button
                      type="button"
                      onClick={() => onOpenNewsDetails?.(item.id)}
                      className="mt-2 text-[0.8rem] font-semibold text-[#1d8cf0] transition-colors duration-300 hover:text-[#1173cf]"
                    >
                      {t("productDetails.common.learnMore")} -&gt;
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          */}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto w-[min(1120px,100%)]">
          <h2 className="text-center text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold text-[#2490ef]">{product.featureHeading}</h2>
          <p className="mx-auto mt-2 max-w-[70ch] text-center text-[0.98rem] leading-[1.7] text-[#6a7b91]">
            {product.featureDescription}
          </p>

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
            <div className="group overflow-hidden rounded-3xl">
              <img
                src={product.imageDetailsUrl}
                alt={product.title}
                className="h-[clamp(280px,56vh,74vh)] w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
              />
            </div>
            <div className="grid h-full content-between gap-4 py-2">
              {product.featurePoints.map((point, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <div key={point} className="flex flex-col items-center text-center">
                    <Icon size={25} className="text-[#27313e]" />
                    <p className="mt-2 text-[0.98rem] font-medium text-[#3a4656]">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-2 sm:px-6 sm:pb-16 sm:pt-4">
        <div className="mx-auto w-[min(1120px,100%)]">
          <h2 className="text-center text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-[#2490ef]">{t("productDetails.common.businessImpactTitle")}</h2>
          <div className="mt-6 grid gap-0 lg:grid-cols-[1fr_340px]">
            <div className="max-h-[min(62vh,620px)] overflow-y-auto rounded-l-3xl bg-transparent shadow-[0_10px_26px_rgba(28,45,66,0.12)]">
              {product.enterpriseBenefits.map((benefit, index) => {
                const isOpen = openBenefitIndex === index;
                return (
                  <div
                    key={benefit.title}
                    className={`border-b border-[#d3dae5] transition-colors duration-300 last:border-b-0 ${
                      isOpen ? "bg-white" : "bg-[#ececf0]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenBenefitIndex((current) => (current === index ? -1 : index))}
                      className="flex w-full items-center justify-between px-4 py-3 text-left sm:px-5"
                    >
                      <span className="text-[0.95rem] font-semibold text-[#2a3c51]">{benefit.title}</span>
                      {isOpen ? <ChevronDown size={18} className="text-[#248cf0]" /> : <ChevronRight size={18} className="text-[#788ba3]" />}
                    </button>
                    {isOpen ? <p className="px-4 pb-4 text-[0.92rem] leading-[1.65] text-[#5f6f83] sm:px-5">{benefit.description}</p> : null}
                  </div>
                );
              })}
            </div>

            <div className="group overflow-hidden rounded-r-3xl shadow-[0_10px_26px_rgba(28,45,66,0.12)]">
              <img
                src={activeBenefitImage}
                alt={product.enterpriseBenefits[activeBenefitIndex]?.title ?? t("productDetails.common.benefitImageAltFallback")}
                className="h-[clamp(240px,42vh,420px)] w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
              />
            </div>
          </div>

          <h2 className="mt-12 text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-[#2490ef]">{t("productDetails.common.useCasesTitle", { product: product.title })}</h2>
          <div className="mt-5 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.useCases.map((item) => (
              <article
                key={item.id}
                className="group relative h-full overflow-hidden rounded-2xl bg-transparent transition-all duration-300 ease-out hover:scale-[1.03] group-hover:bg-white group-hover:shadow-[0_14px_32px_rgba(24,39,58,0.2)]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-[clamp(140px,22vh,230px)] w-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.08] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[rgba(4,10,22,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative bg-transparent px-0 pb-1 pt-3 transition-all duration-300 group-hover:bg-white group-hover:px-4 group-hover:pb-4 group-hover:pt-4">
                  <h3 className="line-clamp-1 text-[1rem] font-semibold text-[#0f1720] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[0.88rem] text-[#3a4656] transition-colors duration-300">
                    {item.excerpt}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-[0.8rem] font-semibold text-[#1d8cf0] transition-colors duration-300 hover:text-[#1173cf]"
                  >
                    {t("productDetails.common.learnMore")} -&gt;
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="[&_footer]:min-h-0 [&_footer]:snap-none [&_footer]:items-start [&_footer>div]:pt-0 [&_footer>div]:lg:min-h-0 [&_footer>div]:lg:grid-rows-[auto]">
        <FooterSection />
      </div>
    </div>
  );
}
