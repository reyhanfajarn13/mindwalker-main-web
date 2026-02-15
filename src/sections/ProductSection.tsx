const productCards = [1, 2, 3];

export function ProductSection() {
  return (
    <section className="surface-section product-section" id="product">
      <div className="content-wrap">
        <p className="section-kicker">Product</p>
        <h2 className="section-title">
          The product that solves your toughest business problems.
        </h2>

        <div className="product-grid">
          {productCards.map((item) => (
            <article key={item} className="product-card">
              <div className="product-card-image" />
              <div className="product-card-body">
                <h3>Mind Ops</h3>
                <p>
                  How smart insights execution, IT operations to zoom with
                  integrations.
                </p>
                <a href="#">Learn More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
