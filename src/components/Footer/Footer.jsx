import React from "react";
import { FooterSec } from "./Footer.st";
import footerLogo from "../../assets/elite-footer.svg"

const Footer = () => {
  return (
    <FooterSec>
      <div className="blank"></div>
      <div className="content">
        <div className="top">
          <div className="identity"><img src={footerLogo} alt="Logo" /><div className="name">The Elite <span>Racers</span></div></div>
          <div className="link"><span>visit: </span>www.theeliteracers.com</div>
        </div>
        <div className="bottom">
          <div className="nav">
            <div className="left">
              <div className="footnav-title">Navigation</div>
              <div className="footnav-content">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Team</li>
                  <li>Races</li>
                  <li>Vehicle</li>
                  <li>Contact</li>
                  <li>Recruitments</li>
                  <li>Partners</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="footnav-title">Information</div>
              <div className="footnav-content">
                <ul>
                  <li>Contact</li>
                  <li>Gallery</li>
                  <li>Terms of Use</li>
                  <li>Policies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="vision">
            <div className="footnav-title">Our Vision</div>
            <div className="footnav-content">
              <div className="para">With a fierance ambition to change the game, The Elite Racers Formula One SAE team of SBJITMR is bringing new energy to F1 in its quest for national level titles. Based in Nagpur, the team's talented driver squad includes skilled drivers as well as assembly technicians inorder to build skilled undergrads for motorsports.</div>
              <div className="slogan">
                <div className="shape"></div>
                <div className="text">Want to <span>join</span> our league?</div>
                </div>
              <div className="cta">See Recruitments</div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          
        </div>
      </div>
      <div className="blank"></div>
    </FooterSec>
  );
};

export default Footer;
