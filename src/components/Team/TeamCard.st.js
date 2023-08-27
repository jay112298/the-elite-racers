import styled from 'styled-components'

export const Card = styled.div`

  width: 24.93386rem;
  height: 31.41534rem;
  flex-shrink: 0;
  border-radius: 0.64795rem;
  background: #FFF;
  font-family: 'Inter', sans-serif;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .image {
    width: 18.84449rem;
    height: 16.79266rem;
    flex-shrink: 0;
    border-radius: 0.40049rem;
    background: #D9D9D9;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .name {
    color: #FF3A00;
    font-size: 1.2959rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`