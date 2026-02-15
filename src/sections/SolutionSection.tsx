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
          title="Lorem ipsum dolor sit amet consectetur."
          description="Lorem ipsum dolor sit amet consectetur. Porta tortor risus faucibus ut ipsum nec in etiam id. Eget vestibulum vitae elit."
          align="center"
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <InfoCard
            title="Model Forge"
            description={solutionDescription}
            className="rounded-xl border border-[#d5d9e2] bg-[#f6f8fb]"
            mediaClassName="min-h-[215px] bg-[linear-gradient(180deg,#f8f8f8,#d5d8df)]"
          />

          <InfoCard
            title="Model Forge"
            description={solutionDescription}
            className="rounded-xl border border-[#d5d9e2] bg-[#f6f8fb]"
            mediaClassName="min-h-[215px] bg-[linear-gradient(180deg,#f8f8f8,#d5d8df)]"
          />
        </div>
      </div>
    </section>
  );
}
