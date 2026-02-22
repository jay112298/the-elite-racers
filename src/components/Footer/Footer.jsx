import React from "react";
import { FooterSec } from "./Footer.st";
import footerLogo from "../../assets/elite-footer.svg";
import { BsFacebook, BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";
import Xcorp from "../../assets/xcorp.svg";
import { useNavigate } from "react-router-dom";
import {
  ContactContainer,
  ContactInfo,
  ContactCard,
  MapContainer,
} from "./ContactList.st";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleRecruitmentClick = () => {
    navigate("/recruitments");
  };

  return (
      <FooterSec>
        <div className="content">
          <div className="top">
            <div className="identity">
              <img src={footerLogo} alt="Logo" />
              <div className="name">
                The Elite <span>Racers</span>
              </div>
            </div>
            <div className="link">
              <span>visit: </span>
              <div
                  onClick={() => (window.location.href = "/")}
                  style={{ cursor: "pointer" }}
              >
                www.theeliteracers.com
              </div>
            </div>
          </div>

          <ContactContainer>
            <h1>Contact Us</h1>
            <ContactInfo>
              <ContactCard>
                <h2>Email</h2>
                <p>theeliteracerssbjain@gmail.com</p>
              </ContactCard>
              <ContactCard>
                <h2>Phone</h2>
                <p>+91 91468 34079 <br />(Ninad Manekar)</p>
              </ContactCard>
              <ContactCard>
                <h2>Address</h2>
                <p>WORKSHOP - S B Jain College, Nagpur, Maharashtra, India</p>
              </ContactCard>
            </ContactInfo>
            <MapContainer>
              <iframe
                  src="https://maps.google.com/maps?q=S%20B%20Jain%20Institute%20of%20Technology,%20Management%20and%20Research&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </ContactContainer>

          <div className="bottom">
            <div className="nav">
              <div className="left">
                <div className="footnav-title">Navigation</div>
                <div className="footnav-content">
                  <ul>
                    {["/", "/about", "/team", "/raceEvents", "/vehicle", "/contact", "/recruitments", "/partners"].map((path, index) => (
                        <li
                            key={index}
                            onClick={() => { handleNavigation(path); window.scrollTo(0, 0); }}
                            style={{ cursor: "pointer" }}
                        >
                          {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="footnav-title">Information</div>
                <div className="footnav-content">
                  <ul>
                    {[
                      { name: "Contact", path: "/contact" },
                      { name: "Gallery", path: "/gallery" },
                      { name: "Terms of use", path: "/termsofuse" },
                      { name: "Policies", path: "/privacy-policy" }
                    ].map((item, index) => (
                        <li
                            key={index}
                            onClick={() => { handleNavigation(item.path); window.scrollTo(0, 0); }}
                            style={{ cursor: "pointer" }}
                        >
                          {item.name}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="vision">
              <div className="footnav-title">Our Vision</div>
              <div className="footnav-content">
                <div className="para">
                  With a fierce ambition to change the game, The Elite Racers Formula SAE team of SBJITMR is bringing new energy to F1 in its quest for national level titles. Based in Nagpur, the team's talented squad includes skilled drivers as well as engineers in order to build skilled undergrads for motorsports.
                </div>
                <div className="slogan">
                  <div className="shape"></div>
                  <div className="text">
                    Want to <span>join</span> our league?
                  </div>
                </div>
                <div className="cta-buttons">
                  <div
                      className="cta"
                      onClick={() => { handleRecruitmentClick(); window.scrollTo(0, 0); }}
                      style={{ cursor: "pointer" }}
                  >
                    See Recruitments
                  </div>
                  <div
                      className="cta"
                      onClick={() => { navigate("/merchandise"); window.scrollTo(0, 0); }}
                      style={{ cursor: "pointer" }}
                  >
                    See Merchandise
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/theeliteracers/" className="icon" target="_blank" rel="noreferrer"><BsFacebook size="2rem" /></a>
            <a href="https://www.linkedin.com/company/the-elite-racers/" className="icon" target="_blank" rel="noreferrer"><BsLinkedin size="2rem" /></a>
            <a href="https://www.youtube.com/@The_elite_racers_sb_" className="icon" target="_blank" rel="noreferrer"><BsYoutube size="2rem" /></a>
            <a href="https://www.instagram.com/the_elite_racers/" className="icon" target="_blank" rel="noreferrer"><BsInstagram size="2rem" /></a>
            <a href="https://x.com/TheEliteRacers" className="icon" target="_blank" rel="noreferrer"><img src={Xcorp} alt="X" /></a>
          </div>
        </div>
      </FooterSec>
  );
};

export default Footer;