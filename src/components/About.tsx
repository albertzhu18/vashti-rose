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
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed">
          Vashti Rose creates classic and vegan ice creams using only a handful of
          carefully selected fresh ingredients. Each flavour is a celebration of
          exceptional farmers and artisan producers — both local and from around the
          world.
        </p>

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
