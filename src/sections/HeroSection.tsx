import { DecryptedText } from "../components/ui/DecryptedText";
import StarBorder from "../components/ui/StarBorder";

type HeroSectionProps = {
  heroImageUrl?: string;
  heroImageAlt?: string;
};

export function HeroSection({
  heroImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  heroImageAlt = "Hero visual"
}: HeroSectionProps) {
  return (
    <section
      className="relative grid min-h-screen snap-start snap-always grid-rows-1 overflow-hidden bg-[radial-gradient(circle_at_32%_34%,#0d2248_0%,#03070f_56%)] px-0 pb-8 pt-[5.75rem]"
      id="home"
    >
      <div className="relative z-[3] mx-auto grid w-[min(1120px,calc(100%-2rem))] self-center gap-7 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex min-h-[calc(100vh-7.75rem)] flex-col justify-center">
          <h1 className="max-w-[12ch] text-[clamp(4.0rem,6.5vw,5.6rem)] leading-[1.02] tracking-[-0.02em] text-white">
            <span className="block font-semibold text-white">
              From{" "}
              <DecryptedText text="Insight" className="font-extrabold text-[#2f99ff]" />
            </span>
            <span className="block font-semibold text-white">
              to{" "}
              <DecryptedText text="Impact" className="font-extrabold text-[#2f99ff]" />
            </span>
          </h1>
          <div className="mt-5 flex items-center gap-2.5 text-[0.96rem] text-[#d8e6f6]">
            <span>Part of</span>
            <span className="rounded-[8px] bg-[#f0f6ff] px-[0.56rem] py-[0.28rem] text-[0.7rem] text-[#1e3554]">
              NVIDIA Inception Program
            </span>
          </div>
        </div>

        <StarBorder
          className="mx-auto h-fit w-full max-w-[560px] self-center rounded-[28px]"
          color="rgba(255,255,255,0.95)"
          speed="5s"
        >
          <article className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.07)]">
            {heroImageUrl ? (
              <img
                src={heroImageUrl}
                alt={heroImageAlt}
                className="h-[240px] w-full object-cover sm:h-[270px] lg:h-[300px]"
              />
            ) : (
              <div className="min-h-[240px] sm:min-h-[270px] lg:min-h-[300px] bg-[linear-gradient(130deg,rgba(255,255,255,0.85),rgba(190,197,207,0.76)),repeating-linear-gradient(-45deg,rgba(80,90,105,0.2)_0_16px,rgba(216,222,230,0.2)_16px_32px)]" />
            )}
            <div className="bg-[linear-gradient(to_top,rgba(6,13,24,0.94),rgba(6,13,24,0.64))] px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex items-center gap-2.5">
                <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-none text-white">Mind Ops</h2>
                <span className="rounded-full bg-[rgba(255,255,255,0.18)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.02em] text-[#d3e4ff]">
                  News
                </span>
              </div>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[#c7d4e3]">
                Lorem ipsum dolor sit amet consectetur. Elementum amet metus lorem id. Metus sem nam et platea quis dui aliquet.
              </p>
            </div>
          </article>
        </StarBorder>
      </div>
    </section>
  );
}
