import { Leaf, Award, Heart, MapPin } from "lucide-react";

const highlights = [
  { icon: Award, label: "Small-batch production" },
  { icon: Leaf, label: "Premium ingredients" },
  { icon: Heart, label: "Dairy-free & vegan options" },
  { icon: MapPin, label: "Crafted daily in Port Moody" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          Our Story
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
          Made With Intention
        </h2>

        <div className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed space-y-6 mb-10">
          <p>
            Vashti Rose Vegan and Dairy Classic Ice Cream are made with just a handful of fresh ingredients. Each flavour celebrates some of the world's best artisan producers and farmers, both local and international.
          </p>
          <p>
            We make all our ice creams from scratch at Vashti Rose in Port Moody BC. The Classic scoops are crafted with nothing more than fresh organic pasteurized milk and organic pasteurized cream, organic cane sugar, and organic pasteurized egg yolks. The vegan scoops are made with house-made cashew milk, organic coconut milk, organic extra virgin coconut oil, organic cane sugar, pure cocoa butter, and organic carob beans. Both recipes result in a rich, decadent, naturally perfect ice cream.
          </p>
          <p>
            Our dedication to quality is tireless and we are constantly developing and perfecting our recipes.
          </p>
          <p className="font-heading text-foreground text-base italic">
            — Hamid and Kelly
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/60"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
