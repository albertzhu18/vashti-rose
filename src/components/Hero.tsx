import heroImage from "@/assets/hero-ice-cream.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Artisanal ice cream scoops in waffle cones" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 opacity-0 animate-fade-up">
          Handcrafted Artisan Ice Cream. Classic & Vegan.
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up font-light"
          style={{ animationDelay: "0.2s" }}
        >
          Our dedication to quality is tireless and we are constantly developing and perfecting our recipes.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://vashtiroseicecream.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            View Flavours
          </a>
          <a
            href="#visit"
            className="rounded-full border-2 border-primary-foreground/80 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors tracking-wide"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
