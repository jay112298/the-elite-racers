import styled from 'styled-components'

export const BlogWrap = styled.section`

    width: 100%;
    height: 22rem;
    padding: 0 4.7rem;


    .header {

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.53rem;
        margin-bottom: 1.75rem;
        .wedge {
            width: 4.3rem;
            height: 2.12rem;
            background: #DD4B21;
            clip-path: polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%); 
        }

        .text {
            color: #000;
            font-family: 'Rugen', sans-serif;
            font-size: 2.44709rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            span {
                color: #FF3A00;
            }

        }
    }

    .content {

        display: flex;
        align-items: center;
    

    }


`