import { featuredNews, latestNews, trendingNews } from "./newsData";
import { HeroNewsSection } from "./HeroNewsSection";
import { LatestNewsSection } from "./LatestNewsSection";
import { TrendingNewsSection } from "./TrendingNewsSection";
import { FooterSection } from "../../sections/FooterSection";

export function NewsPage() {
  return (
    <div className="bg-[#ececf0]">
      <HeroNewsSection items={featuredNews} />
      <LatestNewsSection items={latestNews} />
      <TrendingNewsSection items={trendingNews} />
      <div className="[&_footer]:min-h-0 [&_footer]:snap-none [&_footer]:items-start [&_footer>div]:pt-0 [&_footer>div]:lg:min-h-0 [&_footer>div]:lg:grid-rows-[auto]">
        <FooterSection />
      </div>
    </div>
  );
}
