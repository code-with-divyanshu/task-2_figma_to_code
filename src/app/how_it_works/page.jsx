import CTA from "@/components/CTA/CTA";
import ctaImage2 from "@/../public/images/cta-image2.png";
import Hero from "@/sections/HeroHowItWork/Hero";
import HowItWorks from "@/sections/HowItWorks/HowItWorks";
import Section3 from "@/sections/Section3/Section3";

const HowItWork = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Section3 />
      <CTA
        title="What are you waiting for?"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        btnText="GET STARTED"
        image={ctaImage2}
        width="400px"
        height="350px"
      />
    </>
  );
};

export default HowItWork;
