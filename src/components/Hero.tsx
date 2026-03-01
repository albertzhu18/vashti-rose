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

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-56 md:w-64 lg:w-72 h-36 md:h-44 lg:h-48 rounded-xl overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center gap-6 md:gap-8 bg-background overflow-hidden py-16">
      <MarqueeRow />
      
      <div className="text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 opacity-0 animate-fade-up">
          Handcrafted Artisan Ice Cream. Classic & Vegan.
        </h1>
        <p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up font-light"
          style={{ animationDelay: "0.2s" }}
        >
          Our dedication to quality is tireless and we are constantly developing and perfecting our recipes.
        </p>
      </div>

      <MarqueeRow reverse />
    </section>
  );
};

export default Hero;
