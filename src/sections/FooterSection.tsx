import LogoLoop from "../components/ui/LogoLoop";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import { useTranslation } from "react-i18next";

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
      title: t("footer.groups.lorem"),
      items: [t("footer.groups.lorem"), t("footer.groups.lorem"), t("footer.groups.lorem"), t("footer.groups.lorem")]
    },
    {
      title: t("footer.groups.lorem"),
      items: [t("footer.groups.lorem"), t("footer.groups.lorem"), t("footer.groups.lorem"), t("footer.groups.lorem")]
    },
    {
      title: t("footer.groups.lorem"),
      items: [t("footer.groups.lorem"), t("footer.groups.lorem"), t("footer.groups.lorem"), t("footer.groups.lorem")]
    }
  ];

  return (
    <footer
      className="grid min-h-screen snap-start snap-always items-center bg-white px-0 pt-8 pb-4 sm:pt-10 sm:pb-0"
      id="footer"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center gap-6 pt-6 max-[500px]:w-[calc(100%-1rem)] sm:gap-8 sm:pt-8 lg:min-h-[calc(100vh-5rem)] lg:grid-rows-[3fr_2fr]">
        <article className="rounded-2xl border border-[#d6dbe5] bg-[linear-gradient(120deg,#f0f1f5,#fdfdff_48%,#f0f1f5)] px-3 pb-4 pt-4 shadow-[0_9px_24px_rgba(88,103,126,0.24)] sm:px-5 md:px-6">
          <div className="px-0 py-4 text-center sm:py-5">
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

        <div className="self-end grid gap-6 sm:gap-5 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {footerGroups.map((group, groupIndex) => (
            <section key={`${group.title}-${groupIndex}`} className="text-center sm:text-left">
              <h3 className="text-[0.78rem] text-[#3f546a]">{group.title}</h3>
              <ul className="mt-1.5 list-none">
                {group.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`} className="mt-1 text-[0.69rem] leading-[1.4] text-[#7f8ea1]">
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
