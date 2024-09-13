import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.cardBackgroundColor || '#FFFFFF'};
  border: 1px solid ${props => props.theme.borderColor || '#333333'};
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Name = styled.h3`
  color: ${props => props.theme.primaryColor || '#FF7F00'};
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const Description = styled.p`
  color: ${props => props.theme.secondaryColor || '#333333'};
  font-size: 1rem;
  margin-bottom: 10px;
`;

