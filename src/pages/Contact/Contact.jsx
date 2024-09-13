import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  ContactContainer,
  ContactInfo,
  ContactCard,
  MapContainer,
} from "./Contact.st";

const Contact = () => {
  return (
    <>
      <Navbar />
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
            width="100% "
            height="100% "
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
