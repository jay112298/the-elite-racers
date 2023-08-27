import styled from 'styled-components'


export const TeamWrapper = styled.div`

    width: 94%;
    margin: 0 3%;

    .header {
        
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        margin: 2% 0;

        border-bottom: 0.06614rem solid black;
        .shape{
            width: 3.50529rem;
            height: 2.51323rem;
            flex-shrink: 0;
            background: #FF3A00;
            
        }

        .text {
            color: #000;
            font-family: 'Rugen', sans-serif;
            font-size: 3.96825rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            span{
                color: #FF3A00;
                font-size: 3.96825rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }

    .cards-leader{
        display: flex;
        align-items: center;
        gap: 3%;
    }

`