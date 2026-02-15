export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="noise-overlay" />

      <div className="hero-layout">
        <div className="hero-copy">
          <h1>From Insights to Impact</h1>
          <div className="hero-partner">
            <span>Part of</span>
            <span className="partner-badge">NVIDIA Inception Program</span>
          </div>
        </div>

        <article className="hero-news-card">
          <div className="hero-news-image" />
          <div className="hero-news-content">
            <div className="hero-news-head">
              <h2>Mind Ops</h2>
              <span>News</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum amet metus lorem
              id. Metus sem nam et platea quis dui aliquet.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
