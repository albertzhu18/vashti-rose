import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const topRow = [gallery1, gallery2, gallery3, gallery4, gallery5];
const bottomRow = [gallery6, gallery7, gallery8, gallery9, gallery10];

const MarqueeRow = ({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) => {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: `${doubled.length * 320}px` }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-72 h-52 md:w-80 md:h-56 flex-shrink-0 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt="Vashti Rose Ice Cream"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-background overflow-hidden">
      {/* Top marquee - scrolls left */}
      <MarqueeRow images={topRow} />

      {/* Mission statement */}
      <div className="text-center px-6 py-14 md:py-20 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6">
          Handcrafted Ice Cream. Classic & Vegan.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
          Made in-house with just a handful of fresh ingredients and inspired by
          the world's best artisan producers and local farmers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/menu"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            View Flavours
          </a>
          <a
            href="#visit"
            className="rounded-full border-2 border-foreground/30 px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-foreground/5 transition-colors tracking-wide"
          >
            Visit Us Today
          </a>
        </div>
      </div>

      {/* Bottom marquee - scrolls right */}
      <MarqueeRow images={bottomRow} reverse />
    </section>
  );
};

export default Hero;
