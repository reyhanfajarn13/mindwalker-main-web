import type { NewsCard } from "./types";

type NewsListCardProps = {
  item: NewsCard;
};

export function NewsListCard({ item }: NewsListCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#d7dee9] bg-[#eef4fb] shadow-[0_8px_20px_rgba(20,33,50,0.1)]">
      <img src={item.imageUrl} alt={item.title} className="h-[230px] w-full object-cover" loading="lazy" />
      <div className="p-4">
        <p className="text-[0.68rem] text-[#8b97a6]">
          {item.category} | {item.date}
        </p>
        <h3 className="mt-2 text-[1.95rem] leading-[1.2] text-[#232d3a]">{item.title}</h3>
        <button type="button" className="mt-3 text-[0.82rem] font-semibold text-[#0f83e5]">
          {item.excerpt} {"->"}
        </button>
      </div>
    </article>
  );
}
