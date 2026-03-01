import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "So creamy, great variety of flavors, and super friendly staff.",
    source: "Google Review",
  },
  {
    text: "Great quality, loaded with flavour, friendly service & a must try!",
    source: "Google Review",
  },
  {
    text: "I eat dairy-free ice cream and this place had loads of vegan/DF options.",
    source: "Google Review",
  },
];

const ratings = [
  { platform: "Facebook", score: "5/5" },
  { platform: "HappyCow", score: "4.5/5" },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding section-rose">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          What People Say
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-12">
          Loved by the Community
        </h2>

        {/* Testimonial slider */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-1 justify-center mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-heading italic text-foreground leading-relaxed min-h-[80px]">
            "{reviews[current].text}"
          </blockquote>
          <cite className="block mt-4 text-sm text-muted-foreground not-italic">
            — {reviews[current].source}
          </cite>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Ratings */}
        <div className="flex justify-center gap-8">
          {ratings.map((r) => (
            <div key={r.platform} className="text-center">
              <p className="text-2xl font-heading font-semibold text-foreground">
                {r.score}
              </p>
              <p className="text-sm text-muted-foreground">{r.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
