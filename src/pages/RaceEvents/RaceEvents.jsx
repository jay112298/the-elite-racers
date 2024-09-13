import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { RacesContainer, RacesGrid, RaceCard } from "./RaceEvents.st";

const RaceEvents = () => {
  const raceEvents = [
    { name: "SAE Aero Design", date: "March 8–10, 2024", location: "Paradise Field 4999 Air Show Road Lakeland, FL 33811" },
    { name: "AutoDrive Challenge II™", date: "June 4-10, 2024", location: "Ann Arbor, Michigan " },
    { name: "Baja SAE", date: "May 16–19, 2024", location: "Pennsylvania College of Technology" },
    { name: "SAE Clean Snowmobile Challenge", date: "March 7–9, 2024", location: "23620 Airpark Blvd Calumet MI 49913" },
    { name: "Formula Hybrid", date: "April 29–May 2, 2024", location: "Loudon, NH" },
    { name: "Formula SAE®", date: "May 8–11, 2024", location: "Michigan Int'l Speedway" },
    { name: "Formula SAE® Electric", date: "September 20-22, 2024", location: "Charlotte, North Carolina" },
    { name: "Baja SAE Michigan", date: "September 12–15, 2024", location: "Holly Oaks Offroad Park" },
  ];

  return (
    <>
      <Navbar />
      <RacesContainer>
        <h1>Events 2024</h1>
        <RacesGrid>
          {raceEvents.map((race, index) => (
            <RaceCard key={index}>
              <h2>{race.name}</h2>
              <p>{race.date}</p>
              <p>{race.location}</p>
            </RaceCard>
          ))}
        </RacesGrid>
      </RacesContainer>
      <Footer />
    </>
  );
};

export default RaceEvents;