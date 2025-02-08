import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #f5f5f5;

  main {
    flex-grow: 1;
    padding: 2rem 1rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  h1 {
    font-family: "Rugen", sans-serif;
    color: #ff3a00;
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Folder = styled.div`
  background: ${(props) => (props.isActive ? "#ffffff" : "#ffffff")};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const FolderTab = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(to right, #ff3a00, #ff6b4a);
  color: white;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
    opacity: 0.9;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const GallerySection = styled.section`
  padding: 1.5rem;
  background: white;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryImage = styled.div`
  aspect-ratio: 1;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  z-index: 1010;
  transition: transform 0.2s ease;
  padding: 8px;
  line-height: 1;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavigationButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  height: 80px;
  width: 80px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  ${(props) => (props.position === "left" ? "left: 20px;" : "right: 20px;")}
`;
