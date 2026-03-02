import { useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  backButtonLabel?: string;
  backTitle?: string;
  backDescription?: string;
  backContent?: ReactNode;
  className?: string;
  mediaClassName?: string;
  mediaImageSrc?: string;
  mediaImageAlt?: string;
  bodyClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ctaClassName?: string;
  mediaSlot?: ReactNode;
};

export function InfoCard({
  title,
  description,
  ctaLabel = "Learn More",
  backButtonLabel = "Back",
  backTitle = "More Information",
  backDescription = "",
  backContent,
  className,
  mediaClassName,
  mediaImageSrc,
  mediaImageAlt = "Card media",
  bodyClassName,
  titleClassName,
  descriptionClassName,
  ctaClassName,
  mediaSlot
}: InfoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className={cn(
        "group relative overflow-hidden transition-transform duration-300 ease-out hover:z-20 hover:scale-[1.03]",
        className
      )}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative min-h-[430px] w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          {mediaSlot ?? (
            mediaImageSrc ? (
              <img
                src={mediaImageSrc}
                alt={mediaImageAlt}
                className={cn(
                  "h-[220px] w-full object-cover grayscale saturate-0 transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-100",
                  mediaClassName
                )}
                loading="lazy"
              />
            ) : (
              <div className={cn("h-[220px]", mediaClassName)} />
            )
          )}
          <div className={cn("px-4 pb-4 pt-3", bodyClassName)}>
            <h3 className={cn("text-base text-[#2d3a49]", titleClassName)}>{title}</h3>
            <p className={cn("mt-1.5 text-[0.72rem] leading-[1.45] text-[#2d3a49]", descriptionClassName)}>
              {description}
            </p>
            <button
              type="button"
              className={cn("mt-1.5 inline-flex items-center gap-1 text-[0.7rem] text-[#1b93ef]", ctaClassName)}
              onClick={() => setIsFlipped(true)}
            >
              <span>{ctaLabel}</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-col justify-between bg-[#f6f8fb] p-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-base text-[#2d3a49]">{backTitle}</h3>
            {backDescription ? <p className="mt-1.5 text-[0.76rem] leading-[1.5] text-[#7f8ea1]">{backDescription}</p> : null}
            {backContent ? <div className="mt-2 text-[0.76rem] leading-[1.5] text-[#7f8ea1]">{backContent}</div> : null}
          </div>
          <button
            type="button"
            className="mt-3 inline-block self-start text-[0.8rem] font-bold text-[#1b93ef]"
            onClick={() => setIsFlipped(false)}
          >
            {backButtonLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
