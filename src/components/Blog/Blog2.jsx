import React from 'react';
import { BlogPost, Header, Content, Image, Paragraph, SubHeader, List, ListItem } from './Blog2.st';
import EliteLogo from "../../assets/elite-logo.svg";
import blog21 from "../../assets/blogs/blog21.webp";
import blog22 from "../../assets/blogs/blog22.webp";
import blog23 from "../../assets/blogs/blog23.webp";
import blog25 from "../../assets/blogs/blog25.webp";
import blog26 from "../../assets/blogs/blog26.webp";

const Blog2 = () => {
  return (
    <BlogPost>
      <Header>
        <h1>All You Need to Know About F1 Cars Technology</h1>
        <div className="author-info">
          <img src={EliteLogo} alt="TheEliteRacers Logo" className="author-logo" />
          <span>By TheEliteRacers</span>
        </div>
      </Header>
      <Content>
        <Image src={blog21} alt="Modern F1 Car" />
        <Paragraph>
          Formula 1 cars are the pinnacle of automotive engineering, pushing the boundaries of speed, aerodynamics, and technology. This article delves into the key technological aspects that make F1 cars the fastest circuit-racing cars in the world.
        </Paragraph>
        
        <SubHeader>1. Aerodynamics</SubHeader>
        <Paragraph>
          Aerodynamics play a crucial role in F1 car performance. The intricate designs of front and rear wings, floor, and diffuser work together to:
        </Paragraph>
        <List>
          <ListItem>Generate downforce for better cornering</ListItem>
          <ListItem>Reduce air resistance for higher top speeds</ListItem>
          <ListItem>Channel airflow for cooling vital components</ListItem>
        </List>
        
        <Image src={blog25} alt="F1 Car Aerodynamics Diagram" />
        
        <SubHeader>2. Power Unit</SubHeader>
        <Paragraph>
          Modern F1 cars use hybrid power units consisting of:
        </Paragraph>
        <List>
          <ListItem>1.6-liter V6 turbocharged internal combustion engine</ListItem>
          <ListItem>Motor Generator Unit - Kinetic (MGU-K)</ListItem>
          <ListItem>Motor Generator Unit - Heat (MGU-H)</ListItem>
          <ListItem>Energy Store (ES)</ListItem>
          <ListItem>Control Electronics (CE)</ListItem>
        </List>
        <Paragraph>
          These units can produce over 1000 horsepower while adhering to strict fuel efficiency regulations.
        </Paragraph>

        <Image src={blog22} alt="Power units" />
        
        <SubHeader>3. Tires</SubHeader>
        <Paragraph>
          F1 tires are highly specialized, designed to provide maximum grip under extreme conditions. Teams can choose from different compounds (soft, medium, hard) depending on track conditions and race strategy.
        </Paragraph>
        
        <Image src={blog23} alt="F1 Tire Compounds" />
        
        <SubHeader>4. Brakes</SubHeader>
        <Paragraph>
          F1 cars use carbon fiber brake discs and pads capable of withstanding temperatures up to 1000°C. This allows for incredible stopping power, decelerating from 300 km/h to 0 in just 4 seconds.
        </Paragraph>
        
        <SubHeader>5. Safety Features</SubHeader>
        <Paragraph>
          Safety is paramount in F1. Key safety features include:
        </Paragraph>
        <List>
          <ListItem>The Halo device for cockpit protection</ListItem>
          <ListItem>Crash structures designed to absorb impact energy</ListItem>
          <ListItem>Fire-resistant suits and helmets for drivers</ListItem>
          <ListItem>The HANS (Head and Neck Support) device</ListItem>
        </List>

        <Image src={blog26} alt="Safety" />
        
        <SubHeader>Conclusion</SubHeader>
        <Paragraph>
          F1 cars are a testament to human engineering prowess, constantly evolving with new technologies and innovations. As regulations change and teams push for every advantage, we can expect to see even more exciting developments in the future of Formula 1 technology.
        </Paragraph>
      </Content>
    </BlogPost>
  );
};

export default Blog2;