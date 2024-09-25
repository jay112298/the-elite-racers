import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import blog11 from "../../assets/blogs/blog11.webp"; 
import {
  AchievementsContainer,
  Title,
  AchievementGrid,
  AchievementCard,
  AchievementYear,
  AchievementDetails,
  AchievementTitle,
  AchievementInfo,
  AnimatedBackground,
  EventImage,
  ImageModal,
  ModalContent,
  CloseButton,
  Button
} from './AchievementsPage.st';

const AchievementsPage = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    { id: 1, year: 2023, title: 'AIRC Championship', achievement: 'Fastest Technical Inspection', location: 'Nagpur, Maharashtra' ,image: blog11},
    { id: 2, year: 2023, title: 'AIRC Championship', achievement: 'Safest Chassis', location: 'Nagpur, Maharashtra' ,image: blog11},
    { id: 3, year: 2023, title: 'Global Youth Fest Car Expo', achievement: '1st position', location: 'Nagpur, Maharashtra' ,image: blog11},
    { id: 4, year: 2023, title: 'Global Youth Fest Car Expo', achievement: '3rd position', location: 'Nagpur, Maharashtra' ,image: blog11},
    { id: 5, year: 2023, title: 'Edgeline Championship', achievement: 'Cost-Winner', location: 'Nagpur, Maharashtra' ,image: blog11},
    { id: 6, year: 2023, title: 'Edgeline Championship', achievement: 'Best In-house Built', location: 'Nagpur, Maharashtra',image: blog11 },
    { id: 7, year: 2023, title: 'RACY FKRC Championship', achievement: 'Best Aesthetics Award', location: 'Nagpur, Maharashtra' ,image: blog11},
    { id: 8, year: 2022, title: 'SUPRA SAEINDIA FSAE', achievement: 'Rank 35th', location: 'Nagpur, Maharashtra' },
    { id: 9, year: 2019, title: 'SUPRA SAEINDIA FSAE', achievement: 'Rank 40th', location: 'Nagpur, Maharashtra' },
    { id: 10, year: 2019, title: 'Student Kart Design Challenge', achievement: '12th position', location: 'Hyderabad, Telangana' },
    { id: 11, year: 2019, title: 'Saur Urja Vehicle Challenge', achievement: 'Team Leader Award, Team Spirit Award, Guru Dronacharya Award, Best Creative Product Award', location: 'Coimbatore, Tamil Nadu' },
    { id: 12, year: 2019, title: 'Indian Karting Championship', achievement: '35th position from a total of 137 teams', location: 'Kolhapur, Maharashtra' },
    { id: 13, year: 2018, title: 'National Go-Karting Racing Championship', achievement: '1st position in virtual rounds, 27th overall position from 60+ teams', location: 'Bhopal, Madhya Pradesh' },
    { id: 14, year: 2018, title: 'Bharat Formula Karting Championship', achievement: '15th position from a total of 65 teams', location: 'Nagpur, Maharashtra' },
    { id: 15, year: 2018, title: 'SUPRA SAEINDIA FSAE', achievement: 'Ranked', location: 'Nagpur, Maharashtra' },
    { id: 16, year: 2018, title: 'Saurya Urja Vehicle Championship', achievement: 'Best Future Award, Best Team Leader Award, Best Team Spirit Award', location: 'Gwalior, Madhya Pradesh' },
    { id: 17, year: 2017, title: 'Electric Solar Vehicle Championship', achievement: 'Best Team Work Appreciation Award, 21st overall position out of 198 teams', location: 'Bhimavaram, Andhra Pradesh' },
    { id: 18, year: 2018, title: 'International Series of Karting', achievement: '4th overall position out of 52 teams, Secured 5th rank in final round', location: 'Vishakhapatnam, Andhra Pradesh' },
    { id: 19, year: 2018, title: 'Auto India Racing Championship', achievement: '8th overall position out of 52 teams', location: 'Pune, Maharashtra' },
    { id: 20, year: 2018, title: 'Indian Karting Championship', achievement: '13th overall position out of 92 teams', location: 'Nagpur, Maharashtra' },
    { id: 21, year: 2017, title: 'Student Kart Design Challenge', achievement: 'Best Co-Ordination Team Award & 6th position out of 30 teams', location: 'Nagpur, Maharashtra' },
    { id: 22, year: 2017, title: 'SUPRA SAEINDIA FSAE', achievement: 'Ranked', location: 'Nagpur, Maharashtra' },
    { id: 23, year: 2015, title: 'Nirman Go-Kart Championship', achievement: '9th position out of 40 teams', location: 'Pune, Maharashtra' },
    { id: 24, year: 2015, title: 'Student Karting Championship', achievement: '17th rank out of 43 teams', location: 'Hyderabad, Telangana' },
  ];

  const handleMouseEnter = (achievementId) => {
    setHoveredAchievement(achievementId);
  };

  const handleMouseLeave = () => {
    setHoveredAchievement(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <AchievementsContainer>
        <Title>Our Achievements</Title>
        <AnimatedBackground />
        <AchievementGrid>
          {achievements.map(achievement => (
            <AchievementCard 
              key={achievement.id}
              onMouseEnter={() => handleMouseEnter(achievement.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleImageClick(achievement.image)}
            >
              <AchievementYear>{achievement.year}</AchievementYear>
              <AchievementDetails>
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementInfo>{achievement.achievement}</AchievementInfo>
                <AchievementInfo>{achievement.location}</AchievementInfo>
              </AchievementDetails>
              {hoveredAchievement === achievement.id && achievement.image && (
                <EventImage style={{backgroundImage: `url(${achievement.image})`}} />
              )}
            </AchievementCard>
          ))}
          
        </AchievementGrid>
        
      </AchievementsContainer>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button
          onClick={() => window.open("https://drive.google.com/file/d/1bp4H5J-ceW2Ll27SMFAT_yn8U3CJ_UsZ/view?usp=sharing", "_blank")}
        >
          Support Our Team
        </Button>
      </div>
      {selectedImage && (
        <ImageModal onClick={closeModal}>
          <ModalContent>
            <img src={selectedImage} alt="Achievement" />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
          </ModalContent>
        </ImageModal>
      )}
      <Footer />
    </>
  );
};


export default AchievementsPage;
