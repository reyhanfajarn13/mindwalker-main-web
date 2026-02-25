import { InfoCard } from "../components/ui/InfoCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useTranslation } from "react-i18next";
import mindwalkerLogo from "../assets/logo/mindwalker_logo.png";

export function SolutionSection() {
  const { t } = useTranslation();
  const modelForgeHighlights = t("solutions.cards.modelForge.backHighlights", { returnObjects: true }) as string[];
  const agenticAiHighlights = t("solutions.cards.agenticAi.backHighlights", { returnObjects: true }) as string[];

  return (
    <section
      className="grid items-center bg-[#ececf0] px-0 py-12 lg:py-16"
      id="solutions"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center">
        <SectionHeading
          kicker={t("solutions.kicker")}
          kickerSlot={
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.95)] px-3 py-2 shadow-[0_5px_14px_rgba(12,28,44,0.12)]">
              <img src={mindwalkerLogo} alt="Mindwalker logo" className="h-5 w-auto object-contain" />
              <span className="text-[0.96rem] font-semibold text-[#2f3e4f]">{t("solutions.kicker")}</span>
            </span>
          }
          title={t("solutions.title")}
          description={t("solutions.description")}
          align="center"
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <InfoCard
            title={t("solutions.cards.modelForge.title")}
            description={t("solutions.cards.modelForge.description")}
            className="rounded-xl border border-[#d6dbe5] bg-[#fdfdff_48%] shadow-[0_14px_34px_rgba(8,15,28,0.26)] transition-all duration-300 hover:border-3 hover:border-[#2f99ff]"
            mediaImageSrc="https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1771327240594-032f5461e9736c25.jpeg"
            mediaImageAlt="Model Forge"
            mediaClassName="h-[220px] sm:h-[240px]"
            bodyClassName="px-4 pb-5 pt-4"
            titleClassName="text-[clamp(1.3rem,2.1vw,1.8rem)] font-semibold text-[#27313e] transition-all duration-300 group-hover:bg-[linear-gradient(90deg,#2f99ff,#0b3f78)] group-hover:bg-clip-text group-hover:text-transparent"
            descriptionClassName="mt-2 text-[0.9rem] leading-[1.55] text-[#27313e]"
            ctaClassName="mt-3 inline-flex items-center gap-1 text-[0.82rem] text-[#0f141c] transition-colors duration-300 group-hover:text-[#1b93ef]"
            ctaLabel={t("solutions.cards.learnMore")}
            backButtonLabel={t("solutions.cards.back")}
            backTitle={t("solutions.cards.modelForge.backTitle")}
            backDescription={t("solutions.cards.modelForge.backDescription")}
            backContent={
              <ul className="ml-4 list-disc space-y-1.5">
                {modelForgeHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />

          <InfoCard
            title={t("solutions.cards.agenticAi.title")}
            description={t("solutions.cards.agenticAi.description")}
            className="rounded-xl border border-[#d6dbe5] bg-[#fdfdff_48%] shadow-[0_14px_34px_rgba(8,15,28,0.26)] transition-all duration-300 hover:border-3 hover:border-[#2f99ff]"
            mediaImageSrc="https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1771327700802-303fa21f6a6ba29b.jpeg"
            mediaImageAlt="Agentic AI Platform"
            mediaClassName="h-[220px] sm:h-[240px]"
            bodyClassName="px-4 pb-5 pt-4"
            titleClassName="text-[clamp(1.3rem,2.1vw,1.8rem)] font-semibold text-[#27313e] transition-all duration-300 group-hover:bg-[linear-gradient(90deg,#2f99ff,#0b3f78)] group-hover:bg-clip-text group-hover:text-transparent"
            descriptionClassName="mt-2 text-[0.9rem] leading-[1.55] text-[#4f5f72]"
            ctaClassName="mt-3 inline-flex items-center gap-1 text-[0.82rem] text-[#0f141c] transition-colors duration-300 group-hover:text-[#1b93ef]"
            ctaLabel={t("solutions.cards.learnMore")}
            backButtonLabel={t("solutions.cards.back")}
            backTitle={t("solutions.cards.agenticAi.backTitle")}
            backDescription={t("solutions.cards.agenticAi.backDescription")}
            backContent={
              <ul className="ml-4 list-disc space-y-1.5">
                {agenticAiHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
}
