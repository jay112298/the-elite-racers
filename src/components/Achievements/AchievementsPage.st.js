import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const floatEffect = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const backgroundEffect = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const AchievementsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Rugen', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-in-out;
  position: relative;
  z-index: 10;
`;

export const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  z-index: 10;
  position: relative;
`;

export const AchievementCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.8s ease-in-out, ${floatEffect} 3s ease-in-out infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const EventImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;
`;

export const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export const AchievementYear = styled.h2`
  font-family: 'Rugen', sans-serif;
  font-size: 1.5rem;
  color: #D93100;
  margin-bottom: 0.5rem;
`;

export const AchievementDetails = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
`;

export const AchievementTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const AchievementInfo = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
  color: #666;
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(270deg, #D93100, #FF6700, #FFB800);
  background-size: 400% 400%;
  z-index: 1;
  animation: ${backgroundEffect} 10s ease infinite;
  opacity: 0.8;
`;

export const Button = styled.button`
  background-color: #FF3A00;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: #E13300;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
`;