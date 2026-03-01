import flavorStrawberry from "@/assets/flavor-strawberry.jpg";
import flavorChocolate from "@/assets/flavor-chocolate.jpg";
import flavorPistachio from "@/assets/flavor-pistachio.jpg";
import flavorVanilla from "@/assets/flavor-vanilla.jpg";
import flavorMango from "@/assets/flavor-mango.jpg";
import flavorCaramel from "@/assets/flavor-caramel.jpg";

const flavours = [
  { name: "Strawberry Rose", type: "Classic", desc: "Fresh strawberries with a hint of rosewater", image: flavorStrawberry },
  { name: "Dark Chocolate Truffle", type: "Classic", desc: "Rich Belgian chocolate with cocoa nibs", image: flavorChocolate },
  { name: "Pistachio Dream", type: "Classic", desc: "Roasted Sicilian pistachios, pure and nutty", image: flavorPistachio },
  { name: "Tahitian Vanilla Bean", type: "Classic", desc: "Real vanilla bean with a creamy custard base", image: flavorVanilla },
  { name: "Mango Sorbet", type: "Vegan", desc: "Tropical Alphonso mango, dairy-free and refreshing", image: flavorMango },
  { name: "Salted Caramel", type: "Vegan", desc: "Coconut cream caramel with Maldon sea salt", image: flavorCaramel },
];

const Flavours = () => {
  return (
    <section id="flavours" className="section-padding section-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Flavours
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Crafted to Delight
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A rotating selection of classic and vegan flavours, made fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavours.map((f) => (
            <div
              key={f.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {f.name}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      f.type === "Vegan"
                        ? "bg-sage-light text-accent-foreground"
                        : "bg-rose-light text-primary"
                    }`}
                  >
                    {f.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://vashtiroseicecream.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            See Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Flavours;
