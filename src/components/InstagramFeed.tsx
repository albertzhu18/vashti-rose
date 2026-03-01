const instagramPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  placeholder: true,
}));

const InstagramFeed = () => {
  return (
    <section className="section-padding section-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            @vashtiroseicecream
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Follow Us on Instagram
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/vashtiroseicecream/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-xl overflow-hidden bg-warm-beige group relative"
            >
              <div className="w-full h-full bg-gradient-to-br from-rose-light to-sage-light flex items-center justify-center">
                <span className="text-3xl opacity-40">🍦</span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground text-sm font-medium">
                  View on Instagram
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
