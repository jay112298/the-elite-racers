import styled from 'styled-components'

export const Card = styled.div`


  width: 24.93386rem;
  height: 31.41534rem;
  margin-top: 2.12rem;
  flex-shrink: 0;
  border-radius: 0.64795rem;
  background: #FFF;
  font-family: 'Inter', sans-serif;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  .image {
    width: 23.08201rem;
    height: 20.56878rem;
    margin-top: 0.92rem;

    flex-shrink: 0;
    border-radius: 0.40049rem;
    background: #D9D9D9;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background-image: url(${props => props.bgUrl});
    background-size: cover;

    
  }

  .name {
    margin-top: 1.46rem;
    color: #FF3A00;
    font-size: 1.2959rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  .post {
    color: #2E2E2E;
    font-size: 0.98102rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }

  .social-icons {
    margin-top: 1.19rem;
    height: 2.38095rem;
    width: 9.12698rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .ig, .li, .github {
      color: #FF3A00;
    }
  }
`