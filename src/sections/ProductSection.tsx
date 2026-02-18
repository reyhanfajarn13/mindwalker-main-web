import { SectionHeading } from "../components/ui/SectionHeading";
import { useTranslation } from "react-i18next";
import mindwalkerLogo from "../assets/logo/mindwalker_logo.png";

type ProductCard = {
  id: number;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
};

const productCardData: ProductCard[] = [
  {
    id: 1,
    title: "Mind Ops",
    label: "System Operations",
    description: "From monitoring to resolution, IT operations must move with intelligence.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Mind Sec",
    label: "Threat Analysis",
    description: "Detect risks early and orchestrate faster response across security workflows.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "VisionCraft",
    label: "AI Intelligence",
    description: "Build insight pipelines that turn data signals into real operational impact.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
  }
];

export function ProductSection() {
  const { t } = useTranslation();

  const cards = [
    {
      ...productCardData[0],
      label: t("product.cards.ops.label"),
      description: t("product.cards.ops.description")
    },
    {
      ...productCardData[1],
      label: t("product.cards.sec.label"),
      description: t("product.cards.sec.description")
    },
    {
      ...productCardData[2],
      label: t("product.cards.vision.label"),
      description: t("product.cards.vision.description")
    }
  ];

  return (
    <section
      className="grid min-h-screen snap-start snap-always items-center bg-[#ececf0] px-0 py-8"
      id="product"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center">
        <SectionHeading
          kicker={t("product.kicker")}
          kickerSlot={
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.95)] px-3 py-2 shadow-[0_5px_14px_rgba(12,28,44,0.12)]">
              <img src={mindwalkerLogo} alt="Mindwalker logo" className="h-5 w-auto object-contain" />
              <span className="text-[0.96rem] font-semibold text-[#2f3e4f]">{t("product.kicker")}</span>
            </span>
          }
          title={t("product.title")}
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {cards.map((item) => (
            <article
              key={item.id}
              className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#0b0f18] shadow-[0_14px_34px_rgba(8,15,28,0.26)] transition-transform duration-400 ease-out hover:z-50 hover:scale-[1.05] sm:min-h-[460px] lg:min-h-[495px]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full scale-100 object-cover grayscale saturate-0 transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,19,0.92)_10%,rgba(5,10,19,0.5)_44%,rgba(5,10,19,0.28)_66%,rgba(5,10,19,0.18)_100%)]" />

              <div className="absolute left-5 top-5 z-10 rounded-full bg-[rgba(255,255,255,0.34)] px-4 py-2 text-[0.92rem] font-semibold leading-none text-white backdrop-blur-[1px]">
                {item.label}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                <h3 className="text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[1.04] tracking-[-0.015em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[30ch] text-[clamp(1.06rem,1.15vw,1.26rem)] leading-[1.34] text-[rgba(236,244,255,0.94)]">
                  {item.description}
                </p>
                <div className="mt-5 flex justify-end sm:mt-6">
                  <button
                    type="button"
                    className="rounded-full border-0 bg-transparent px-5 py-2.5 text-[0.8rem] leading-none text-[rgba(236,244,255,0.94)] transition-colors duration-300 group-hover:bg-[rgba(240,247,255,0.95)] group-hover:text-[#1976c5]"
                  >
                    {t("product.learnMore")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
