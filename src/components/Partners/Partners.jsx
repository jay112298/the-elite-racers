import React from "react";
import {
  PartnersContainer,
  PartnersGrid,
  PartnerCard,
  MessageContainer,
  Button,
  Title,
  Logo,
  PartnerName,
} from "./Partners.st";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "INEOS", logo: "https://picsum.photos/seed/INEOS/150/150" },
    { name: "Petronas", logo: "https://picsum.photos/seed/Petronas/150/150" },
    {
      name: "TeamViewer",
      logo: "https://picsum.photos/seed/TeamViewer/150/150",
    },
    {
      name: "IWC Schaffhausen",
      logo: "https://picsum.photos/seed/IWC/150/150",
    },
    { name: "AMD", logo: "https://picsum.photos/seed/AMD/150/150" },
    { name: "PUMA", logo: "https://picsum.photos/seed/PUMA/150/150" },
    { name: "Epson", logo: "https://picsum.photos/seed/Epson/150/150" },
    { name: "Bose", logo: "https://picsum.photos/seed/Bose/150/150" },
    {
      name: "CrowdStrike",
      logo: "https://picsum.photos/seed/CrowdStrike/150/150",
    },
  ];

  return (
    <>
      <Navbar />
      <PartnersContainer>
        {/* <Title
          as={motion.h1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Partners
        </Title> */}
        {/* <PartnersGrid>
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
            >
              <Logo
                src={partner.logo}
                alt={partner.name}
              />
              <PartnerName>{partner.name}</PartnerName>
            </PartnerCard>
          ))}
        </PartnersGrid> */}

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
        <br></br>

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
