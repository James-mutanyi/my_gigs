import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedFreelancers } from "@/components/FeaturedFreelancers";
import { PlatformTestimonials } from "@/components/PlatformTestimonials";
import { Advertise } from "@/components/Advertise";
import { Footer } from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedFreelancers />
      <PlatformTestimonials />
      <Footer />
    </div>
  );
};

export default Landing;
