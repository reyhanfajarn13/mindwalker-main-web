import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../lib/utils";

type StarBorderProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  borderClassName?: string;
  children?: ReactNode;
  color?: string;
  speed?: CSSProperties["animationDuration"];
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const StarBorder = <T extends React.ElementType = "div">({
  as,
  className,
  borderClassName,
  color = "rgba(255,255,255,0.95)",
  speed = "5s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = (as ?? "div") as React.ElementType;

  return (
    <Component className={cn("relative inline-block", className)} {...rest}>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-20 rounded-[inherit] p-[1px] [background:conic-gradient(from_0deg,transparent_0deg,var(--star-color)_22deg,transparent_48deg,transparent_360deg)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [animation:spin_var(--star-speed)_linear_infinite]",
          borderClassName
        )}
        style={
          {
            "--star-color": color,
            "--star-speed": speed,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor"
          } as CSSProperties
        }
      />
      {children}
    </Component>
  );
};

export default StarBorder;
