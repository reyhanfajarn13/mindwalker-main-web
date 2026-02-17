import { InfoCard } from "../components/ui/InfoCard";
import { SectionHeading } from "../components/ui/SectionHeading";

const solutionDescription =
  "Lorem ipsum dolor sit amet consectetur. Nibh quam faucibus senectus at laoreet lacus velit. Gravida vitae tristique eget id pellentesque eu etiam pharetra scelerisque.";

export function SolutionSection() {
  return (
    <section
      className="grid min-h-screen snap-start snap-always items-center bg-[#ececf0] px-0 py-8"
      id="solutions"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center">
        <SectionHeading
          kicker="Solutions"
          title="Innovative Solutions. Measurable Impact."
          description="We empower organizations with forward-thinking solutions that adapt, scale, and deliver lasting value in a rapidly evolving digital world."
          align="center"
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <InfoCard
            title="Model Forge"
            description={solutionDescription}
            className="rounded-xl border bg-[#fdfdff_48%] shadow-[0_14px_34px_rgba(8,15,28,0.26)]"
            mediaImageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            mediaImageAlt="Model Forge"
            mediaClassName="h-[220px] sm:h-[240px]"
            bodyClassName="px-4 pb-5 pt-4"
            titleClassName="text-[clamp(1.3rem,2.1vw,1.8rem)] font-semibold text-[#black]"
            descriptionClassName="mt-2 text-[0.9rem] leading-[1.55] text-[#black]"
            ctaClassName="mt-3 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-[#1b93ef]"
            backTitle="Model Forge Details"
            backDescription="Model Forge membantu tim membangun, menguji, dan menerapkan model AI secara terstruktur."
            backContent="Seluruh pipeline bisa dipantau secara real-time untuk mempercepat iterasi dan menjaga kualitas."
          />

          <InfoCard
            title="Agentic AI"
            description={solutionDescription}
            className="rounded-xl border bg-[#fdfdff_48%] shadow-[0_14px_34px_rgba(8,15,28,0.26)]"
            mediaImageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            mediaImageAlt="Agentic AI Platform"
            mediaClassName="h-[220px] sm:h-[240px]"
            bodyClassName="px-4 pb-5 pt-4"
            titleClassName="text-[clamp(1.3rem,2.1vw,1.8rem)] font-semibold text-[black]"
            descriptionClassName="mt-2 text-[0.9rem] leading-[1.55] text-[#black]"
            ctaClassName="mt-3 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-[#1b93ef]"
            backTitle="Agentic AI Details"
            backDescription="Satu platform untuk orkestrasi data, eksperimen, dan deployment model lintas use case."
            backContent="Dirancang agar kolaborasi antara tim data, engineering, dan bisnis menjadi lebih cepat dan konsisten."
          />
        </div>
      </div>
    </section>
  );
}
