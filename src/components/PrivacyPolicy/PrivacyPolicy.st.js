import styled from 'styled-components';

export const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;

  main {
    flex-grow: 1;
    padding: 2rem 1rem;
  }

  h1 {
    font-family: 'Rugen', sans-serif;
    color: #FF3A00;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const PolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    color: #333;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;