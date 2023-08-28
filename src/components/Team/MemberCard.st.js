import styled from 'styled-components'

export const Card = styled.div`


    width: 19.2836rem;
    height: 24.29636rem;
    margin: 4.34rem 1.17rem;
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
        width: 17.85139rem;
        height: 15.90774rem;
        margin-top: 0.92rem;

        flex-shrink: 0;
        border-radius: 0.40049rem;
        background: #D9D9D9;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
        background-image: url(${props => props.bgUrl});
        background-size: cover;

        
    }

    .name {
        margin-top: 1.14rem;
        color: #FF3A00;
        font-family: 'Inter', sans-serif;
        font-size: 1.25661rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }

    .post {
        color: #2E2E2E;
        font-family: Inter;
        font-size: 0.71647rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }

    .social-icons {
        margin-top: 1.19rem;
        height: 1.98783rem;
        width: 7.33003rem;


        display: flex;
        align-items: center;
        justify-content: space-between;

        .ig, .li, .github {
        color: #FF3A00;
        }
    }
`