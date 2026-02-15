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
    <footer className="footer-section" id="footer">
      <div className="content-wrap footer-stack">
        <article className="cta-banner">
          <div className="cta-inner">
            <h2>Ready to Discover?</h2>
            <p>
              Unleash your data with one powerful platform for modern analytics.
            </p>
            <div className="cta-actions">
              <button className="cta-ghost">Learn More</button>
              <button className="cta-solid">Demo</button>
            </div>
          </div>
          <div className="cta-partners">
            <span>Technology Partners</span>
            <ul>
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="footer-grid">
          {footerGroups.map((group, groupIndex) => (
            <section key={`${group.title}-${groupIndex}`} className="footer-column">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
}
