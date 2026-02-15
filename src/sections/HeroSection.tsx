export function HeroSection() {
  return (
    <section
      className="relative grid min-h-screen snap-start snap-always grid-rows-1 overflow-hidden bg-[radial-gradient(circle_at_32%_34%,#0d2248_0%,#03070f_56%)] px-0 pb-8 pt-[5.75rem]"
      id="home"
    >
      <div className="relative z-[3] mx-auto grid w-[min(1120px,calc(100%-2rem))] self-center gap-7 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="max-w-[12ch] text-[clamp(2.2rem,5vw,4.1rem)] leading-[1.02] tracking-[-0.02em] text-white">
            From Insights to Impact
          </h1>
          <div className="mt-5 flex items-center gap-2.5 text-[0.96rem] text-[#d8e6f6]">
            <span>Part of</span>
            <span className="rounded-[8px] bg-[#f0f6ff] px-[0.56rem] py-[0.28rem] text-[0.7rem] text-[#1e3554]">
              NVIDIA Inception Program
            </span>
          </div>
        </div>

        <article className="overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.07)]">
          <div className="min-h-[285px] bg-[linear-gradient(130deg,rgba(255,255,255,0.85),rgba(190,197,207,0.76)),repeating-linear-gradient(-45deg,rgba(80,90,105,0.2)_0_16px,rgba(216,222,230,0.2)_16px_32px)]" />
          <div className="bg-[linear-gradient(to_top,rgba(6,13,24,0.92),rgba(6,13,24,0.58))] px-5 pb-5 pt-4">
            <div className="flex items-center gap-[0.65rem]">
              <h2 className="text-[2rem] leading-none text-white">Mind Ops</h2>
              <span className="rounded-full bg-[rgba(255,255,255,0.16)] px-[0.55rem] py-[0.2rem] text-[0.72rem] text-[#d3e4ff]">
                News
              </span>
            </div>
            <p className="mt-[0.65rem] text-[0.95rem] text-[#c0cfe1]">
              Lorem ipsum dolor sit amet consectetur. Elementum amet metus lorem
              id. Metus sem nam et platea quis dui aliquet.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
