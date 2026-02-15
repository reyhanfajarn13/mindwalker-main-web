const partners = ["ClickHouse", "NICE", "TechCrunch", "InfoWorld", "GitHouse"];

const footerGroups = [
  {
    title: "Mindwalker.ai",
    items: [
      "As a trusted leader in digital transformation",
      "Focus on data, AI, and operations",
      "Future-ready business platform"
    ]
  },
  {
    title: "Lorem ipsum",
    items: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
  },
  {
    title: "Lorem ipsum",
    items: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
  },
  {
    title: "Lorem ipsum",
    items: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
  }
];

export function FooterSection() {
  return (
    <footer
      className="grid min-h-screen snap-start snap-always items-center bg-white px-0 py-8"
      id="footer"
    >
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-8 lg:min-h-[calc(100vh-5rem)] lg:grid-rows-[3fr_2fr]">
        <article className="rounded-2xl border border-[#d6dbe5] bg-[linear-gradient(120deg,#f0f1f5,#fdfdff_48%,#f0f1f5)] px-5 pb-4 pt-4 shadow-[0_9px_24px_rgba(88,103,126,0.24)]">
          <div className="px-0 py-5 text-center">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-[#2d98eb]">Ready to Discover?</h2>
            <p className="mt-1 text-[#95a2b3]">
              Unleash your data with one powerful platform for modern analytics.
            </p>
            <div className="mt-3.5 flex justify-center gap-2">
              <button className="cursor-pointer rounded-full border-0 bg-[#e8edf4] px-4 py-1.5 text-[0.76rem] font-bold text-[#3f5062]">
                Learn More
              </button>
              <button className="cursor-pointer rounded-full border-0 bg-[#2a95f1] px-4 py-1.5 text-[0.76rem] font-bold text-[#f4faff]">
                Demo
              </button>
            </div>
          </div>
          <div className="border-t border-[#dde2eb] pt-3 text-center">
            <span className="text-[0.68rem] text-[#9aa8b9]">Technology Partners</span>
            <ul className="mt-1.5 flex list-none flex-wrap justify-center gap-4 text-[0.76rem] font-bold text-[#6e7e90]">
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {footerGroups.map((group, groupIndex) => (
            <section key={`${group.title}-${groupIndex}`}>
              <h3 className="text-[0.78rem] text-[#3f546a]">{group.title}</h3>
              <ul className="mt-1.5 list-none">
                {group.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`} className="mt-1 text-[0.69rem] leading-[1.4] text-[#7f8ea1]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
}
