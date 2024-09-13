import React from "react";
import { ExploreSec } from "./Explore.st";
import Victory from "../../assets/home/victory.svg";
import Subtract from "../../assets/home/subtract.svg";
import TerSilver from "../../assets/ter-silver.png";
import fsaeTop from "../../assets/home/fsae-car.png";
import Flogo from "../../assets/home/f-logo.svg";
import Star from "../../assets/home/plus-star.svg";
import Blob1 from "../../assets/home/blob1.svg";
import Blob2 from "../../assets/home/blob2.svg";
import Blob3 from "../../assets/home/blob3.svg";
import OrangeStar from "../../assets/home/orange-star.svg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <ExploreSec
      subtract={Subtract}
      blob1={Blob1}
      blob2={Blob2}
      blob3={Blob3}
      ogStar={OrangeStar}
    >
      <div className="content">
        <div className="explore">
          <div className="speed">
            <span>Speed</span>
            <br />
            is our language
          </div>
          <img src={Victory} alt="Victory typography" className="victory" />
          <div className="destination">
            is our <span>Destination.</span>
          </div>
          <div className="brief">
            Dive into the thrilling world of Formula One, guided by our
            exceptional team's engineering brilliance, strategic mastery, and
            passion for speed.
          </div>
          <div className="cta">
            <Link
              to="/team"
              style={{
                width: "245px",
                height: "57px",
                top: "1656px",
                left: "148px",
                gap: "0px",
                borderRadius: "7px 0px 0px 0px",
                opacity: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.29rem",
                fontWeight: "700",
                textTransform: "uppercase",
                backgroundColor: "#D93100",
                textDecoration: "none",
              }}
            >
              Explore Team
            </Link>
          </div>
        </div>
      </div>

      <div className="fsae">
        <div className="header">
          <div className="future">
            <span>Explore</span>
            <br />
            the future of
          </div>
          <div className="ter-logo">
            <img src={TerSilver} alt="Logo Silver" />
          </div>
        </div>
        <div className="content">
          <div className="sae">
            <div className="f">
              <img src={Flogo} alt="Formula" />
            </div>
            <div className="star">
              <img src={Star} alt="" />
            </div>
            <div className="sae-typo">
              <div>S</div>
              <div>A</div>
              <div>E</div>
            </div>
            <div className="star">
              <img src={Star} alt="" />
            </div>
          </div>
          <div className="car">
            <img src={fsaeTop} alt="FSAE Car, Top View" />
          </div>
        </div>
      </div>
    </ExploreSec>
  );
};

export default Explore;
