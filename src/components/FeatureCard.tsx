type FeatureCardProps = {
  title: string;
  badge: string;
  description: string;
};

export function FeatureCard({ title, badge, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-visual" />
      <div className="feature-content">
        <div className="feature-head">
          <h2>{title}</h2>
          <span>{badge}</span>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}
