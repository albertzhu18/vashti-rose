import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Vashti Rose Ice Cream" className="h-12 brightness-0 invert mb-3" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              In-House Made Ice Cream
              <br />
              Classic & Vegan
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/60">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["About", "Flavours", "Visit Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="https://vashtiroseicecream.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Full Menu
              </a>
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/60">
              Contact
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-1">
              2411 St Johns St, Port Moody, BC V3H 2B2
            </p>
            <a
              href="tel:+16047546003"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              (604) 754-6003
            </a>

          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Vashti Rose In-House Made Ice Cream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
