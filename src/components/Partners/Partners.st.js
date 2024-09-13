import styled from 'styled-components';

export const PartnersContainer = styled.main`
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const Title = styled.h1`
  font-family: 'Rugen', sans-serif;
  color: #FF3A00;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 3rem;
  letter-spacing: 1px;
`;

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 4rem; 
`;

export const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${PartnerCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PartnerName = styled.p`
  color: #2E2E2E;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  margin-top: 0.5rem;
  transition: color 0.3s ease;

  ${PartnerCard}:hover & {
    color: #FF3A00;
  }
`;

export const MessageContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 2rem;
  max-width: 1000px; 
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

  p {
    color: #4A4A4A;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem; 
    text-align: center;
    font-family: 'Inter', sans-serif;
  }
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