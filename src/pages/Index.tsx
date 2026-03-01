import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Flavours from "@/components/Flavours";
import VeganSection from "@/components/VeganSection";
import VisitUs from "@/components/VisitUs";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Flavours />
      <VeganSection />
      <VisitUs />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
