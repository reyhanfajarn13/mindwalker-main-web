import { cn } from "../lib/utils";

const navItems = [
  { label: "Home", target: "home", activeFor: ["home"] },
  { label: "Product", target: "product", activeFor: ["product"] },
  { label: "Solutions", target: "solutions", activeFor: ["solutions"] },
  { label: "About Us", target: "footer", activeFor: ["footer"] },
  { label: "News", target: "footer", activeFor: ["footer"] }
];

type NavbarProps = {
  className?: string;
  activeSection?: string;
  onNavigate?: (targetId: string) => void;
};

export function Navbar({ className, activeSection, onNavigate }: NavbarProps) {
  const activeLabel =
    navItems.find((item) => item.activeFor.includes(activeSection ?? ""))?.label ?? "";

  return (
    <header
      className={cn(
        "mx-auto flex w-[min(930px,calc(100%-2rem))] items-center justify-between gap-3 rounded-full bg-[rgba(246,248,251,0.96)] px-[0.65rem] py-[0.45rem] text-[#1d2e40] shadow-[0_6px_18px_rgba(0,0,0,0.16)]",
        className
      )}
    >
      <div className="grid h-7 w-7 place-items-center rounded-full bg-[linear-gradient(160deg,#ffffff,#dce5ee)] text-[0.8rem] font-bold text-[#0b6ad0]">
        N
      </div>
      <nav>
        <ul className="m-0 flex list-none items-center gap-[0.1rem] p-0">
          {navItems.map((item) => {
            const isActive = item.label === activeLabel;
            return (
              <li key={item.label}>
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
                  {item.label}
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
        >
          IDN
        </button>
        <button
          className="cursor-pointer rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-[0.92rem] py-[0.5rem] text-[0.8rem] font-bold text-white"
          type="button"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
