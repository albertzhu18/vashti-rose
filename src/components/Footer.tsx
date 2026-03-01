import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-3">Vashti Rose</h3>
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
              {["About", "Flavours", "Reviews", "Visit Us"].map((link) => (
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

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.18 8.18 0 003.76.92V6.17a4.84 4.84 0 01-.01.52z"/></svg>
              </a>
            </div>
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
