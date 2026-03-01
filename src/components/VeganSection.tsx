import { Leaf } from "lucide-react";

const VeganSection = () => {
  return (
    <section className="section-padding section-sage">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6">
          <Leaf className="w-7 h-7 text-accent-foreground" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
          Loads of Vegan & Dairy-Free Options
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We believe everyone deserves incredible ice cream. Our vegan and dairy-free
          flavours are crafted with the same care and premium ingredients — no
          compromise on taste.
        </p>
        <blockquote className="relative max-w-xl mx-auto">
          <p className="text-foreground italic text-lg font-heading leading-relaxed">
            "I eat dairy-free ice cream and this place had loads of vegan/DF options."
          </p>
          <cite className="block mt-3 text-sm text-muted-foreground not-italic">
            — Google Review
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default VeganSection;
