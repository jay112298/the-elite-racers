import styled from 'styled-components';

export const AboutContainer = styled.main`
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-family: 'Rugen', sans-serif;
    color: #FF3A00;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const AboutSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: #2E2E2E;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: #4A4A4A;
    font-size: 1rem;
    line-height: 1.9;
  }
`;