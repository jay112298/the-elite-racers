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

  const handleWebsiteReload = () => {
    window.location.reload();
  };

  return (
    <>
      <FooterSec>
        <div className="blank"></div>
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
                <p>+91 91468 34079 <br></br>(Ninad Manekar)</p>
              </ContactCard>
              <ContactCard>
                <h2>Address</h2>
                <p>WORKSHOP - S B Jain College, Nagpur, Maharashtra, India</p>
              </ContactCard>
            </ContactInfo>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1764411826514!2d78.97044131744384!3d21.212425399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4e97f699c1eb7%3A0x1bd3ace154eac966!2sWORKSHOP%20-%20S%20B%20Jain%20College!5e0!3m2!1sen!2sus!4v1708971750375!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </ContactContainer>

          {/* Restored Spacing and Alignment for Navigation and Vision Sections */}
          <div className="bottom">
            <div className="nav">
              <div className="left">
                <div className="footnav-title">Navigation</div>
                <div className="footnav-content">
                  <ul>
                    <li
                      onClick={() => {
                        handleNavigation("/");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/about");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      About
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/team");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Team
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/raceEvents");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Races
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/vehicle");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Vehicle
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/contact");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Contact
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/recruitments");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Recruitments
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/partners");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Partners
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="footnav-title">Information</div>
                <div className="footnav-content">
                  <ul>
                    <li
                      onClick={() => {
                        handleNavigation("/contact");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Contact
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/gallery");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Gallery
                    </li>
                    {/* <li
                      onClick={() => {
                        handleNavigation("/termsofuse");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Terms of use
                    </li> */}
                    <li
                      onClick={() => {
                        handleNavigation("/privacy-policy");
                        window.scrollTo(0, 0);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Policies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="vision">
              <div className="footnav-title">Our Vision</div>
              <div className="footnav-content">
                <div className="para">
                  With a fierce ambition to change the game, The Elite Racers
                  Formula SAE team of SBJITMR is bringing new energy to F1 in
                  its quest for national level titles. Based in Nagpur, the
                  team's talented squad includes skilled drivers as well as
                  engineers in order to build skilled undergrads for
                  motorsports.
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
                    onClick={() => {
                      handleRecruitmentClick();
                      window.scrollTo(0, 0);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    See Recruitments
                  </div>
                  <div
                    className="cta"
                    onClick={() => {
                      navigate("/merchandise");
                      window.scrollTo(0, 0);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    See Merchandise
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/theeliteracers/"
              className="icon"
              target="_blank"
            >
              <BsFacebook size="2rem" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-elite-racers/"
              className="icon"
              target="_blank"
            >
              <BsLinkedin size="2rem" />
            </a>
            <a
              href="https://www.youtube.com/@The_elite_racers_sb_"
              className="icon"
              target="_blank"
            >
              <BsYoutube size="2rem" />
            </a>
            <a
              href="https://www.instagram.com/the_elite_racers/"
              className="icon"
              target="_blank"
            >
              <BsInstagram size="2rem" />
            </a>
            <a
              href="https://x.com/TheEliteRacers"
              className="icon"
              target="_blank"
            >
              <img src={Xcorp} alt="" />
            </a>
          </div>
        </div>
        <div className="blank"></div>
      </FooterSec>
    </>
  );
};

export default Footer;
