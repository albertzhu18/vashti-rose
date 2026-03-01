import { MapPin, Phone, Clock } from "lucide-react";

const VisitUs = () => {
  return (
    <section id="visit" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Visit Us Today
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-122.8631!3d49.2781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679f3e5b6f5f7%3A0x1234567890abcdef!2s2411%20St%20Johns%20St%2C%20Port%20Moody%2C%20BC%20V3H%202B2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vashti Rose Location"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  2411 St Johns St, Port Moody, BC V3H 2B2
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Phone
                </h3>
                <a href="tel:+16047546003" className="text-muted-foreground hover:text-primary transition-colors">
                  (604) 754-6003
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Hours
                </h3>
                <p className="text-muted-foreground">Opens daily at 1 PM</p>
                <p className="text-sm text-muted-foreground/70 mt-1">
                  Usually a little busy around 5 PM
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//2411+St+Johns+St,+Port+Moody,+BC+V3H+2B2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
