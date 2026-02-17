import { InfoCard } from "../components/ui/InfoCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useTranslation } from "react-i18next";

export function SolutionSection() {
  const { t } = useTranslation();

  return (
    <section
      className="grid min-h-screen snap-start snap-always items-center bg-[#ececf0] px-0 py-8"
      id="solutions"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center">
        <SectionHeading
          kicker={t("solutions.kicker")}
          title={t("solutions.title")}
          description={t("solutions.description")}
          align="center"
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <InfoCard
            title={t("solutions.cards.modelForge.title")}
            description={t("solutions.cards.description")}
            className="rounded-xl border bg-[#fdfdff_48%] shadow-[0_14px_34px_rgba(8,15,28,0.26)]"
            mediaImageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            mediaImageAlt="Model Forge"
            mediaClassName="h-[220px] sm:h-[240px]"
            bodyClassName="px-4 pb-5 pt-4"
            titleClassName="text-[clamp(1.3rem,2.1vw,1.8rem)] font-semibold text-[#black]"
            descriptionClassName="mt-2 text-[0.9rem] leading-[1.55] text-[#black]"
            ctaClassName="mt-3 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-[#1b93ef]"
            ctaLabel={t("solutions.cards.learnMore")}
            backButtonLabel={t("solutions.cards.back")}
            backTitle={t("solutions.cards.modelForge.backTitle")}
            backDescription={t("solutions.cards.modelForge.backDescription")}
            backContent={t("solutions.cards.modelForge.backContent")}
          />

          <InfoCard
            title={t("solutions.cards.agenticAi.title")}
            description={t("solutions.cards.description")}
            className="rounded-xl border bg-[#fdfdff_48%] shadow-[0_14px_34px_rgba(8,15,28,0.26)]"
            mediaImageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            mediaImageAlt="Agentic AI Platform"
            mediaClassName="h-[220px] sm:h-[240px]"
            bodyClassName="px-4 pb-5 pt-4"
            titleClassName="text-[clamp(1.3rem,2.1vw,1.8rem)] font-semibold text-[black]"
            descriptionClassName="mt-2 text-[0.9rem] leading-[1.55] text-[#black]"
            ctaClassName="mt-3 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-[#1b93ef]"
            ctaLabel={t("solutions.cards.learnMore")}
            backButtonLabel={t("solutions.cards.back")}
            backTitle={t("solutions.cards.agenticAi.backTitle")}
            backDescription={t("solutions.cards.agenticAi.backDescription")}
            backContent={t("solutions.cards.agenticAi.backContent")}
          />
        </div>
      </div>
    </section>
  );
}
