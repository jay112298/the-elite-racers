import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;

  main {
    flex-grow: 1;
    padding: 2rem 1rem;
  }

  h1 {
    font-family: "Rugen", sans-serif;
    color: #FF3A00;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const GalleryImage = styled.div`
  aspect-ratio: 1;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 0.40049rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    max-height: 90vh;
    object-fit: contain;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 1010;
`;

export const NavigationButton = styled.button`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  ${props => props.position === 'left' ? 'left: 0;' : 'right: 0;'}
`;