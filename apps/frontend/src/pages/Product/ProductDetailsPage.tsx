import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Sparkles, Layers, Palette, UsersRound } from "lucide-react";
import { FooterSection } from "../../sections/FooterSection";
import { getProductBySlug } from "./productData";
import { allNews } from "../News/newsData";

type ProductDetailsPageProps = {
  productSlug: string;
  onOpenNewsDetails?: (id: number) => void;
};

export function ProductDetailsPage({ productSlug, onOpenNewsDetails }: ProductDetailsPageProps) {
  const product = useMemo(() => getProductBySlug(productSlug), [productSlug]);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!product) {
    return (
      <div className="bg-[#ececf0] px-4 pb-12 pt-[6rem] sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)] rounded-2xl bg-white p-6 text-center shadow-[0_8px_24px_rgba(24,39,58,0.12)]">
          <h1 className="text-[1.8rem] font-bold text-[#243242]">Product not found</h1>
          <p className="mt-2 text-[#627489]">The product you are looking for is unavailable.</p>
        </div>
      </div>
    );
  }

  const heroNewsCards = useMemo(() => {
    const matched = allNews.filter((item) =>
      (item.tags ?? []).some((tag) => tag.toLowerCase() === product.title.toLowerCase())
    );

    const source = matched.length > 0 ? matched : allNews;
    return source.slice(0, 4);
  }, [product.title]);
  const heroCardGridClass =
    heroNewsCards.length <= 1
      ? "grid-cols-1"
      : heroNewsCards.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : heroNewsCards.length === 3
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  const featureIcons = [Sparkles, Layers, Palette, UsersRound];

  return (
    <div className="bg-[#ececf0]">
      <section className="relative snap-start min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_20%,#1c3566_0%,#111b2f_42%,#0a101d_100%)] px-4 pb-12 pt-[6rem] sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)]">
          <h1 className="text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] text-[#2f92ff]">
            <span className="text-white">{product.title.split(" ")[0]}</span>
            {product.title.includes(" ") ? ` ${product.title.split(" ").slice(1).join(" ")}` : ""}
          </h1>
          <p className="mt-3 max-w-[78ch] text-[1rem] leading-[1.7] text-[rgba(231,241,255,0.92)]">
            {product.heroDescription}
          </p>
          <button
            type="button"
            className="mt-4 rounded-full border-0 bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-5 py-2 text-[0.88rem] font-semibold text-white"
          >
            {product.demoLabel}
          </button>

          <div className={`mt-8 grid gap-3 ${heroCardGridClass}`}>
            {heroNewsCards.map((item) => {
              return (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-[rgba(15,26,42,0.78)] transition-transform duration-400 ease-out hover:scale-[1.03]"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-40 w-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.08] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[rgba(4,10,22,0.2)] transition-colors duration-300" />
                  <div className="relative rounded-b-2xl bg-transparent p-3 transition-colors duration-300 group-hover:bg-white">
                    <h3 className="line-clamp-1 text-[clamp(1rem,1.4vw,1.1rem)] font-semibold text-white transition-colors duration-300 group-hover:text-[#0f1720]">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[0.8rem] text-[rgba(225,236,249,0.92)] transition-colors duration-300 group-hover:text-[#1f2a37]">
                      {item.excerpt}
                    </p>
                    <button
                      type="button"
                      onClick={() => onOpenNewsDetails?.(item.id)}
                      className="mt-2 text-[0.8rem] font-semibold text-[#1d8cf0] transition-colors duration-300 hover:text-[#1173cf]"
                    >
                      Learn More -&gt;
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="snap-start px-4 py-12 sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)]">
          <h2 className="text-center text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold text-[#2490ef]">{product.featureHeading}</h2>
          <p className="mx-auto mt-2 max-w-[70ch] text-center text-[0.98rem] leading-[1.7] text-[#6a7b91]">
            {product.featureDescription}
          </p>

          <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
            <div className="overflow-hidden rounded-3xl border border-[#d8e2eb] bg-[#f1f3f6] p-2">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-[clamp(240px,36vw,390px)] w-full rounded-2xl object-cover grayscale"
              />
            </div>
            <div className="grid gap-5">
              {product.featurePoints.map((point, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <div key={point} className="flex flex-col items-center text-center">
                    <Icon size={25} className="text-[#27313e]" />
                    <p className="mt-2 text-[0.98rem] font-medium text-[#3a4656]">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start px-4 pb-14 sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)]">
          <h2 className="text-center text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-[#2490ef]">Pertanyaan Anda, Kami Jawab</h2>
          <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-[0_10px_26px_rgba(28,45,66,0.12)]">
            {product.faqItems.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="border-b border-[#e3e9f2] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                    className="flex w-full items-center justify-between px-4 py-3 text-left sm:px-5"
                  >
                    <span className="text-[0.95rem] font-semibold text-[#2a3c51]">{faq.question}</span>
                    {isOpen ? <ChevronDown size={18} className="text-[#248cf0]" /> : <ChevronRight size={18} className="text-[#788ba3]" />}
                  </button>
                  {isOpen ? <p className="px-4 pb-4 text-[0.92rem] leading-[1.65] text-[#5f6f83] sm:px-5">{faq.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="snap-start px-4 pb-14 sm:px-6">
        <div className="mx-auto w-[min(1120px,100%)]">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-[#2490ef]">Contoh Penerapan {product.title}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.useCases.map((item) => (
              <article key={item.id} className="rounded-2xl bg-white p-3 shadow-[0_8px_20px_rgba(28,45,66,0.12)]">
                <img src={item.imageUrl} alt={item.title} className="h-40 w-full rounded-xl object-cover grayscale transition duration-500 hover:grayscale-0" />
                <h3 className="mt-3 text-[1rem] font-semibold text-[#27313e]">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-[0.88rem] text-[#6a7b91]">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="[&_footer]:min-h-0 [&_footer]:snap-none [&_footer]:items-start [&_footer>div]:pt-0 [&_footer>div]:lg:min-h-0 [&_footer>div]:lg:grid-rows-[auto]">
        <FooterSection />
      </div>
    </div>
  );
}
