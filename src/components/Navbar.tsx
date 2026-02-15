const navItems = [
  { label: "Home", target: "home", activeFor: ["home"] },
  { label: "Product", target: "product", activeFor: ["product"] },
  { label: "Solutions", target: "solutions", activeFor: ["solutions"] },
  { label: "About Us", target: "footer", activeFor: ["footer"] },
  { label: "News", target: "footer", activeFor: ["footer"] }
];

type NavbarProps = {
  className?: string;
  activeSection?: string;
  onNavigate?: (targetId: string) => void;
};

export function Navbar({ className, activeSection, onNavigate }: NavbarProps) {
  const activeLabel =
    navItems.find((item) => item.activeFor.includes(activeSection ?? ""))?.label ?? "";

  return (
    <header className={`navbar-shell ${className ?? ""}`.trim()}>
      <div className="logo-dot">N</div>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = item.label === activeLabel;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  className={`nav-link${isActive ? " nav-link-active" : ""}`}
                  onClick={() => onNavigate?.(item.target)}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="nav-right">
        <button className="lang-pill" type="button">
          IDN
        </button>
        <button className="cta-button" type="button">
          Contact Us
        </button>
      </div>
    </header>
  );
}
