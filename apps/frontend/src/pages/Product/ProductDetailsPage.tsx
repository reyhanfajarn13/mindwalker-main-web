import { useEffect, useMemo, useState } from "react";
import {
  BellRing,
  Download,
  FileCheck2,
  FileText,
  Lightbulb,
  Plus,
  Radar,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { FooterSection } from "../../sections/FooterSection";
import { getLocalizedProductBySlug } from "./productData";
import { useImagePreload } from "../../lib/useImagePreload";

const heroDetailsBackground = "https://ik.imagekit.io/mindwalker/public/assets/heroDetailsBackground.webp?updatedAt=1772427037701&tr=w-1600,q-72";

type ProductDetailsPageProps = {
  productSlug: string;
  onOpenNewsDetails?: (id: number) => void;
  onOpenDemo?: () => void;
};

export function ProductDetailsPage({ productSlug, onOpenNewsDetails, onOpenDemo }: ProductDetailsPageProps) {
  const { t } = useTranslation();
  const product = useMemo(() => getLocalizedProductBySlug(productSlug, t), [productSlug, t]);
  const [openBenefitIndex, setOpenBenefitIndex] = useState(0);
  const [pdfViewerType, setPdfViewerType] = useState<"datasheet" | "brocure" | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const isPdfViewerOpen = pdfViewerType !== null;
  const activePdfUrl =
    pdfViewerType === "brocure" ? product?.brocurePDFUrl : product?.datasheetPdfUrl;
  const activePdfLabel = pdfViewerType === "brocure" ? "Product Brochure" : "Product Datasheet";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px), (pointer: coarse)");
    const syncViewportMode = () => setIsMobileViewport(mediaQuery.matches);

    syncViewportMode();
    mediaQuery.addEventListener("change", syncViewportMode);

    return () => mediaQuery.removeEventListener("change", syncViewportMode);
  }, []);

  useEffect(() => {
    if (!isPdfViewerOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPdfViewerType(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isPdfViewerOpen]);

  if (!product) {
    return (
      <div className="bg-[#ececf0] px-4 pb-12 pt-[6rem] sm:px-6">
        <div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] rounded-2xl bg-white p-6 text-center shadow-[0_8px_24px_rgba(24,39,58,0.12)] sm:w-[min(1600px,calc(100%-2rem))]">
          <h1 className="text-[1.8rem] font-bold text-[#243242]">{t("productDetails.common.notFoundTitle")}</h1>
          <p className="mt-2 text-[#627489]">{t("productDetails.common.notFoundMessage")}</p>
        </div>
      </div>
    );
  }

  void onOpenNewsDetails;
  void onOpenDemo;
  const featureIcons = useMemo(() => {
    if (product.slug === "mind-ops") {
      return [BellRing, SearchCheck, Lightbulb, UsersRound];
    }

    if (product.slug === "mind-sec") {
      return [ShieldAlert, Radar, ShieldCheck, FileCheck2];
    }

    if (product.slug === "mind-gateway") {
      return [ShieldCheck, SearchCheck, Workflow, FileCheck2];
    }

    return [Sparkles, Workflow, Lightbulb, UsersRound];
  }, [product.slug]);
  useImagePreload([heroDetailsBackground]);

  return (
    <div className="bg-[#white]">
      <section className="relative min-h-[calc(100vh-1.5rem)] overflow-hidden px-4 pb-14 pt-[6rem] sm:px-6 sm:pb-16">
        <div className="group/hero absolute inset-0">
          <img
            src={heroDetailsBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover min-[1000px]:grayscale transition-[filter,transform] duration-700 ease-out min-[1000px]:group-hover/hero:scale-[1.02] min-[1000px]:group-hover/hero:grayscale-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[rgba(8,14,24,0.66)] transition-colors duration-500 group-hover/hero:bg-[rgba(8,14,24,0.48)]" />
        </div>
        <div data-scroll-fade className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-[min(1500px,calc(100%-1.5rem))] items-center sm:w-[min(1600px,calc(100%-2rem))]">
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
              onClick={() => setPdfViewerType(product.brocurePDFUrl ? "brocure" : null)}
              className="mt-6 inline-flex items-center rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-7 py-2.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_28px_rgba(23,122,217,0.35)]"
            >
              Product Overview
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
                    className="h-[clamp(140px,20vh,220px)] w-full object-cover min-[1000px]:grayscale transition-[filter,transform] duration-500 ease-out min-[1000px]:group-hover:scale-[1.08] min-[1000px]:group-hover:grayscale-0"
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

      <section className="px-4 py-14 sm:px-6 sm:py-16 bg-[rgba(255,255,255,0.95)]">
        <div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] sm:w-[min(1600px,calc(100%-2rem))]">
          <h2 className="text-center text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold text-[#2490ef]">{product.featureHeading}</h2>
          <p className="mx-auto mt-2 max-w-[70ch] text-center text-[0.98rem] leading-[1.7] text-[#6a7b91]">
            {product.featureDescription}
          </p>

          <div data-scroll-fade className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
            <button
              type="button"
              onClick={() => setPdfViewerType(product.datasheetPdfUrl ? "datasheet" : null)}
              className="group relative overflow-hidden rounded-3xl text-left"
            >
              <img
                src={product.imageDetailsUrl}
                alt={product.title}
                className="block h-auto max-h-[74vh] w-full object-contain min-[1000px]:grayscale transition-[filter] duration-500 ease-out min-[1000px]:group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(3,10,20,0.58)_0%,rgba(3,10,20,0.08)_50%,rgba(3,10,20,0)_100%)]" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[rgba(10,20,36,0.72)] px-4 py-2 text-[0.82rem] font-semibold text-white backdrop-blur-sm">
                <FileText size={16} />
                View Datasheet PDF
              </div>
            </button>
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

      <section className="px-4 pb-14 pt-2 sm:px-6 sm:pb-16 sm:pt-4 bg-[rgba(255,255,255,0.95)]">
        <div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] sm:w-[min(1600px,calc(100%-2rem))]">
          <h2 className="text-center text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-[#2490ef]">{t("productDetails.common.businessImpactTitle")}</h2>
          <div data-scroll-fade className="mt-6 overflow-hidden rounded-2xl border-y border-[#d8dee7] bg-transparent shadow-[0_10px_26px_rgba(28,45,66,0.08)]">
              {product.enterpriseBenefits.map((benefit, index) => {
                const isOpen = openBenefitIndex === index;
                const number = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={benefit.title}
                    className="border-b border-[#d8dee7] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenBenefitIndex((current) => (current === index ? -1 : index))}
                      className={`group touch-hover-hold relative grid w-full grid-cols-[74px_1fr_auto] items-center gap-4 overflow-hidden px-4 py-4 text-left transition-colors duration-300 sm:grid-cols-[120px_1fr_auto] sm:px-6 sm:py-6 ${
                        isOpen ? "bg-[#198ef3] text-white" : "bg-transparent text-[#101926] hover:text-white max-[1000px]:active:text-white"
                      }`}
                    >
                      <span
                        className={`pointer-events-none absolute inset-0 -z-0 bg-[#198ef3] transition-transform duration-300 ease-in ${
                          isOpen ? "translate-y-0" : "translate-y-full group-hover:translate-y-0 max-[1000px]:group-active:translate-y-0"
                        }`}
                      />
                      <span
                        className={`relative z-10 text-[clamp(1.3rem,3.4vw,1.3rem)] leading-none transition-transform duration-300 ease-in ${
                          isOpen ? "translate-x-1 text-white" : "text-[#101926] group-hover:translate-x-4 group-hover:text-white max-[1000px]:group-active:translate-x-4 max-[1000px]:group-active:text-white"
                        }`}
                      >
                        {number}
                      </span>
                      <span className="relative z-10 text-[clamp(1.3rem,4.2vw,1.3rem)] font-medium leading-[1.08] transition-colors duration-300">
                        {benefit.title}
                      </span>
                      <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-[#8ac8ff] bg-[rgba(25,142,243,0.2)] transition-all duration-300 group-hover:bg-[rgba(255,255,255,0.26)] max-[1000px]:group-active:bg-[rgba(255,255,255,0.26)] sm:h-11 sm:w-11">
                        <Plus
                          size={20}
                          className={`transition-transform duration-300 ${isOpen ? "rotate-45 text-[#198ef3]" : "text-[#198ef3]"}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="bg-[#edf2f8] px-4 pb-5 pt-1 text-[1.1rem] leading-[1.7] text-[#4f6074] sm:px-6">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <h2 className="mt-12 text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-[#2490ef]">{t("productDetails.common.useCasesTitle", { product: product.title })}</h2>
          <div data-scroll-fade className="mt-5 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.useCases.map((item) => (
              <article
                key={item.id}
                className="group touch-hover-hold relative h-full overflow-hidden rounded-2xl bg-transparent transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[rgba(25,142,243,0.5)] hover:backdrop-blur-sm hover:shadow-[0_22px_46px_rgba(25,142,243,0.46)] max-[1000px]:active:scale-[1.02] max-[1000px]:active:bg-[rgba(25,142,243,0.5)] max-[1000px]:active:backdrop-blur-sm max-[1000px]:active:shadow-[0_22px_46px_rgba(25,142,243,0.46)]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-auto w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10] object-cover min-[1000px]:grayscale transition-[filter,transform] duration-500 ease-out min-[1000px]:group-hover:scale-[1.08] min-[1000px]:group-hover:grayscale-0 max-[1000px]:group-active:scale-[1.08]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 max-[1000px]:bg-[rgba(255,255,255,0.12)] max-[1000px]:backdrop-blur-[1.2px]" />
                <div className="absolute inset-0 bg-[rgba(4,10,22,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-[1000px]:group-active:opacity-100" />
                <div className="relative bg-transparent px-0 pb-1 pt-3 transition-all duration-300 group-hover:bg-[rgba(173,218,255,0.14)] group-hover:backdrop-blur-lg group-hover:px-4 group-hover:pb-4 group-hover:pt-4 max-[1000px]:group-active:bg-[rgba(173,218,255,0.14)] max-[1000px]:group-active:backdrop-blur-lg max-[1000px]:group-active:px-4 max-[1000px]:group-active:pb-4 max-[1000px]:group-active:pt-4">
                  <h3 className="line-clamp-1 text-[1rem] font-semibold text-[#0f1720] transition-colors duration-300 group-hover:text-white max-[1000px]:group-active:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[0.88rem] text-[#3a4656] transition-colors duration-300 group-hover:text-[rgba(236,245,255,0.96)] max-[1000px]:group-active:text-[rgba(236,245,255,0.96)]">
                    {item.excerpt}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-[0.8rem] font-semibold text-[#1d8cf0] transition-colors duration-300 hover:text-[#1173cf] group-hover:text-white group-hover:hover:text-white max-[1000px]:group-active:text-white"
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

      {isPdfViewerOpen && activePdfUrl ? (
        <div
          className="fixed inset-0 z-[220] grid place-items-center bg-[rgba(6,12,20,0.72)] p-0 backdrop-blur-[2px] sm:p-6"
          onClick={() => setPdfViewerType(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.title} PDF viewer`}
        >
          <div
            className={`relative flex flex-col overflow-hidden border border-[rgba(183,197,216,0.55)] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.38)] ${
              isMobileViewport
                ? "h-[100dvh] w-full rounded-none"
                : "h-[min(92vh,980px)] w-[min(1200px,100%)] rounded-2xl"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#d7deea] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                  <p className="line-clamp-1 text-[0.8rem] text-[#6b7c92]">{activePdfLabel}</p>
                <h3 className="line-clamp-1 text-[1rem] font-semibold text-[#1d2c3f]">{product.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#b8c7da] bg-white px-3 py-2 text-[0.78rem] font-semibold text-[#32465e]"
                >
                  <FileText size={14} />
                  Open
                </a>
                <a
                  href={activePdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-3 py-2 text-[0.8rem] font-semibold text-white"
                >
                  <Download size={14} />
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setPdfViewerType(null)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#eef2f8] text-[#3d4b5e] transition-colors hover:bg-[#dfe7f2]"
                  aria-label="Close datasheet"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="h-full min-h-0 overflow-y-auto bg-[#eff2f6] p-2 sm:p-3" style={{ WebkitOverflowScrolling: "touch" }}>
              <iframe
                src={`${activePdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH&zoom=page-width`}
                title={`${product.title} PDF`}
                className={`w-full rounded-lg border border-[#d6dee9] bg-white ${
                  isMobileViewport ? "h-[calc(100dvh-10rem)] min-h-[70dvh]" : "h-full"
                }`}
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
