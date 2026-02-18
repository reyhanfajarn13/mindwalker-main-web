import { featuredNews, latestNews, trendingNews } from "./newsData";
import { HeroNewsSection } from "./HeroNewsSection";
import { LatestNewsSection } from "./LatestNewsSection";
import { TrendingNewsSection } from "./TrendingNewsSection";
import { FooterSection } from "../../sections/FooterSection";

type NewsPageProps = {
  onOpenNewsDetails?: (id: number) => void;
};

export function NewsPage({ onOpenNewsDetails }: NewsPageProps) {
  return (
    <div className="bg-[#ececf0]">
      <HeroNewsSection items={featuredNews} onOpenNewsDetails={onOpenNewsDetails} />
      <LatestNewsSection items={latestNews} onOpenNewsDetails={onOpenNewsDetails} />
      <TrendingNewsSection items={trendingNews} onOpenNewsDetails={onOpenNewsDetails} />
      <div className="[&_footer]:min-h-0 [&_footer]:snap-none [&_footer]:items-start [&_footer>div]:pt-0 [&_footer>div]:lg:min-h-0 [&_footer>div]:lg:grid-rows-[auto]">
        <FooterSection />
      </div>
    </div>
  );
}
