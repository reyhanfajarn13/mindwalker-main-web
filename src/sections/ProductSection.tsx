import { InfoCard } from "../components/ui/InfoCard";
import { SectionHeading } from "../components/ui/SectionHeading";

type ProductCard = {
  id: number;
  title: string;
  description: string;
  imageUrl: null;
  link: null;
};

const productCardData: ProductCard[] = [{
  id: 1,
  title: "MindOps",
  description: "How smart insights execution, IT operations to zoom with integrations.",
  imageUrl: null,
  link: null
},
{
  id: 2,
  title: "MindSec",
  description: "How smart insights execution, IT operations to zoom with integrations.",
  imageUrl: null,
  link: null
},
{
  id: 3,
  title: "VisionCraft",
  description: "How smart insights execution, IT operations to zoom with integrations.",
  imageUrl: null,
  link: null
}
];

export function ProductSection() {
  return (
    <section
      className="grid min-h-screen snap-start snap-always items-center bg-[#ececf0] px-0 py-8"
      id="product"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] content-center">
        <SectionHeading
          kicker="Product"
          title="The product that solves your toughest business problems."
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {productCardData.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              description={item.description}
              className="min-h-[470px] rounded-[18px] bg-[#091a2d] text-[#e8effa] shadow-[0_8px_18px_rgba(10,24,43,0.22),0_18px_40px_rgba(12,35,61,0.18),0_0_0_1px_rgba(177,209,244,0.06)]"
              mediaClassName="min-h-[310px] bg-[radial-gradient(circle_at_30%_34%,#adb4bd,#4f5661_58%,#292f39_100%)]"
              bodyClassName="px-[1.15rem] pb-[1.25rem] pt-[1.1rem]"
              titleClassName="text-[1.35rem] text-[#e8effa]"
              descriptionClassName="mt-[0.32rem] max-w-[58ch] text-[0.84rem] text-[#afc1d8]"
              ctaClassName="mt-[0.6rem] rounded-full bg-[#e9f6ff] px-[0.72rem] py-[0.28rem] text-[0.7rem] text-[#158ced]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
