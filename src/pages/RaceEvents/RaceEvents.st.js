import styled from 'styled-components';

export const RacesContainer = styled.main`
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;

  h1 {
      font-family: 'Rugen', sans-serif;
    color: #FF3A00;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const RacesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const RaceCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #FF3A00;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4A4A4A;
    margin-bottom: 0.5rem;
  }
`;