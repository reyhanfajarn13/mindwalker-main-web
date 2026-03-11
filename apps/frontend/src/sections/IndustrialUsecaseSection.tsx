import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  HandCoins,
  HeartPulse,
  ShoppingCart,
  Zap
} from "lucide-react";
import { industrialUsecaseData } from "./industrialUsecaseData";
import { useTranslation } from "react-i18next";

export function IndustrialUsecaseSection() {
  const { t } = useTranslation();
  const getIndustryFromSearch = () => {
    const industryId = new URLSearchParams(window.location.search).get("industry") ?? "";
    return industrialUsecaseData.some((industry) => industry.id === industryId) ? industryId : "";
  };
  const [openIndustryId, setOpenIndustryId] = useState(getIndustryFromSearch);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const openIndustry = industrialUsecaseData.find((industry) => industry.id === openIndustryId) ?? null;
  const openIndustryIndex = industrialUsecaseData.findIndex((industry) => industry.id === openIndustryId);
  const firstRowIndustries = industrialUsecaseData.slice(0, 3);
  const secondRowIndustries = industrialUsecaseData.slice(3, 6);
  const openFirstRowIndustry = openIndustryIndex >= 0 && openIndustryIndex < 3 ? openIndustry : null;
  const openSecondRowIndustry = openIndustryIndex >= 3 ? openIndustry : null;
  const getIndustryIcon = (industryId: string) => {
    if (industryId === "governance") return Building2;
    if (industryId === "financial-services") return HandCoins;
    if (industryId === "manufacturing") return Factory;
    if (industryId === "energy-utilities") return Zap;
    if (industryId === "retail") return ShoppingCart;
    return HeartPulse;
  };

  useEffect(() => {
    const syncOpenIndustryFromUrl = () => {
      setOpenIndustryId(getIndustryFromSearch());
    };

    window.addEventListener("popstate", syncOpenIndustryFromUrl);
    window.addEventListener("hashchange", syncOpenIndustryFromUrl);
    return () => {
      window.removeEventListener("popstate", syncOpenIndustryFromUrl);
      window.removeEventListener("hashchange", syncOpenIndustryFromUrl);
    };
  }, []);

  return (
    <section id="industrial-usecases" className="grid bg-white/20 px-0 py-12 lg:py-16">
      <div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] sm:w-[min(1600px,calc(100%-2rem))]">
        <h1 className="text-[clamp(1.6rem,5vw,2.5rem)] leading-[1.05] text-[#198ef3] font-bold">
          {t("industrialUsecases.title")}
        </h1>

        <div className="mt-6 border-y border-[#d8dee7] max-[999px]:block min-[1000px]:hidden">
          {industrialUsecaseData.map((industry) => {
            const isOpen = industry.id === openIndustryId;
            return (
              <div key={industry.id} className="border-b border-[#d8dee7] last:border-b-0">
                <button
                  type="button"
                  onClick={() => {
                    setOpenIndustryId((current) => (current === industry.id ? "" : industry.id));
                  }}
                  className={`group touch-hover-hold relative overflow-hidden grid w-full grid-cols-[74px_1fr_auto] items-center gap-4 px-3 py-4 text-left transition-colors duration-500 ease-in sm:grid-cols-[120px_1fr_auto] sm:px-5 sm:py-6 ${
                    isOpen ? "bg-[#198ef3] text-white" : "bg-transparent text-[#101926] hover:text-white max-[1000px]:active:text-white"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-0 -z-0 bg-[#198ef3] transition-transform duration-300 ease-in ${
                      isOpen ? "translate-y-0" : "translate-y-full group-hover:translate-y-0 max-[1000px]:group-active:translate-y-0"
                    }`}
                  />
                  <span
                    className={`relative z-10 text-[clamp(1.7rem,3.4vw,1.7rem)] leading-none transition-transform duration-300 ease-in ${
                      isOpen ? "translate-x-1" : "group-hover:translate-x-4 max-[1000px]:group-active:translate-x-4"
                    }`}
                  >
                    {industry.number}
                  </span>
                  <span className="relative z-10 text-[clamp(1.6rem,4.2vw,1.7rem)] leading-[1.06]">{t(industry.labelKey)}</span>
                  <ArrowRight
                    size={48}
                    className={`relative z-10 transition-transform duration-500 ease-in ${isOpen ? "rotate-90" : "group-hover:translate-x-3 max-[1000px]:group-active:translate-x-3"}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-4 bg-[#edf2f8] px-3 pb-5 pt-4 sm:grid-cols-2 sm:px-5 lg:flex lg:gap-5">
                      {industry.cards.map((card) => (
                        <article
                          key={card.id}
                          onMouseEnter={() => setHoveredCardId(card.id)}
                          onMouseLeave={() => setHoveredCardId(null)}
                          className={`group touch-hover-hold relative h-[440px] overflow-hidden rounded-[28px] bg-[#071224] shadow-[0_14px_32px_rgba(24,39,58,0.2)] transition-[flex,transform,filter] duration-500 ease-out lg:basis-0 ${
                            hoveredCardId === null
                              ? "lg:flex-[1]"
                              : hoveredCardId === card.id
                                ? "lg:flex-[1.65]"
                                : "lg:flex-[0.72]"
                          }`}
                        >
                          <img
                            src={card.imageUrl}
                            alt={t(card.titleKey)}
                            className="absolute inset-0 h-full w-full object-cover min-[1000px]:grayscale min-[1000px]:brightness-[0.72] max-[1000px]:blur-[0.8px] max-[1000px]:brightness-[0.96] max-[1000px]:saturate-[1.05] transition-[filter,transform] duration-500 ease-out min-[1000px]:group-hover:scale-[1.04] min-[1000px]:group-hover:grayscale-0 min-[1000px]:group-hover:brightness-100 max-[1000px]:group-active:scale-[1.04]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,8,16,0.9)_0%,rgba(3,8,16,0.42)_45%,rgba(3,8,16,0.16)_100%)]" />
                          <div className="absolute inset-0 max-[1000px]:bg-[rgba(255,255,255,0.12)] max-[1000px]:backdrop-blur-[1.2px]" />
                          <div className="absolute inset-x-6 bottom-6">
                            <h3 className="mt-2 line-clamp-2 text-[clamp(1.2rem,2.5vw,1.2rem)] font-semibold leading-[1.04] text-white">
                              {t(card.titleKey)}
                            </h3>
                            <p className="mt-2 line-clamp-2 max-w-[36ch] text-[0.75rem] text-[rgba(229,237,248,0.92)]">
                              {t(card.excerptKey)}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 hidden min-[1000px]:block">
          <div className="grid grid-cols-3 border-x border-t border-white">
            {firstRowIndustries.map((industry) => {
              const isOpen = industry.id === openIndustryId;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => {
                    setOpenIndustryId((current) => (current === industry.id ? "" : industry.id));
                  }}
                  className={`group touch-hover-hold relative overflow-hidden border-r border-[#d8dee7] p-7 text-left transition-colors duration-500 ease-in last:border-r-0 min-h-[220px] ${
                    isOpen
                      ? "bg-[#198ef3] text-white"
                      : "bg-[rgba(255,255,255,0.62)] text-[#101926] backdrop-blur-md hover:text-white"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-0 -z-0 bg-[#198ef3] transition-transform duration-300 ease-in ${
                      isOpen ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                    }`}
                  />
                  <span
                    className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm ${
                      isOpen
                        ? "border-[rgba(214,237,255,0.7)] bg-[rgba(255,255,255,0.22)] text-white"
                        : "border-[rgba(32,60,92,0.2)] bg-[rgba(255,255,255,0.7)] text-[#15283d] group-hover:border-[rgba(214,237,255,0.7)] group-hover:bg-[rgba(255,255,255,0.22)] group-hover:text-white"
                    }`}
                  >
                    {(() => {
                      const IndustryIcon = getIndustryIcon(industry.id);
                      return <IndustryIcon size={22} strokeWidth={2.1} />;
                    })()}
                  </span>
                  <h3 className="relative z-10 mt-8 max-w-[13ch] text-[clamp(2rem,2.5vw,2.5rem)] font-semibold leading-[1.06]">
                    {t(industry.labelKey)}
                  </h3>
                  <ArrowRight
                    size={34}
                    className={`absolute bottom-7 right-7 z-10 transition-transform duration-500 ease-in ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-2"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            className={`grid transition-all duration-400 ease-out ${
              openFirstRowIndustry ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-4 bg-[#white] px-3 pb-5 pt-4 sm:grid-cols-2 sm:px-5 lg:flex lg:gap-5">
                {(openFirstRowIndustry?.cards ?? []).map((card) => (
                  <article
                    key={card.id}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    className={`group touch-hover-hold relative h-[440px] overflow-hidden rounded-[28px] bg-[#071224] shadow-[0_14px_32px_rgba(24,39,58,0.2)] transition-[flex,transform,filter] duration-500 ease-out lg:basis-0 ${
                      hoveredCardId === null
                        ? "lg:flex-[1]"
                        : hoveredCardId === card.id
                          ? "lg:flex-[1.65]"
                          : "lg:flex-[0.72]"
                    }`}
                  >
                    <img
                      src={card.imageUrl}
                      alt={t(card.titleKey)}
                      className="absolute inset-0 h-full w-full object-cover min-[1000px]:grayscale min-[1000px]:brightness-[0.72] max-[1000px]:blur-[0.8px] max-[1000px]:brightness-[0.96] max-[1000px]:saturate-[1.05] transition-[filter,transform] duration-500 ease-out min-[1000px]:group-hover:scale-[1.04] min-[1000px]:group-hover:grayscale-0 min-[1000px]:group-hover:brightness-100 max-[1000px]:group-active:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,8,16,0.9)_0%,rgba(3,8,16,0.42)_45%,rgba(3,8,16,0.16)_100%)]" />
                    <div className="absolute inset-0 max-[1000px]:bg-[rgba(255,255,255,0.12)] max-[1000px]:backdrop-blur-[1.2px]" />
                    <div className="absolute inset-x-6 bottom-6">
                      <h3 className="mt-2 line-clamp-2 text-[clamp(1.2rem,2.5vw,1.2rem)] font-semibold leading-[1.04] text-white">
                        {t(card.titleKey)}
                      </h3>
                      <p className="mt-2 line-clamp-2 max-w-[36ch] text-[0.75rem] text-[rgba(229,237,248,0.92)]">
                        {t(card.excerptKey)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-[#bcc8d8]" />

          <div className="grid grid-cols-3 border-x border-b border-white">
            {secondRowIndustries.map((industry) => {
              const isOpen = industry.id === openIndustryId;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => {
                    setOpenIndustryId((current) => (current === industry.id ? "" : industry.id));
                  }}
                  className={`group touch-hover-hold relative overflow-hidden border-r border-[#d8dee7] p-7 text-left transition-colors duration-500 ease-in last:border-r-0 min-h-[220px] ${
                    isOpen
                      ? "bg-[#198ef3] text-white"
                      : "bg-[rgba(255,255,255,0.62)] text-[#101926] backdrop-blur-md hover:text-white"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-0 -z-0 bg-[#198ef3] transition-transform duration-300 ease-in ${
                      isOpen ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                    }`}
                  />
                  <span
                    className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm ${
                      isOpen
                        ? "border-[rgba(214,237,255,0.7)] bg-[rgba(255,255,255,0.22)] text-white"
                        : "border-[rgba(32,60,92,0.2)] bg-[rgba(255,255,255,0.7)] text-[#15283d] group-hover:border-[rgba(214,237,255,0.7)] group-hover:bg-[rgba(255,255,255,0.22)] group-hover:text-white"
                    }`}
                  >
                    {(() => {
                      const IndustryIcon = getIndustryIcon(industry.id);
                      return <IndustryIcon size={22} strokeWidth={2.1} />;
                    })()}
                  </span>
                  <h3 className="relative z-10 mt-8 max-w-[13ch] text-[clamp(2rem,2.5vw,2.5rem)] font-semibold leading-[1.06]">
                    {t(industry.labelKey)}
                  </h3>
                  <ArrowRight
                    size={34}
                    className={`absolute bottom-7 right-7 z-10 transition-transform duration-500 ease-in ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-2"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            className={`grid transition-all duration-400 ease-out ${
              openSecondRowIndustry ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-4 bg-[#white] px-3 pb-5 pt-4 sm:grid-cols-2 sm:px-5 lg:flex lg:gap-5">
                {(openSecondRowIndustry?.cards ?? []).map((card) => (
                  <article
                    key={card.id}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    className={`group touch-hover-hold relative h-[440px] overflow-hidden rounded-[28px] bg-[#071224] shadow-[0_14px_32px_rgba(24,39,58,0.2)] transition-[flex,transform,filter] duration-500 ease-out lg:basis-0 ${
                      hoveredCardId === null
                        ? "lg:flex-[1]"
                        : hoveredCardId === card.id
                          ? "lg:flex-[1.65]"
                          : "lg:flex-[0.72]"
                    }`}
                  >
                    <img
                      src={card.imageUrl}
                      alt={t(card.titleKey)}
                      className="absolute inset-0 h-full w-full object-cover min-[1000px]:grayscale min-[1000px]:brightness-[0.72] max-[1000px]:blur-[0.9px] max-[1000px]:brightness-[0.96] transition-[filter,transform] duration-500 ease-out min-[1000px]:group-hover:scale-[1.04] min-[1000px]:group-hover:grayscale-0 min-[1000px]:group-hover:brightness-100 max-[1000px]:group-active:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,8,16,0.9)_0%,rgba(3,8,16,0.42)_45%,rgba(3,8,16,0.16)_100%)]" />
                    <div className="absolute inset-0 max-[1000px]:bg-[rgba(255,255,255,0.12)] max-[1000px]:backdrop-blur-[1.2px]" />
                    <div className="absolute inset-x-6 bottom-6">
                      <h3 className="mt-2 line-clamp-2 text-[clamp(1.2rem,2.5vw,1.2rem)] font-semibold leading-[1.04] text-white">
                        {t(card.titleKey)}
                      </h3>
                      <p className="mt-2 line-clamp-2 max-w-[36ch] text-[0.75rem] text-[rgba(229,237,248,0.92)]">
                        {t(card.excerptKey)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
