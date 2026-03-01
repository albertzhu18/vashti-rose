const InstagramFeed = () => {
  return (
    <section className="section-padding section-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            @vashtiroseicecream
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            See what we're scooping — follow along for new flavours, behind-the-scenes, and more.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-card">
            <iframe
              src="https://www.instagram.com/vashtiroseicecream/embed/"
              className="w-full border-0"
              height="600"
              scrolling="no"
              title="Vashti Rose Ice Cream Instagram Feed"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/vashtiroseicecream/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            Follow @vashtiroseicecream
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
