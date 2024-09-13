import React from 'react';
import { RecruitmentSec } from './RecruitmentBanner.st';
import OrangeStar from "../../assets/home/orange-star.svg";
import { Link } from "react-router-dom";
import Ferrari from "../../assets/ferrari.png"; 
import Background from "../../assets/home/blurred-background.svg";

const RecruitmentBanner = () => {
  return (
    <RecruitmentSec>
      <div className="content">
        <div className="header">
          <div className="recruitment">
            RECRUITMENT <img src={OrangeStar} alt="Orange Star" />
          </div>
          <div className="redefined">
            REDEFINED
          </div>
        </div>
        <div className="separator-line"></div> {/* Separator Line */}
        <div className="celebrate-text">
          <div className="line"><span className="red">CELEBRATE</span> CAREER EXCELLENCE</div>
          <div className="line">WHERE PASSION DRIVES PRECISION</div>
          <div className="line">AND <span className="red">INNOVATION</span> ON RACING'S <span className="red">GRAND STAGE</span></div>
        </div>
        <div className="shift-gear-section">
          <div className="shift-gear">
            SHIFT INTO
            <span className="hollow-text"> HIGH GEAR</span>
          </div>
          <div className="subtext">
            Start Your Journey With Our Elite Formula One Recruitment Program.
          </div>
          <Link to="/recruitments" className="join-btn">
            <span>Join Us</span>
          </Link>
        </div>
        <div className="features">
          <div className="feature-row">
            <div className="feature">
              <img src={OrangeStar} alt="Orange Star" />
              <span>Engineering Excellence.</span>
            </div>
            <div className="feature">
              <img src={OrangeStar} alt="Orange Star" />
              <span>Engineering Supremacy.</span>
            </div>
            <div className="feature">
              <img src={OrangeStar} alt="Orange Star" />
              <span>Technological Mastery.</span>
            </div>
          </div>
          <div className="feature-row">
            <div className="feature">
              <img src={OrangeStar} alt="Orange Star" />
              <span>Technical Presentations.</span>
            </div>
            <div className="feature">
              <img src={OrangeStar} alt="Orange Star" />
              <span>Technical Demonstrations.</span>
            </div>
            <div className="feature">
              <img src={OrangeStar} alt="Orange Star" />
              <span> &nbsp; Technical Discourses.</span>
            </div>
          </div>
          <div className="ferrari-image">
            <img src={Ferrari} alt="Ferrari" />
          </div>
        </div>
      </div>
    </RecruitmentSec>
  );
};

export default RecruitmentBanner;