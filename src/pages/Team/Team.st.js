import styled from 'styled-components'


export const TeamWrapper = styled.div`

    width: 90rem;
    margin: 0 5rem;

    .header {
        margin: 1.52rem 0%;
        font-family: 'Rugen', sans-serif;

        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        border-bottom: 1px solid black;

        .shape{
            width: 3.50529rem;
            height: 2.51323rem;
            flex-shrink: 0;
            background: #FF3A00;
        }

        .text{
            color: #000;
            font-size: 3.96825rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

    }
    .leaders-wrapper {
        height: 47.28836rem;
        border-radius: 0rem 0rem 3.96825rem 3.96825rem;
        background: #FFF;
        box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.25);
    


        .cards-leader {
            display: flex;
            justify-content: space-around;
            gap: 4.7rem;

        }

        .statements {
            display: flex;
            justify-content: space-between;
            color: #000;
            font-family: 'Inter', sans-serif;
            font-size: 3.76984rem;
            font-style: italic;
            font-weight: 900;
            line-height: 92.523%;
            text-transform: uppercase;

            .left, .right {
                width: 34.8545rem;
                margin-top: 3.51rem;

                span {
                    color: #FF3A00;
                    font-family: 'Inter', sans-serif;
                    font-size: 3.76984rem;
                    font-style: italic;
                    font-weight: 900;
                    line-height: 92.523%; /* 3.48796rem */
                    text-transform: uppercase;
                }
            }

            .left {
                margin-left: 3.31rem;
            }

            .right {
                align-items: end;
            }

            
        }
    }

    .explore-team {
        position: absolute;
        height: 245px;
        width: 245px;
        top: calc(49.6rem + 114.36px);
        left: 43.12rem;
        z-index: 2;
        border-radius: 50rem;
        box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
        background-color: #FFF;

        img {
        margin: 1rem 1rem;

        }

    }

    .members-wrapper {
        margin-top: 1.98rem;
        width: 90.87302rem;
        height: 132.67196rem;
        border-radius: 3.96825rem;
        background: #FFF ; /*linear-gradient(180deg, #FF3A00 0%, rgba(255, 58, 0, 0.00) 100%);*/
        box-shadow: 0px -4px 20px -5px rgba(0, 0, 0, 0.25);

        .top {
            display: flex;
            justify-content: space-between;

            .left {
                width: 35.25132rem;
                height: 8.46561rem;
                margin: 2.18rem 3.37rem;
                flex-shrink: 0;
                color: #000;
                font-family: 'Inter', sans-serif;
                font-size: 3.76984rem;
                font-style: italic;
                font-weight: 900;
                line-height: 92.523%; /* 3.48796rem */
                text-transform: uppercase;

                .text {

                    span {
                        color: #FF3A00;
                        font-family: 'Inter', sans-serif;
                        font-size: 3.76984rem;
                        font-style: italic;
                        font-weight: 900;
                        line-height: 92.523%;
                        text-transform: uppercase;
                    }

                    img {
                        width: 6.08466rem;
                        height: 2.77778rem;
                        flex-shrink: 0;
                    }
                }
            }

            .right {
                margin: 2.18rem 3.37rem;
            }
        }

        .cards-member {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 0 2.2rem;
        }
    }
`