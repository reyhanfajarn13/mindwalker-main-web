import { cn } from "../lib/utils";
import mindwalkerLogo from "../assets/logo/mindwalker_logo.png";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", target: "home", activeFor: ["home"] },
  { key: "product", target: "product", activeFor: ["product"] },
  { key: "solutions", target: "solutions", activeFor: ["solutions"] },
  { key: "aboutUs", target: "footer", activeFor: ["footer"] },
  { key: "news", target: "footer", activeFor: ["footer"] }
];

type NavbarProps = {
  className?: string;
  activeSection?: string;
  onNavigate?: (targetId: string) => void;
};

export function Navbar({ className, activeSection, onNavigate }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const activeKey =
    navItems.find((item) => item.activeFor.includes(activeSection ?? ""))?.key ?? "";
  const isIndonesian = i18n.resolvedLanguage !== "en";

  const handleLanguageToggle = () => {
    void i18n.changeLanguage(isIndonesian ? "en" : "id");
  };

  return (
    <header
      className={cn(
        "mx-auto flex w-[min(930px,calc(100%-2rem))] items-center justify-between gap-3 rounded-full bg-[rgba(246,248,251,0.96)] px-[0.65rem] py-[0.45rem] text-[#1d2e40] shadow-[0_6px_18px_rgba(0,0,0,0.16)]",
        className
      )}
    >
      <div className="grid h-7 w-7 place-items-center rounded-full bg-[linear-gradient(160deg,#ffffff,#dce5ee)]">
        <img src={mindwalkerLogo} alt="Mindwalker logo" className="h-5 w-5 object-contain" />
      </div>
      <nav>
        <ul className="m-0 flex list-none items-center gap-[0.1rem] p-0">
          {navItems.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <li key={item.key}>
                <button
                  type="button"
                  className={cn(
                    "inline-block cursor-pointer rounded-full border-0 px-[0.72rem] py-[0.34rem] text-[0.8rem] font-semibold transition-all duration-200",
                    isActive
                      ? "bg-[rgba(38,145,248,0.15)] text-[#1883eb] -translate-y-[1px] shadow-[inset_0_0_0_1px_rgba(36,138,241,0.12)]"
                      : "bg-transparent text-[#243749]"
                  )}
                  onClick={() => onNavigate?.(item.target)}
                >
                  {t(`nav.${item.key}`)}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-[0.35rem]">
        <button
          className="rounded-full border-0 bg-transparent px-[0.65rem] py-[0.42rem] font-semibold text-[#3e5163]"
          type="button"
          onClick={handleLanguageToggle}
        >
          {isIndonesian ? t("nav.langId") : t("nav.langEn")}
        </button>
        <button
          className="cursor-pointer rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-[0.92rem] py-[0.5rem] text-[0.8rem] font-bold text-white"
          type="button"
          onClick={() =>
    window.location.href =

      "mailto:marketing@mindwalker.ai?subject=Permintaan%20Konsultasi%20Lebih%20Lanjut&body=Halo,%0A%0ASaya%20tertarik%20untuk%20konsultasi%20lebih%20lanjut%20dengan%20Mindwalker.%0A%0ANama:%20%0APerusahaan:%20%0ANomor%20HP:%20%0A%0ATerima%20kasih."}
        >
          {t("nav.contactUs")}
        </button>
      </div>
    </header>
  );
}
