import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";

type DecryptedTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
  characters?: string;
  startDelayMs?: number;
  loop?: boolean;
  loopDelayMs?: number;
};

const DEFAULT_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function DecryptedText({
  text,
  className,
  speedMs = 80,
  characters = DEFAULT_CHARACTERS,
  startDelayMs = 150,
  loop = true,
  loopDelayMs = 5000
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);

  const sourceChars = useMemo(() => characters.split(""), [characters]);

  useEffect(() => {
    let revealIndex = 0;
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    let isCancelled = false;

    const runCycle = () => {
      revealIndex = 0;

      intervalId = window.setInterval(() => {
        if (isCancelled) return;

        const next = text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < revealIndex) return text[idx];
            return sourceChars[Math.floor(Math.random() * sourceChars.length)] ?? char;
          })
          .join("");

        setDisplayText(next);
        revealIndex += 1;

        if (revealIndex > text.length) {
          if (intervalId) window.clearInterval(intervalId);
          setDisplayText(text);

          if (loop && !isCancelled) {
            timeoutId = window.setTimeout(runCycle, loopDelayMs);
          }
        }
      }, speedMs);
    };

    timeoutId = window.setTimeout(runCycle, startDelayMs);

    return () => {
      isCancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs, sourceChars, loop, loopDelayMs]);

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {displayText}
    </span>
  );
}
