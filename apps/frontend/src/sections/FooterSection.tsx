import LogoLoop from "../components/ui/LogoLoop";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { industrialUsecaseData } from "./industrialUsecaseData";

const image3 = "/assets/image3.png";
const image4 = "/assets/image4.png";
const image5 = "/assets/image5.png";
const image6 = "/assets/image6.png";
const image7 = "/assets/image7.png";
const image8 = "/assets/image8.png";
const footerHand = "/assets/footerHand.png";
const footerHandRobot = "/assets/footerHandRobot.png";
const mindwalkerLogoFull = "/assets/logo/mindwalker_logo_full.png";

const techLogos = [
  { src: image3, alt: "Company 1" },
  { src: image4, alt: "Company 2" },
  { src: image5, alt: "Company 3" },
  { src: image6, alt: "Company 4" },
  { src: image7, alt: "Company 5" },
  { src: image8, alt: "Company 6" }
];

export function FooterSection() {
  const { t } = useTranslation();

  const footerGroups = [
    {
      title: t("footer.groups.company"),
      items: [t("footer.groups.line1"), t("footer.groups.line2"), t("footer.groups.line3")]
    },
    {
      title: t("footer.groups.ourProduct"),
      items: [t("product.cards.ops.title"), t("product.cards.sec.title"), t("product.cards.vision.title")]
    },
    {
      title: t("footer.groups.ourSolution"),
      items: [t("solutions.cards.modelForge.title"), t("solutions.cards.agenticAi.title")]
    },
    {
      title: t("footer.groups.aiFor"),
      items: industrialUsecaseData.map((industry) => t(industry.labelKey))
    }
  ];

  return (
    <footer
      className="grid items-center bg-white px-0 pb-8 pt-10 sm:pb-10 sm:pt-12"
      id="footer"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center gap-6 pt-2 max-[500px]:w-[calc(100%-1rem)] sm:gap-8 sm:pt-4 lg:grid-rows-[3fr_2fr]">
        <article className="group rounded-2xl border border-[#d6dbe5] bg-[linear-gradient(120deg,#f0f1f5,#fdfdff_48%,#f0f1f5)] px-3 pb-4 pt-4 shadow-[0_9px_24px_rgba(88,103,126,0.24)] sm:px-5 md:px-6">
          <div className="relative flex min-h-[clamp(180px,28vw,240px)] items-center justify-center py-4 text-center sm:py-5">
            <img
              src={footerHand}
              alt="Human hand"
              className="pointer-events-none absolute -left-6 top-1/2 hidden w-[clamp(120px,20vw,260px)] -translate-y-1/2 object-contain grayscale transition-[filter] duration-400 group-hover:grayscale-0 min-[700px]:block"
            />
            <img
              src={footerHandRobot}
              alt="Robot hand"
              className="pointer-events-none absolute -right-6 top-1/2 hidden w-[clamp(120px,20vw,260px)] -translate-y-1/2 object-contain grayscale transition-[filter] duration-400 group-hover:grayscale-0 min-[700px]:block"
            />

            <div className="w-full max-w-[560px] min-[700px]:max-w-[min(520px,58%)]">
              <h2 className="text-[clamp(1.35rem,4.2vw,2.2rem)] text-[#2d98eb]">{t("footer.title")}</h2>
              <p className="mx-auto mt-1 max-w-[52ch] text-[0.82rem] leading-relaxed text-[#95a2b3] sm:text-[0.9rem]">
                {t("footer.subtitle")}
              </p>
              <div className="mt-3.5 flex justify-center">
                <div className="flex w-full max-w-[560px] min-w-0 items-center overflow-hidden rounded-full border border-[#d6dbe5] bg-white">
                  <input
                    type="email"
                    placeholder={t("footer.emailPlaceholder")}
                    className="min-w-0 w-full px-3 py-2 text-[0.78rem] text-[#3f5062] outline-none placeholder:text-[#95a2b3] sm:px-4 sm:py-2.5 sm:text-[0.84rem]"
                  />
                  <button className="shrink-0 cursor-pointer whitespace-nowrap border-0 bg-[#2a95f1] px-3 py-2 text-[0.78rem] font-bold text-[#f4faff] sm:px-4 sm:py-2.5 sm:text-[0.84rem]">
                    {t("footer.send")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#dde2eb] pt-3 text-center sm:pt-4">
            <span className="text-[0.68rem] text-[#9aa8b9]">{t("footer.technologyPartners")}</span>
            <div className="mx-auto mt-3 w-full max-w-[760px] overflow-hidden px-1 max-[500px]:max-h-[132px] max-[500px]:max-w-[300px] sm:px-0">
              <div className="max-[500px]:hidden">
                <LogoLoop
                  logos={techLogos}
                  speed={36}
                  direction="left"
                  logoHeight={28}
                  gap={24}
                  hoverSpeed={0}
                  scaleOnHover={false}
                  fadeOut={false}
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                  renderItem={(item, key) => {
                    if (!("src" in item)) return null;
                    const isImage3 = item.src === image3;
                    return (
                      <img
                        key={key}
                        src={item.src}
                        alt={item.alt ?? "Technology partner"}
                        className={
                          isImage3
                            ? "h-4 w-auto object-contain sm:h-5 md:h-6"
                            : "h-5 w-auto object-contain sm:h-6 md:h-7"
                        }
                      />
                    );
                  }}
                />
              </div>
              <div className="hidden max-[500px]:block max-[500px]:h-[532px]">
                <LogoLoop
                  logos={techLogos}
                  speed={30}
                  direction="up"
                  logoHeight={24}
                  gap={14}
                  hoverSpeed={0}
                  scaleOnHover={false}
                  fadeOut={false}
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                  renderItem={(item, key) => {
                    if (!("src" in item)) return null;
                    const isImage3 = item.src === image3;
                    return (
                      <img
                        key={key}
                        src={item.src}
                        alt={item.alt ?? "Technology partner"}
                        className={isImage3 ? "h-4 w-auto object-contain" : "h-5 w-auto object-contain"}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </article>

        <div className="self-end grid gap-7 border-t border-[#e2e7ef] pt-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr]">
          <section className="text-center sm:text-left">
            <img src={mindwalkerLogoFull} alt="Mindwalker.ai" className="mx-auto h-4 w-auto object-contain sm:mx-0" />
            <p className="mt-3 text-[0.75rem] text-[#5f6d7c]">©2026 Mindwalker.ai | All Rights reserved.</p>
            <p className="mt-3 text-[0.75rem] leading-[1.5] text-[#5f6d7c]">
              Komplek Ruko Grand Centro Bintaro
              <br />
              JL. Raya Kodam bintaro No. A19
              <br />
              Pesanggrahan, Pesanggrahan
              <br />
              Jakarta Selatan
              <br />
              Jakarta 12320
              <br />
              Indonesia
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 text-[#8b97a6] sm:justify-start">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-[#5e6e80]">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[#5e6e80]">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Github" className="transition-colors hover:text-[#5e6e80]">
                <Github size={16} />
              </a>
            </div>
          </section>

          {footerGroups.slice(1).map((group, groupIndex) => (
            <section key={`${group.title}-${groupIndex}`} className="text-center sm:text-left">
              <h3 className="text-[0.8rem] font-semibold text-[#3f546a]">{group.title}</h3>
              <ul className="mt-2 list-none space-y-1.5">
                {group.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`} className="text-[0.72rem] leading-[1.45] text-[#7f8ea1]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
}
