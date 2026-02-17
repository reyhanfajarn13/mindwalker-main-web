import { Flame } from "lucide-react";
import { NewsListCard } from "./NewsListCard";
import type { NewsCard } from "./types";

type TrendingNewsSectionProps = {
  items: NewsCard[];
};

export function TrendingNewsSection({ items }: TrendingNewsSectionProps) {
  return (
    <section className="px-4 pb-12 sm:px-6">
      <div className="mx-auto w-[min(1120px,100%)]">
        <h2 className="inline-flex items-center gap-2 text-[2rem] font-bold text-[#2b3644]">
          <Flame size={22} className="text-[#ef5a5a]" />
          Trending News
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <NewsListCard
              key={item.id}
              item={item}
              className="group hover:scale-[1.03]"
              imageClassName="grayscale group-hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
