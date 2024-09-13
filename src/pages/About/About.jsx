import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AboutContainer, AboutContent, AboutSection } from "./About.st";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <AboutContent>
          <h1>About Formula SAE</h1>
          <AboutSection>
            <h2>What is Formula SAE?</h2>
            <p>Formula SAE (FSAE) is a collegiate design competition where students design, build, and race small formula-style cars. Sanctioned by the Society of Automotive Engineers (SAE), it tests students' knowledge, creativity, and problem-solving skills through real-world engineering challenges.</p>
            <p>Since its inception in 1981, FSAE has grown into a globally recognized platform for developing the next generation of engineers. Students not only design and fabricate these cars but also present and defend their designs in front of industry professionals.</p>
          </AboutSection>
          <AboutSection>
            <h2>Our Team</h2>
            <p>We are <strong>The Elite Racers FSAE Team</strong>, a passionate group of students dedicated to excelling in automotive design, teamwork, and innovation. Our focus goes beyond rankings as we aim to develop well-rounded engineers who excel both in academics and personal growth.</p>
            <p>Each year, our team changes, but our goal remains the same: to learn, collaborate, and push the boundaries of what we can achieve through hands-on projects and real-world problem-solving.</p>
          </AboutSection>
          <AboutSection>
            <h2>Our Mission</h2>
            <p>Our mission is to bridge the gap between academia and industry by providing students with opportunities to develop leadership, design, and technical skills. Through Formula SAE, we aim to create a platform for students to showcase their abilities, grow into future leaders, and compete at a global level with top engineering schools.</p>
          </AboutSection>
        </AboutContent>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
