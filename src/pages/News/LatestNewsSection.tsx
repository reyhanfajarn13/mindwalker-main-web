import { Newspaper } from "lucide-react";
import { NewsListCard } from "./NewsListCard";
import type { NewsCard } from "./types";

type LatestNewsSectionProps = {
  items: NewsCard[];
};

export function LatestNewsSection({ items }: LatestNewsSectionProps) {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto w-[min(1120px,100%)]">
        <h2 className="inline-flex items-center gap-2 text-[2rem] font-bold text-[#2b3644]">
          <Newspaper size={22} className="text-[#2792f0]" />
          Latest News
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <NewsListCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
