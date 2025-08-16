import React from "react";
import "./LiveTournament.css";
import Image from "next/image";
import pubgImage from "@/../public/images/pubg-image.png";
import liveStream from "@/../public/images/liveStream.png";
import codImage from "@/../public/images/cod.jpg";
import freeFireImage from "@/../public/images/free-fire.png";
import asphaltImage from "@/../public/images/asphalt.jpg";
import cowImage from "@/../public/images/cow.jpg";
import teamSoul from "@/../public/images/teamSoul.png";
import teamHydra from "@/../public/images/teamHydra.jpg";
import teamClubOne from "@/../public/images/teamClubOne.jpg";
import teamBamba from "@/../public/images/teamBamba.png";
import Tournaments from "@/components/Tournaments/Tournaments";
import TopTeams from "@/components/TopTeams/TopTeams";

const tabs = [
  {
    id: 0,
    title: "ALL",
  },
  {
    id: 1,
    title: "BGMI",
  },
  {
    id: 2,
    title: "FREE FIRE",
  },
  {
    id: 3,
    title: "CALL OF DUTY",
  },
  {
    id: 4,
    title: "ASPHALT 8",
  },
  {
    id: 5,
    title: "CODE OF WAR",
  },
  {
    id: 6,
    title: "MORE",
  },
];

const LiveTournament = () => {
  return (
    <section id="liveTournament" className="liveTournament">
      <h2>LIVE TOURNAMENT</h2>
      <div className="tabs">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button className={tab.id === 0 ? "active" : ""}>
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      <div className="main-container">
        <div className="left-container">
          <div className="live-streaming">
            <h3>LIVE STREAMING</h3>
            <Image src={liveStream} alt="live-stream" />
            <h5>
              BATTELGROUNDS MOBILE INDIA PC || CLASSIC ERANGLE TURNAMENT 4V4
              TEAMS <span>LIVE :</span>
            </h5>
          </div>
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

        <div className="right-container">
          <h4>TOURNAMENTS :</h4>
          <Tournaments
            title="BATTELGROUNDS MOBILE INDIA PC || "
            image={pubgImage}
            color="#6DBA00"
            btnText="PLAYING"
            liveMsg="LIVE"
          />

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

          <Tournaments
            title="FREE FIRE PC ||"
            image={freeFireImage}
            color="#FF8800"
            btnText="UPCOMING"
          />

          <Tournaments
            title="BATTELGROUNDS MOBILE INDIA PC || "
            image={pubgImage}
            color="#FF8800"
            btnText="UPCOMING"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveTournament;
