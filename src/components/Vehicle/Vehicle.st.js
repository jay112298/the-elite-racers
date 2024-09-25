import styled from "styled-components";

export const VehiclesContainer = styled.main`
  padding: 2rem 1rem;
  font-family: "Inter", sans-serif;

  h1 {
    font-family: "Rugen", sans-serif;
    color: #FF3A00;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const VehiclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const VehicleCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    color: #2E2E2E;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0 1rem 0;
  color: #2E2E2E;
`;

export const SectionImage = styled.img`
  display: block;
  margin: 0 auto 2rem auto;
  width: 300px;
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

  img {
    max-width: 90vw;
    max-height: 80vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ position }) => position}: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: black;
  cursor: pointer;
  transform: translateY(-50%);
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