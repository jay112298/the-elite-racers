import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  PartnersContainer,
  MessageContainer,
  Button,
  Title,
} from "./Partners.st";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SolidWorks from "./SolidWorks.png";
import MathWorks from "./MathWorks.png";
import Ansys from "./Ansys.png";
import FfcGym from "./FfcGym.png";
import Bangal from "./bangal.png";
import Rehman from "./Rehman.png";
import Shende from "./Shende.png";
import Green from "./Green.png";

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 4rem 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 0.8) 80%,
    rgba(255, 255, 255, 0.95) 100%
  );
  margin: 3rem 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.95),
      transparent
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.95),
      transparent
    );
  }
`;

const MarqueeTrack = styled(motion.div)`
  display: flex;
  gap: 3rem;
  padding: 1rem;
`;

const PartnerItem = styled(motion.div)`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-5px);
  }
`;

const LogoContainer = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  background: #f8f9fa;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
  transition: transform 0.3s ease;

  ${PartnerItem}:hover & {
    transform: scale(1.05);
  }
`;

const PartnerName = styled.p`
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5rem;
  font-family: "Inter", sans-serif;
`;

const Partners = () => {
  const partners = [
    { name: "Solid Works", logo: SolidWorks },
    { name: "MathWorks", logo: MathWorks },
    { name: "Ansys", logo: Ansys },
    { name: "FFC Gym", logo: FfcGym },
    { name: "Bangal Plywood", logo: Bangal },
    { name: "Rehman Battery House", logo: Rehman },
    { name: "Shende Enterprises", logo: Shende },
    { name: "Green Growers", logo: Green },
  ];

  const doubledPartners = [...partners, ...partners];

  return (
    <>
      <Navbar />
      <PartnersContainer>
        <MessageContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Title>A Message to Our Sponsors</Title>
          <p>
            The Elite Racers Formula SAE team is committed to fostering a
            mutually beneficial partnership between students and industry
            professionals. Your support is instrumental in enabling us to
            compete annually in FSAE and achieve our goals. By sponsoring our
            team, you're not only contributing to our success but also gaining
            valuable exposure to a talented pool of engineering students. Your
            logo or name will be prominently displayed on our car, team
            clothing, and at various events, ensuring maximum visibility for
            your brand. We offer exclusive sponsorship opportunities and a
            variety of on-ground and digital events to promote your business.
            Join us on our journey as we strive to represent India at the
            highest level of collegiate engineering competition.
          </p>
          <Button
            as={motion.button}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/10QZwJrwmOl0nitdUI33Kk6eghV0vqZCF/view?usp=sharing",
                "_blank"
              )
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Sponsorship Proposal
          </Button>
        </MessageContainer>

        <ScrollContainer>
          <Title
            as={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Partners
          </Title>
          <MarqueeTrack
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {doubledPartners.map((partner, index) => (
              <PartnerItem key={index}>
                <LogoContainer>
                  <LogoImage
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                  />
                </LogoContainer>
                <PartnerName>{partner.name}</PartnerName>
              </PartnerItem>
            ))}
          </MarqueeTrack>
        </ScrollContainer>

        <MessageContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Title>CONTRIBUTE TO OUR TEAM</Title>
          <p>
            Your contribution can make a significant impact on our racing team's
            success. By supporting the Elite Racers Formula SAE team through
            crowdfunding, you're investing in the future of engineering and
            motorsports. Every contribution, big or small, helps us push the
            boundaries of innovation and compete at the highest level. Your
            support enables us to acquire cutting-edge materials, enhance our
            design capabilities, and provide invaluable hands-on experience to
            our team members. Join us in our pursuit of excellence and help
            shape the next generation of engineering leaders.
          </p>
          <Button
            as={motion.button}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1bp4H5J-ceW2Ll27SMFAT_yn8U3CJ_UsZ/view?usp=sharing",
                "_blank"
              )
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUPPORT OUR TEAM
          </Button>
        </MessageContainer>
      </PartnersContainer>
      <Footer />
    </>
  );
};

export default Partners;
