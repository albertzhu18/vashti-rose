import { useState } from "react";
import { Link } from "react-router-dom";
import { dairyFlavours, veganFlavours } from "@/data/flavours";
import { IceCream, Leaf } from "lucide-react";

const PREVIEW_COUNT = 9;

const FlavourCard = ({ name, type }: { name: string; type: string }) => (
  <div className="group bg-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-border/50">
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-heading text-base font-semibold text-foreground leading-snug">
        {name}
      </h3>
      {type === "Both" && (
        <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-warm-beige text-secondary-foreground">
          Both
        </span>
      )}
    </div>
  </div>
);

const Flavours = () => {
  const [activeTab, setActiveTab] = useState<"dairy" | "vegan">("dairy");

  const items = activeTab === "dairy" ? dairyFlavours : veganFlavours;
  const preview = items.slice(0, PREVIEW_COUNT);

  return (
    <section id="flavours" className="section-padding section-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
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

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTab("dairy")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "dairy"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <IceCream className="w-4 h-4" />
              Classic Dairy
            </button>
            <button
              onClick={() => setActiveTab("vegan")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "vegan"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Leaf className="w-4 h-4" />
              Vegan
            </button>
          </div>
        </div>

        {/* Grid preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((f) => (
            <FlavourCard key={f.name} name={f.name} type={f.type} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            See Full Menu ({items.length} flavours)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Flavours;
