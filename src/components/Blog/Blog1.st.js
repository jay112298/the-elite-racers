import styled from 'styled-components';

export const BlogPost = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  
  h1 {
    font-family: 'Rugen', sans-serif;
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 1rem;
  }
  
  .author-info {
    display: flex;
    align-items: center;
    
    .author-logo {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0.5rem;
    }
    
    span {
      color: #939599;
      font-size: 1rem;
    }
  }
`;

export const Content = styled.div`
  line-height: 1.6;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  color: #333;
`;

export const SubHeader = styled.h2`
  font-family: 'Rugen', sans-serif;
  font-size: 1.8rem;
  color: #FF3A00;
  margin: 2rem 0 1rem;
`;