import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { industrialUsecaseData } from "./industrialUsecaseData";
import { useTranslation } from "react-i18next";

export function IndustrialUsecaseSection() {
  const { t } = useTranslation();
  const [openIndustryId, setOpenIndustryId] = useState("");
  const [isManualMode, setIsManualMode] = useState(false);
  const autoIndexRef = useRef(0);

  useEffect(() => {
    if (isManualMode || industrialUsecaseData.length === 0) return;

    const collapseDelay = 300;
    const expandedDelay = 3000;
    let collapseTimer: number | null = null;
    let nextTimer: number | null = null;

    const runCycle = () => {
      const current = industrialUsecaseData[autoIndexRef.current % industrialUsecaseData.length];
      setOpenIndustryId(current.id);

      collapseTimer = window.setTimeout(() => {
        setOpenIndustryId("");

        nextTimer = window.setTimeout(() => {
          autoIndexRef.current = (autoIndexRef.current + 1) % industrialUsecaseData.length;
          runCycle();
        }, collapseDelay);
      }, expandedDelay);
    };

    runCycle();

    return () => {
      if (collapseTimer !== null) window.clearTimeout(collapseTimer);
      if (nextTimer !== null) window.clearTimeout(nextTimer);
    };
  }, [isManualMode]);

  return (
    <section id="industrial-usecases" className="grid bg-[#ececf0] px-0 py-12 lg:py-16">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <h2 className="text-[clamp(2rem,5vw,2rem)] leading-[1.05] text-[#198ef3] font-semibold">
          {t("industrialUsecases.title")}
        </h2>

        <div className="mt-6 border-y border-[#d8dee7]">
          {industrialUsecaseData.map((industry) => {
            const isOpen = industry.id === openIndustryId;
            return (
              <div key={industry.id} className="border-b border-[#d8dee7] last:border-b-0">
                <button
                  type="button"
                  onClick={() => {
                    setIsManualMode(true);
                    setOpenIndustryId(industry.id);
                  }}
                  className={`group grid w-full grid-cols-[74px_1fr_auto] items-center gap-4 px-3 py-4 text-left transition-colors duration-300 sm:grid-cols-[120px_1fr_auto] sm:px-5 sm:py-6 ${
                    isOpen ? "bg-[#198ef3] text-white" : "bg-transparent text-[#101926] hover:bg-[#198ef3] hover:text-white"
                  }`}
                >
                  <span className="text-[clamp(1.7rem,3.4vw,2.1rem)] leading-none">{industry.number}</span>
                  <span className="text-[clamp(1.6rem,4.2vw,2.1rem)] leading-[1.06]">{t(industry.labelKey)}</span>
                  <ArrowRight
                    size={48}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-4 bg-[#edf2f8] px-3 pb-5 pt-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
                      {industry.cards.map((card) => (
                        <article
                          key={card.id}
                          className="group relative h-full overflow-hidden rounded-2xl bg-transparent transition-all duration-300 ease-out hover:scale-[1.03] group-hover:bg-[#198ef3] group-hover:shadow-[0_14px_32px_rgba(24,39,58,0.2)]"
                        >
                          <img
                            src={card.imageUrl}
                            alt={card.title}
                            className="h-[170px] w-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.08] group-hover:grayscale-0"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[rgba(4,10,22,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative bg-transparent px-0 pb-1 pt-3 transition-all duration-300 group-hover:bg-[#198ef3] group-hover:px-4 group-hover:pb-4 group-hover:pt-4">
                            <h3 className="line-clamp-1 text-[1.1rem] font-semibold text-[#0f1720] transition-colors duration-300 group-hover:text-white">
                              {t(card.titleKey)}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-[0.9rem] text-[#3a4656] transition-colors duration-300 group-hover:text-[rgba(236,244,255,0.94)]">
                              {t(card.excerptKey)}
                            </p>
                            <button type="button" className="mt-3 text-[0.84rem] font-semibold text-[#1d8cf0] transition-colors duration-300 group-hover:text-white hover:text-white">
                              {t("product.learnMore")} -&gt;
                            </button>
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
      </div>
    </section>
  );
}
