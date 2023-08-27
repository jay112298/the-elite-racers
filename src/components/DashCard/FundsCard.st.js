import styled from 'styled-components'

export const Card = styled.div`

    
    width: 20.175rem;
    height: calc(100vh/2 - 140px);
    background-color: #000;
    border-radius: 0.875rem;
    background: #FFF;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    /* drop-shadow-smaller */
    box-shadow: 6px 6px 30px 0px rgba(125, 153, 180, 0.20), 2px 2px 4px 0px rgba(86, 144, 198, 0.11);

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: auto 0.48rem !important;
        /* margin-bottom: auto !important; */
    }

    .header {
        font-family: ;
        color: #000;
        font-family: 'Aileron', sans-serif;
        font-size: 1.275rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 19rem;

        div:last-child {
            width: 1.5rem;
            height: 1.5rem;
            flex-shrink: 0;
        }
    }

    .digit {
        color: #000;
        font-family: 'Aileron', sans-serif;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .hr-line {
        width: 19rem;
        height: 0.06rem;
        background-color: #DDDBE2;
    }

    .foot {
        color: #000;
        font-family: 'Aileron', sans-serif;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`