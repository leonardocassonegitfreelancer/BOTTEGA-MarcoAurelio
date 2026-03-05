import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BarattoSection from "@/components/BarattoSection";
import CollectionsSection from "@/components/CollectionsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 400);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <TestimonialSection />
      <BarattoSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Index;
