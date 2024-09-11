import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Highlights from "./highlights";
import Hero from "./hero";
import TestimonialSection from "./testimonial";
import Features from "./features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Highlights />
        <Features />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}
