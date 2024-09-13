import styled from 'styled-components';

export const ContactContainer = styled.main`
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

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ContactCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;

  h2 {
    color: #FF3A00;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4A4A4A;
  }
`;

export const MapContainer = styled.div`
  max-width: 600px;
  height: 300px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;