import React from 'react';
import { BlogPost, Header, Content, Image, Paragraph, SubHeader } from './Blog1.st';
import EliteLogo from "../../assets/elite-logo.svg";
import blog11 from "../../assets/blogs/blog11.webp";
import blog12 from "../../assets/blogs/blog12.jpg";
import blog13 from "../../assets/blogs/blog13.jpg";
import blog14 from "../../assets/blogs/blog14.avif";

const Blog1 = () => {
  return (
    <BlogPost>
      <Header>
        <h1>Tech Explained: F1 Halo</h1>
        <div className="author-info">
          <img src={EliteLogo} alt="TheEliteRacers Logo" className="author-logo" />
          <span>By TheEliteRacers</span>
        </div>
      </Header>
      <Content>
        <img src={blog11} alt="halo" className="halo-image" />
        <Paragraph>
          The Halo device, introduced in Formula 1 in 2018, has become an integral part of the sport's safety measures. This article delves into the technology behind the Halo and its impact on driver safety.
        </Paragraph>
        
        <SubHeader>What is the Halo?</SubHeader>
        <Paragraph>
          The Halo is a protective barrier that sits above the driver's head, designed to prevent large objects and debris from entering the cockpit. Made from titanium, it can withstand the weight of a London double-decker bus (about 12 tonnes).
        </Paragraph>
        
        <img src={blog12} alt="TheEliteRacers Logo" className="author-logo" />
        {/* TODO: Replace with close-up image of Halo device */}
        
        <SubHeader>Development and Implementation</SubHeader>
        <Paragraph>
          The FIA began developing the Halo in 2011, following several high-profile incidents. After extensive testing and refinement, it became mandatory in F1, F2, and F3 from the 2018 season onwards.
        </Paragraph>
        
        <SubHeader>Impact on Car Design</SubHeader>
        <Paragraph>
          The introduction of the Halo required significant changes to F1 car designs. Teams had to reinforce the chassis to support the device and adapt aerodynamics to minimize its impact on performance.
        </Paragraph>
        
        <Image src={blog13} alt="F1 car design with Halo integration" />
        {/* TODO: Replace with image showing F1 car design incorporating Halo */}
        
        <SubHeader>Proven Safety Record</SubHeader>
        <Paragraph>
          Since its introduction, the Halo has proven its worth in several incidents, most notably protecting Charles Leclerc at the 2018 Belgian Grand Prix and Romain Grosjean in his fiery crash at the 2020 Bahrain Grand Prix.
        </Paragraph>

        <Image src={blog14} alt="F1 car design with Halo integration" />
        
        <SubHeader>Future Developments</SubHeader>
        <Paragraph>
          As F1 continues to prioritize safety, ongoing research and development aim to further improve the Halo's design and effectiveness, ensuring it remains at the forefront of motorsport safety technology.
        </Paragraph>
      </Content>
    </BlogPost>
  );
};

export default Blog1;