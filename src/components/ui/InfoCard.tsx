import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
  mediaClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ctaClassName?: string;
  mediaSlot?: ReactNode;
};

export function InfoCard({
  title,
  description,
  href = "#",
  ctaLabel = "Learn More",
  className,
  mediaClassName,
  bodyClassName,
  titleClassName,
  descriptionClassName,
  ctaClassName,
  mediaSlot
}: InfoCardProps) {
  return (
    <article className={cn("overflow-hidden", className)}>
      {mediaSlot ?? <div className={cn("min-h-[215px]", mediaClassName)} />}
      <div className={cn("px-4 pb-4 pt-3", bodyClassName)}>
        <h3 className={cn("text-base text-[#2d3a49]", titleClassName)}>{title}</h3>
        <p className={cn("mt-1.5 text-[0.72rem] leading-[1.45] text-[#818d9e]", descriptionClassName)}>
          {description}
        </p>
        <a className={cn("mt-1.5 inline-block text-[0.7rem] font-bold text-[#1b93ef]", ctaClassName)} href={href}>
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
