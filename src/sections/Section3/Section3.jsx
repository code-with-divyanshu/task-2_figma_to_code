import Tournaments from "@/components/Tournaments/Tournaments";
import codImage from "@/../public/images/cod.jpg";
import freeFireImage from "@/../public/images/free-fire.png";
import asphaltImage from "@/../public/images/asphalt.jpg";
import cowImage from "@/../public/images/cow.jpg";
import teamSoul from "@/../public/images/teamSoul.png";
import teamHydra from "@/../public/images/teamHydra.jpg";
import teamClubOne from "@/../public/images/teamClubOne.jpg";
import teamBamba from "@/../public/images/teamBamba.png";
import React from "react";
import "./Section3.css";
import TopTeams from "@/components/TopTeams/TopTeams";

const Section3 = () => {
  return (
    <section className="section3-conatiner">
      <div className="tournaments-container">
        <h4>TOURNAMENTS :</h4>
        <Tournaments
          title="CALL OF DUTY PC ||"
          image={codImage}
          color="#FF8800"
          btnText="UPCOMING"
        />

        <Tournaments
          title="FREE FIRE PC ||"
          image={freeFireImage}
          color="#FDB900"
          btnText="FINISHED"
        />

        <Tournaments
          title="CODE OF WAR PC ||"
          image={cowImage}
          color="#FF8800"
          btnText="UPCOMING"
        />

        <Tournaments
          title="ASPHALT AIRBORNE 8 PC ||"
          image={asphaltImage}
          color="#6DBA00"
          btnText="PLAYING"
        />
      </div>

      <div className="top-team-ranks">
        <h4>TOP TEAMS RANK :</h4>
        <TopTeams
          title="TEAM SOUL"
          subtitle="BATTELGROUNDS MOBILE INDIA PC || CLASSIC ERANGLE TURNAMENT BATTEL."
          color="#60FC6C"
          image={teamSoul}
        />

        <TopTeams
          title="TEAM HYDRAS"
          subtitle="BATTELGROUNDS MOBILE INDIA PC || CLASSIC ERANGLE TURNAMENT BATTEL."
          color="#F55937"
          image={teamHydra}
        />

        <TopTeams
          title="TEAM CLUB ONE"
          subtitle="BATTELGROUNDS MOBILE INDIA PC || CLASSIC ERANGLE TURNAMENT BATTEL."
          color="#9BD4F2"
          image={teamClubOne}
        />

        <TopTeams
          title="TEAM BAMBA"
          subtitle="BATTELGROUNDS MOBILE INDIA PC || CLASSIC ERANGLE TURNAMENT BATTEL."
          color="#fff"
          image={teamBamba}
        />
      </div>
    </section>
  );
};

export default Section3;
