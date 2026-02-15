type ProductCard = {
  id: number;
  title: string;
  description: string;
  imageUrl: null;
  link: null;
};

const productCardData: ProductCard[] = [{
  id: 1,
  title: "MindOps",
  description: "How smart insights execution, IT operations to zoom with integrations.",
  imageUrl: null,
  link: null
},
{
  id: 2,
  title: "MindSec",
  description: "How smart insights execution, IT operations to zoom with integrations.",
  imageUrl: null,
  link: null
},
{
  id: 3,
  title: "VisionCraft",
  description: "How smart insights execution, IT operations to zoom with integrations.",
  imageUrl: null,
  link: null
}
];

export function ProductSection() {
  return (
    <section className="surface-section product-section" id="product">
      <div className="content-wrap">
        <p className="section-kicker">Product</p>
        <h2 className="section-title">
          The product that solves your toughest business problems.
        </h2>

        <div className="product-grid">
          {productCardData.map((item) => (
            <article key={item.id} className="product-card">
              <div className="product-card-image" />
              <div className="product-card-body">
                <h3>{item.title}</h3>
                <p>
                  {item.description}
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
