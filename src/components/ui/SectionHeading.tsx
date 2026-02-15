import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <header className={cn(className, isCenter && "text-center")}>
      <p className="text-[0.73rem] font-bold uppercase tracking-[0.06em] text-[#6f87a3]">
        {kicker}
      </p>
      <h2 className="mt-2 text-[clamp(1.4rem,2.7vw,2rem)] text-[#1693ee]">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-[0.55rem] max-w-[72ch] text-[0.9rem] text-[#99a7b9]",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
