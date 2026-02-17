import { useEffect, useMemo, useRef, useState } from "react";
import { Flame } from "lucide-react";
import { NewsListCard } from "./NewsListCard";
import type { NewsCard } from "./types";

type TrendingNewsSectionProps = {
  items: NewsCard[];
};

const ITEMS_PER_PAGE = 3;

type SlideDirection = "left" | "right";

export function TrendingNewsSection({ items }: TrendingNewsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("left");
  const [slideClass, setSlideClass] = useState("translate-x-0 opacity-100");
  const isFirstRender = useRef(true);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!totalPages) {
      setCurrentPage(1);
      return;
    }

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setSlideClass(slideDirection === "left" ? "translate-x-8 opacity-0" : "-translate-x-8 opacity-0");

    const frameId = window.requestAnimationFrame(() => {
      setSlideClass("translate-x-0 opacity-100");
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [currentPage, slideDirection]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, items]);

  const changePage = (targetPage: number) => {
    if (targetPage === currentPage || targetPage < 1 || targetPage > totalPages) {
      return;
    }

    setSlideDirection(targetPage > currentPage ? "left" : "right");
    setCurrentPage(targetPage);
  };

  return (
    <section className="px-4 pb-12 sm:px-6">
      <div className="mx-auto w-[min(1120px,100%)]">
        <h2 className="inline-flex items-center gap-2 text-[2rem] font-bold text-[#2b3644]">
          <Flame size={22} className="text-[#ef5a5a]" />
          Trending News
        </h2>
        <div className={`mt-5 grid gap-5 transition-all duration-400 ease-out md:grid-cols-2 xl:grid-cols-3 ${slideClass}`}>
          {paginatedItems.map((item) => (
            <NewsListCard
              key={item.id}
              item={item}
              className="group hover:scale-[1.03]"
              imageClassName="grayscale group-hover:grayscale-0"
            />
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="mt-7 flex flex-wrap items-center justify-start gap-2">
            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-full border border-[#ccd9ea] px-4 py-1.5 text-sm font-semibold text-[#355172] transition-colors hover:bg-[#e8f1fd] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  className={`h-9 min-w-9 rounded-full px-3 text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-[#0f83e5] text-white"
                      : "border border-[#ccd9ea] text-[#355172] hover:bg-[#e8f1fd]"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-full border border-[#ccd9ea] px-4 py-1.5 text-sm font-semibold text-[#355172] transition-colors hover:bg-[#e8f1fd] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
