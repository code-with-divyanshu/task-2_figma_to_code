import GameSection from "@/sections/Game/GameSection";
import HeroSection from "@/sections/Hero/HeroSection";
import LatestTournamante from "@/sections/LatestTournament/LatestTournamante";
import ctaImage from "@/../public/images/cta-imgae1.png";
import ctaImage2 from "@/../public/images/cta-image2.png";
import CTA from "@/components/CTA/CTA";
import LiveTournament from "@/sections/LiveTournament/LiveTournament";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GameSection />
      <LatestTournamante />
      <CTA
        title="Create your own tournaments"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        btnText="REGISTER TODAY"
        image={ctaImage}
        width="611px"
        height="350px"
      />
      <LiveTournament />
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
}
