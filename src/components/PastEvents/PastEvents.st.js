import styled from "styled-components";

export const ShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  font-family: "Inter", sans-serif;
`;

export const Title = styled.h1`
  font-family: "Rugen", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
  text-transform: uppercase;

  span {
    color: #d93100;
  }
`;

export const YearTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const YearTab = styled.button`
  font-family: "Rugen", sans-serif;
  background: ${(props) => (props.active ? "#D93100" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-size: 1.2rem;
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const EventCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img[alt="Orange Star"] {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const OrangeStripe = styled.div`
  width: 12px;
  height: 53px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d93100;
  border-radius: 30px 30px 180px 30px;
`;

export const EventDate = styled.div`
  font-family: "Rugen", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  padding: 1rem 1rem 0.5rem 2rem;
`;

export const EventDay = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #000000;
  padding: 0 1rem 0.5rem 2rem;
`;

export const EventMonth = styled.div`
  font-size: 1rem;
  color: #808080;
  padding: 0 1rem 1rem 2rem;
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

export const EventDetails = styled.div`
  padding: 1rem;
`;

export const EventTitle = styled.h3`
  font-family: "Rugen", sans-serif;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #d93100;
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

export const EventLocation = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// export const EventImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-size: cover;
//   background-position: center;
//   opacity: 0.8;
//   transition: opacity 0.3s ease;
// `;

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
