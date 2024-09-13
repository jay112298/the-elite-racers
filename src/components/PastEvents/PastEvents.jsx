import React, { useState } from 'react';
import OrangeStar from "../../assets/home/orange-star.svg";
import Location from "../../assets/home/location.svg";
import blog11 from "../../assets/blogs/blog11.webp";

import {
  ShowcaseContainer,
  Title,
  YearTabs,
  YearTab,
  EventGrid,
  EventCard,
  EventImage,
  EventDetails,
  EventDate,
  EventDay,
  EventTitle,
  EventLocation,
  OrangeStripe,
  IconWrapper,
  ImageModal,
  ModalContent,
  CloseButton
} from './PastEvents.st';

const PastEvents = () => {
  const [activeYear, setActiveYear] = useState(2023);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const years = [2023, 2022, 2019, 2018, 2017, 2015];

  // List of events with titles, achievements, and locations
  const allEvents = [
    { id: 1, year: 2023, title: 'AIRC Championship', achievement: 'Fastest Technical Inspection', location: 'Nagpur, Maharashtra' , image: blog11},
    { id: 2, year: 2023, title: 'AIRC Championship', achievement: 'Safest Chassis', location: 'Nagpur, Maharashtra', image: blog11 },
    { id: 3, year: 2023, title: 'Global Youth Fest Car Expo', achievement: '1st position', location: 'Nagpur, Maharashtra' , image: blog11},
    { id: 4, year: 2023, title: 'Global Youth Fest Car Expo', achievement: '3rd position', location: 'Nagpur, Maharashtra' , image: blog11},
    { id: 5, year: 2023, title: 'Edgeline Championship', achievement: 'Cost-Winner', location: 'Nagpur, Maharashtra' , image: blog11},
    { id: 6, year: 2023, title: 'Edgeline Championship', achievement: 'Best In-house Built', location: 'Nagpur, Maharashtra', image: blog11 },
    { id: 7, year: 2023, title: 'RACY FKRC Championship', achievement: 'Best Aesthetics Award', location: 'Nagpur, Maharashtra', image: blog11 },
    { id: 8, year: 2022, title: 'SUPRA SAEINDIA FSAE', achievement: 'Rank 35th', location: 'Nagpur, Maharashtra' },
    { id: 9, year: 2019, title: 'SUPRA SAEINDIA FSAE', achievement: 'Rank 40th', location: 'Nagpur, Maharashtra' },
    { id: 10, year: 2019, title: 'Student Kart Design Challenge', achievement: '12th position', location: 'Hyderabad, Telangana' },
    { id: 11, year: 2019, title: 'Saur Urja Vehicle Challenge', achievement: 'Team Leader Award, Team Spirit Award, Guru Dronacharya Award, Best Creative Product Award', location: 'Coimbatore, Tamil Nadu' },
    { id: 12, year: 2019, title: 'Indian Karting Championship', achievement: '35th position from 137 teams', location: 'Kolhapur, Maharashtra' },
    { id: 13, year: 2018, title: 'National Go-Karting Racing Championship', achievement: '1st position in virtual rounds, 27th position from 60+ teams', location: 'Bhopal, Madhya Pradesh' },
    { id: 14, year: 2018, title: 'Bharat Formula Karting Championship', achievement: '15th position from 65 teams', location: 'Nagpur, Maharashtra' },
    { id: 15, year: 2018, title: 'SUPRA SAEINDIA FSAE', achievement: 'Ranked', location: 'Nagpur, Maharashtra' },
    { id: 16, year: 2018, title: 'Saurya Urja Vehicle Championship', achievement: 'Best Future Award,Team Leader Award, Team Spirit Award', location: 'Gwalior, Madhya Pradesh' },
    { id: 17, year: 2018, title: 'International Series of Karting', achievement: '4th overall position from 52 teams, 5th rank in final round', location: 'Visakhapatnam, Andhra Pradesh' },
    { id: 18, year: 2018, title: 'Auto India Racing Championship', achievement: '8th overall position from 52 teams', location: 'Pune, Maharashtra' },
    { id: 19, year: 2018, title: 'Indian Karting Championship', achievement: '13th overall position from 92 teams', location: 'Nagpur, Maharashtra' },
    { id: 20, year: 2017, title: 'Student Kart Design Challenge', achievement: 'Best Co-ordination Team Award & 6th position from 30 teams', location: 'Nagpur, Maharashtra' },
    { id: 21, year: 2017, title: 'SUPRA SAEINDIA FSAE', achievement: 'Ranked', location: 'Nagpur, Maharashtra' },
    { id: 22, year: 2017, title: 'Electric Solar Vehicle Championship', achievement: 'Best Team Work Appreciation Award, 21st overall position from 198 teams', location: 'Bhimavaram, Andhra Pradesh' },
    { id: 23, year: 2015, title: 'Nirman Go-Kart Championship', achievement: '9th position from 40 teams', location: 'Pune, Maharashtra' },
    { id: 24, year: 2015, title: 'Student Karting Championship', achievement: '17th rank from 43 teams', location: 'Hyderabad, Telangana' },
  ];
  

  // Filter events by the active year
  const filteredEvents = allEvents.filter(event => event.year === activeYear);

  const handleMouseEnter = (eventId) => {
    setHoveredEvent(eventId);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <ShowcaseContainer>
      <Title>PAST <span>SESSIONS</span></Title>
      <YearTabs>
        {years.map(year => (
          <YearTab 
            key={year} 
            active={year === activeYear}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </YearTab>
        ))}
      </YearTabs>
      <EventGrid>
        {filteredEvents.map(event => (
          <EventCard 
            key={event.id}
            onMouseEnter={() => handleMouseEnter(event.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleImageClick(event.image)}
          >
            <OrangeStripe />
            <EventDate>
              <img src={OrangeStar} alt="Orange Star" />
            </EventDate>
            <EventDay>{event.achievement}</EventDay>
            <EventDetails>
              <EventTitle>{event.title}</EventTitle>
              <EventLocation>
                <IconWrapper>
                  <img src={Location} alt="Location" />
                </IconWrapper>
                {event.location || 'Nagpur, Maharashtra'}
              </EventLocation>
            </EventDetails>
            {hoveredEvent === event.id && (
              <EventImage style={{backgroundImage: `url(${event.image})`}} />
            )}
          </EventCard>
        ))}
      </EventGrid>
      {selectedImage && (
        <ImageModal onClick={closeModal}>
          <ModalContent>
            <img src={selectedImage} alt="Event" />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
          </ModalContent>
        </ImageModal>
      )}
    </ShowcaseContainer>
  );
};

export default PastEvents;
