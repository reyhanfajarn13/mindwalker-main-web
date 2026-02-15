import { cn } from "../lib/utils";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function FloatingChatbot() {
  return (
    <button
      className={cn(
        "fixed bottom-[30px] right-[30px] z-[120] h-[70px] w-[70px] rounded-full border-0 bg-[linear-gradient(150deg,#f4f8fd,#bfcce0)] font-extrabold tracking-[0.02em] text-[#1c3f6f] shadow-[0_16px_30px_rgba(0,0,0,0.45)]"
      )}
      aria-label="Open chatbot"
      type="button"
    >
      <span>
        <DotLottieReact 
        src="https://lottie.host/5c062727-879d-4bda-bc52-d5b6b3b0aba1/i8Uao1FjN1.lottie"
        loop
        autoplay
        />
      </span>
    </button>
  );
}
