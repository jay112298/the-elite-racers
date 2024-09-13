import styled from 'styled-components';

export const MerchandiseContainer = styled.div`
  // padding: 0px 20px;
  background-color: ${props => props.theme.backgroundColor || '#F8F8F8'};
  font-family: 'Inter', sans-serif;
  text-align: center;
`;

export const Header = styled.h1`
  color: ${props => props.theme.primaryColor || '#FF3A00'};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Description = styled.p`
  color: ${props => props.theme.secondaryColor || '#333333'};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 50px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
`;

export const ProductCard = styled.div`
  background-color: ${props => props.theme.cardBackgroundColor || '#FFFFFF'};
  border: 2px solid ${props => props.theme.secondaryColor || '#333333'};
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  color: ${props => props.theme.primaryColor || '#FF3A00'};
  font-size: 1.5rem;
  margin: 15px 0 10px 0;
`;

export const ProductDescription = styled.p`
  color: ${props => props.theme.secondaryColor || '#333333'};
  font-size: 1rem;
  margin-bottom: 10px;
`;

/* Modal styles */
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

export const ModalHeading = styled.h2`
  color: ${props => props.theme.primaryColor || '#FF3A00'}; 
  font-size: 2rem;
  margin-bottom: 15px;
`;

export const ModalDescription = styled.p`
  color: ${props => props.theme.secondaryColor || '#333333'}; 
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
`;
