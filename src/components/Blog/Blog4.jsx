import React from 'react';
import { BlogPost, Header, Content, Image, Paragraph, SubHeader, List, ListItem } from './Blog4.st';
import EliteLogo from "../../assets/elite-logo.svg";
import blog41 from "../../assets/blogs/blog41.avif";
import blog42 from "../../assets/blogs/blog42.avif";
import blog43 from "../../assets/blogs/blog43.avif";
import blog44 from "../../assets/blogs/blog44.jpg";

const Blog4 = () => {
  return (
    <BlogPost>
      <Header>
        <h1>The Beginner's Guide to F1 Tyres</h1>
        <div className="author-info">
          <img src={EliteLogo} alt="TheEliteRacers Logo" className="author-logo" />
          <span>By TheEliteRacers</span>
        </div>
      </Header>
      <Content>
        <Image src={blog41} alt="F1 Tyres" />
        <Paragraph>
          In Formula 1, tyres play a crucial role in a car's performance and can make the difference between victory and defeat. This guide will help you understand the basics of F1 tyres and their impact on racing strategy.
        </Paragraph>
        
        <SubHeader>Tyre Compounds</SubHeader>
        <Paragraph>
          Pirelli, the official tyre supplier for F1, provides three different tyre compounds for each race weekend:
        </Paragraph>
        <List>
          <ListItem>Soft (Red): Fastest but least durable</ListItem>
          <ListItem>Medium (Yellow): Balanced performance and durability</ListItem>
          <ListItem>Hard (White): Most durable but least grip</ListItem>
        </List>
        
        <Image src={blog42} alt="F1 Tyre Compounds" />
        
        <SubHeader>Tyre Structure</SubHeader>
        <Paragraph>
          F1 tyres are complex structures designed to withstand extreme forces. Key components include:
        </Paragraph>
        <List>
          <ListItem>Tread: The outer rubber layer that contacts the track</ListItem>
          <ListItem>Carcass: The main structure of the tyre</ListItem>
          <ListItem>Sidewall: Protects the tyre and displays markings</ListItem>
          <ListItem>Bead: Ensures the tyre stays fixed to the wheel rim</ListItem>
        </List>
        
        <SubHeader>Tyre Management in Racing</SubHeader>
        <Paragraph>
          Drivers must carefully manage their tyres throughout a race. This involves:
        </Paragraph>
        <List>
          <ListItem>Controlling wheel spin to prevent excessive wear</ListItem>
          <ListItem>Managing tyre temperature for optimal grip</ListItem>
          <ListItem>Adapting driving style to different compounds</ListItem>
          <ListItem>Communicating tyre condition to the team</ListItem>
        </List>
        
        <Image src={blog43} alt="F1 Driver Managing Tyres" />
        
        <SubHeader>Tyre Strategies</SubHeader>
        <Paragraph>
          Teams employ various tyre strategies to gain an advantage:
        </Paragraph>
        <List>
          <ListItem>One-stop strategy: Minimizing pit stops but requiring more tyre management</ListItem>
          <ListItem>Two-stop strategy: Allowing for more aggressive driving but losing time in the pits</ListItem>
          <ListItem>Undercut: Pitting earlier than competitors to gain track position</ListItem>
          <ListItem>Overcut: Staying out longer on older tyres to gain an advantage</ListItem>
        </List>
        
        <SubHeader>Tyre Regulations</SubHeader>
        <Paragraph>
          F1 has specific regulations regarding tyre usage:
        </Paragraph>
        <List>
          <ListItem>Teams must use at least two different compounds during a dry race</ListItem>
          <ListItem>Drivers must start the race on the tyres they used in Q2 (if they reached Q3)</ListItem>
          <ListItem>A set number of each compound is allocated for each race weekend</ListItem>
        </List>

        <Image src={blog44} alt="F1 tyres" />
        
        <SubHeader>Impact of Track Conditions</SubHeader>
        <Paragraph>
          Tyre performance is greatly affected by track conditions:
        </Paragraph>
        <List>
          <ListItem>Temperature: Higher temperatures generally increase wear</ListItem>
          <ListItem>Surface: Smooth vs. abrasive affects grip and wear</ListItem>
          <ListItem>Weather: Wet conditions require special wet or intermediate tyres</ListItem>
        </List>
        
        <Paragraph>
          Understanding F1 tyres is key to appreciating the strategic depth of the sport. As you watch races, pay attention to tyre choices and their impact on performance - it's often where races are won and lost!
        </Paragraph>
      </Content>
    </BlogPost>
  );
};

export default Blog4;