import { Facebook, Linkedin, Link2, Twitter } from "lucide-react";
import { allNews } from "./newsData";
import { FooterSection } from "../../sections/FooterSection";
import { useTranslation } from "react-i18next";

type NewsDetailsPageProps = {
  newsId: number;
  onOpenNewsDetails?: (id: number) => void;
};

export function NewsDetailsPage({ newsId, onOpenNewsDetails }: NewsDetailsPageProps) {
  const { t } = useTranslation();
  const detail = allNews.find((item) => item.id === newsId);

  if (!detail) {
    return (
      <div className="bg-[#ececf0] px-4 pb-12 pt-[6rem] sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)] rounded-2xl bg-white p-6 text-center shadow-[0_8px_24px_rgba(24,39,58,0.12)]">
          <h1 className="text-[1.8rem] font-bold text-[#243242]">{t("news.details.notFoundTitle")}</h1>
          <p className="mt-2 text-[#627489]">{t("news.details.notFoundMessage")}</p>
        </div>
      </div>
    );
  }

  const related = allNews.filter((item) => item.id !== detail.id).slice(0, 3);
  const tags = detail.tags?.length ? detail.tags : [detail.category];

  return (
    <div className="bg-[#ececf0]">
      <section className="px-4 pb-10 pt-[6rem] sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)]">
          <p className="text-[0.94rem] text-[#6c7b8f]">
            {detail.date} | {t("news.details.authorName")}
          </p>
          <h1 className="mt-2 max-w-[28ch] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.16] text-[#27313e]">{detail.title}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#dce9f8] px-3 py-1 text-[0.78rem] font-semibold text-[#2f5f96]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_300px]">
            <div>
              <img src={detail.imageUrl} alt={detail.title} className="h-[clamp(260px,42vw,520px)] w-full rounded-2xl object-cover" />

              <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.8] text-[#3b4958]">
                <p>{detail.excerpt}</p>
                <p>{t("news.details.paragraph1")}</p>
                <p>{t("news.details.paragraph2")}</p>
              </div>
            </div>

            <aside className="space-y-6">
              <div>
                <h2 className="text-[1.25rem] font-semibold text-[#27313e]">{t("news.details.shareArticle")}</h2>
                <div className="mt-2 flex items-center gap-2 text-[#1981dc]">
                  <button type="button" className="grid h-9 w-9 place-items-center rounded-md bg-white shadow-[0_3px_10px_rgba(16,31,51,0.14)]">
                    <Facebook size={16} />
                  </button>
                  <button type="button" className="grid h-9 w-9 place-items-center rounded-md bg-white shadow-[0_3px_10px_rgba(16,31,51,0.14)]">
                    <Twitter size={16} />
                  </button>
                  <button type="button" className="grid h-9 w-9 place-items-center rounded-md bg-white shadow-[0_3px_10px_rgba(16,31,51,0.14)]">
                    <Linkedin size={16} />
                  </button>
                  <button type="button" className="grid h-9 w-9 place-items-center rounded-md bg-white shadow-[0_3px_10px_rgba(16,31,51,0.14)]">
                    <Link2 size={16} />
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-[1.25rem] font-semibold text-[#27313e]">{t("news.details.latestNews")}</h2>
                <div className="mt-3 space-y-3">
                  {related.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onOpenNewsDetails?.(item.id)}
                      className="flex w-full items-start gap-3 rounded-xl bg-white p-2 text-left shadow-[0_5px_14px_rgba(22,37,58,0.1)]"
                    >
                      <img src={item.imageUrl} alt={item.title} className="h-14 w-14 rounded-md object-cover" />
                      <p className="line-clamp-3 text-[0.9rem] leading-[1.35] text-[#314254]">{item.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="[&_footer]:min-h-0 [&_footer]:snap-none [&_footer]:items-start [&_footer>div]:pt-0 [&_footer>div]:lg:min-h-0 [&_footer>div]:lg:grid-rows-[auto]">
        <FooterSection />
      </div>
    </div>
  );
}
