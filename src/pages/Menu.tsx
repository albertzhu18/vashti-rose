import { useState } from "react";
import { Link } from "react-router-dom";
import { dairyFlavours, veganFlavours } from "@/data/flavours";
import { IceCream, Leaf, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Menu = () => {
  const [activeTab, setActiveTab] = useState<"dairy" | "vegan">("dairy");
  const items = activeTab === "dairy" ? dairyFlavours : veganFlavours;

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-padding section-cream pt-32">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#flavours"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Full Menu
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">
              All Our Flavours
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our rotating selection of handcrafted ice creams — classic dairy and vegan options, all made in-house daily.
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
                Classic Dairy ({dairyFlavours.length})
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
                Vegan ({veganFlavours.length})
              </button>
            </div>
          </div>

          {/* Full grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((f) => (
              <div
                key={f.name}
                className="group bg-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-border/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-base font-semibold text-foreground leading-snug">
                    {f.name}
                  </h3>
                  {f.type === "Both" && (
                    <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-warm-beige text-secondary-foreground">
                      Both
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
