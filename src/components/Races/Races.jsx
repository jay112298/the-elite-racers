import React from "react";
import { Race } from "./Races.st";
import LogoSilver from "../../assets/ter-silver.png";
import F12021 from "../../assets/home/f1-2021.png";
import DateShape from "../../assets/home/date-shape.svg";
import BuddhInternationalCircuit from "../../assets/Buddha-International-Circuit.jpg";
import { useNavigate } from "react-router-dom";

const Races = () => {
  const images = {
    one: BuddhInternationalCircuit,
  };
  const navigate = useNavigate();

  const handleCalendarTextClick = () => {
    navigate("/about");
  };

  return (
    <Race backgroundImage={images.one} f12021={F12021}>
      <div className="header">
        <div className="shape"></div>
        <div className="title">Races</div>
      </div>
      <div className="divider"></div>
      <div className="info-section">
        <div className="calendar" onClick={handleCalendarTextClick}>
          <div className="car-wrapper">
            <div
              className="text"
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigation("/about")}
            >
              2024
              <br />
              <span>Calendar</span>
            </div>
            <div className="logo">
              <img src={LogoSilver} alt="Silver Logo TER" />
            </div>
          </div>
        </div>
        <div className="venue">
          <div className="header">
            Upcoming <span>Event</span>
          </div>
          <div className="body">
            <div
              className="img"
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="footer">
            <span>AUTO</span> EXPO 2025
          </div>
        </div>
        <div className="dates">
          <div className="start">
            <div className="text">From</div>
            <div className="date">
              <div className="num">2</div>
              <div className="shape">
                <img src={DateShape} alt="Shape Drift" />
              </div>
            </div>
            <div className="month">October</div>
          </div>
          <div className="end">
            <div className="text">
              Ends <span>On</span>
            </div>
            <div className="date">
              <div className="num">5</div>
              <div className="shape">
                <img src={DateShape} alt="Shape Drift" />
              </div>
            </div>
            <div className="month">October</div>
          </div>
        </div>
      </div>
    </Race>
  );
};

export default Races;
