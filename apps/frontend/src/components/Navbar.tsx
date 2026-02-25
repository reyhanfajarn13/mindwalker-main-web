import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown } from "lucide-react";
import { US, ID } from "country-flag-icons/react/3x2";

const mindwalkerLogo = "/assets/logo/mindwalker_logo.png";

const navItems = [
  { key: "home", target: "home", activeFor: ["home"] },
  { key: "product", target: "product", activeFor: ["product"] },
  { key: "solutions", target: "solutions", activeFor: ["solutions"] },
  { key: "aboutUs", target: "footer", activeFor: ["footer"] },
  { key: "news", target: "news", activeFor: ["news"] }
];

type NavbarProps = {
  className?: string;
  activeSection?: string;
  onNavigate?: (targetId: string) => void;
};

export function Navbar({ className, activeSection, onNavigate }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const activeKey =
    navItems.find((item) => item.activeFor.includes(activeSection ?? ""))?.key ?? "";
  const isIndonesian = i18n.resolvedLanguage !== "en";

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!languageRef.current?.contains(target)) {
        setIsLanguageOpen(false);
      }
      if (!mobileMenuRef.current?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleLanguageChange = (lang: "id" | "en") => {
    void i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  const handleContactClick = () => {
    window.location.href =
      "mailto:marketing@mindwalker.ai?subject=Permintaan%20Konsultasi%20Lebih%20Lanjut&body=Halo,%0A%0ASaya%20tertarik%20untuk%20konsultasi%20lebih%20lanjut%20dengan%20Mindwalker.%0A%0ANama:%20%0APerusahaan:%20%0ANomor%20HP:%20%0A%0ATerima%20kasih.";
  };

  return (
    <div className={cn("relative", className)}>
      <header className="mx-auto hidden w-[min(930px,calc(100vw-1.2rem))] items-center justify-between gap-3 rounded-full bg-[rgba(246,248,251,0.97)] px-[0.7rem] py-[0.42rem] text-[#1d2e40] shadow-[0_6px_18px_rgba(0,0,0,0.16)] min-[551px]:flex">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-[linear-gradient(160deg,#ffffff,#dce5ee)]">
          <img src={mindwalkerLogo} alt="Mindwalker logo" className="h-5 w-5 object-contain" />
        </div>
        <nav className="flex-1 px-1">
          <ul className="m-0 flex list-none items-center justify-center gap-1.5 p-0">
            {navItems.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <li key={item.key}>
                  <button
                    type="button"
                    className={cn(
                      "inline-block cursor-pointer whitespace-nowrap rounded-full border-0 px-[0.88rem] py-[0.4rem] text-[0.82rem] font-semibold transition-all duration-200",
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
        <div className="flex items-center gap-2">
          <div className="relative" ref={languageRef}>
            <button
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-0 bg-transparent px-[0.72rem] py-[0.42rem] text-[0.82rem] font-semibold text-[#3e5163] transition-colors hover:bg-[rgba(36,55,77,0.08)]"
              type="button"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
            >
              <span className="inline-flex h-4 w-4 overflow-hidden rounded-full">
                {isIndonesian ? (
                  <ID title={t("nav.langId")} className="h-full w-full object-cover" />
                ) : (
                  <US title={t("nav.langEn")} className="h-full w-full object-cover" />
                )}
              </span>
              {isIndonesian ? t("nav.langId") : t("nav.langEn")}
              <ChevronDown size={14} className={cn("transition-transform duration-200", isLanguageOpen && "rotate-180")} />
            </button>

            {isLanguageOpen ? (
              <div className="absolute right-0 top-[calc(100%+0.35rem)] z-20 min-w-[124px] overflow-hidden rounded-xl border border-[#d6dbe5] bg-white p-1 shadow-[0_12px_24px_rgba(23,34,47,0.18)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[0.78rem] font-semibold text-[#3e5163] transition-colors hover:bg-[#eef4fb]"
                  onClick={() => handleLanguageChange("id")}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 overflow-hidden rounded-full">
                      <ID title={t("nav.langId")} className="h-full w-full object-cover" />
                    </span>
                    {t("nav.langId")}
                  </span>
                  {isIndonesian ? <Check size={14} className="text-[#1d8cf0]" /> : null}
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[0.78rem] font-semibold text-[#3e5163] transition-colors hover:bg-[#eef4fb]"
                  onClick={() => handleLanguageChange("en")}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 overflow-hidden rounded-full">
                      <US title={t("nav.langEn")} className="h-full w-full object-cover" />
                    </span>
                    {t("nav.langEn")}
                  </span>
                  {!isIndonesian ? <Check size={14} className="text-[#1d8cf0]" /> : null}
                </button>
              </div>
            ) : null}
          </div>
          <button
            className="cursor-pointer whitespace-nowrap rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-[1.05rem] py-[0.52rem] text-[0.82rem] font-bold text-white"
            type="button"
            onClick={handleContactClick}
          >
            {t("nav.contactUs")}
          </button>
        </div>
      </header>

      <div className="min-[551px]:hidden" ref={mobileMenuRef}>
        <button
          type="button"
          aria-label="Open mobile menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-[0_14px_30px_rgba(0,0,0,0.28)]"
        >
          <span className="flex flex-col gap-[0.42rem]">
            <span className="h-[0.16rem] w-9 rounded-full bg-[#1f2b38]" />
            <span className="h-[0.16rem] w-9 rounded-full bg-[#1f2b38]" />
          </span>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-[calc(100%+0.7rem)] z-[180] w-[min(320px,calc(100vw-1.4rem))] overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.26)] bg-[rgba(246,248,251,0.98)] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.28)]"
            >
              <div className="grid gap-1.5">
                {navItems.map((item) => {
                  const isActive = item.key === activeKey;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      className={cn(
                        "rounded-2xl px-4 py-2.5 text-left text-[0.88rem] font-semibold transition-colors",
                        isActive ? "bg-[rgba(38,145,248,0.15)] text-[#1883eb]" : "text-[#243749] hover:bg-[#eaf1fb]"
                      )}
                      onClick={() => {
                        onNavigate?.(item.target);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t(`nav.${item.key}`)}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-2xl bg-[#eef4fb] p-2">
                <button
                  type="button"
                  className={cn(
                    "flex-1 rounded-xl px-3 py-2 text-[0.8rem] font-semibold",
                    isIndonesian ? "bg-white text-[#1d8cf0]" : "text-[#3e5163]"
                  )}
                  onClick={() => handleLanguageChange("id")}
                >
                  IDN
                </button>
                <button
                  type="button"
                  className={cn(
                    "flex-1 rounded-xl px-3 py-2 text-[0.8rem] font-semibold",
                    !isIndonesian ? "bg-white text-[#1d8cf0]" : "text-[#3e5163]"
                  )}
                  onClick={() => handleLanguageChange("en")}
                >
                  ENG
                </button>
              </div>

              <button
                className="mt-3 w-full rounded-2xl border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-4 py-2.5 text-[0.88rem] font-bold text-white"
                type="button"
                onClick={handleContactClick}
              >
                {t("nav.contactUs")}
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
