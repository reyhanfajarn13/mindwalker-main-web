import { featuredNews, latestNews, trendingNews } from "./newsData";
import { HeroNewsSection } from "./HeroNewsSection";
import { LatestNewsSection } from "./LatestNewsSection";
import { TrendingNewsSection } from "./TrendingNewsSection";

export function NewsPage() {
  const heroItem = featuredNews[0];

  return (
    <div className="bg-[#ececf0]">
      <HeroNewsSection item={heroItem} />
      <LatestNewsSection items={latestNews} />
      <TrendingNewsSection items={trendingNews} />
    </div>
  );
}
