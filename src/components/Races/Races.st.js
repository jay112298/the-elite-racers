import styled from "styled-components"

export const Race = styled.section`

    margin: 5.7rem auto;
    width : 90%;

    .header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.2rem;
        .shape {
            width: 2.18254rem;
            height: 2.18254rem;
            background: #D93100;
        }

        .title {
            color: #000;
            font-family: 'Rugen', sans-serif;
            font-size: 2.44709rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    .divider {
        margin-top: 0.66rem;
        height: 0.06614rem;
        background: #000;
    }

    .info-section {

        margin-top: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.66rem;

        .calendar {

            border-radius: 1.38889rem;
            background: linear-gradient(90deg, #D93100 0%, #000 47.40%, #D93100 78.39%);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            
            .car-wrapper {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                width: 50.33069rem;
                height: 19.90741rem;
                background: url(${props => props.f12021});
                background-size: 70%;
                background-repeat: no-repeat;
                background-position: 40% 60%;
                
                .text {
                    margin: 0.53rem 1.59rem;
                    color: #FFF;
                    font-family: 'Rugen', sans-serif;
                    font-size: 2.05026rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    span {
                        font-family: 'Rugen', sans-serif;
                        font-size: 2.1164rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        letter-spacing: 0.38095rem;
                    }
                }


                .logo {
                    width: 3.57143rem;
                    height: 1.78571rem;
                    align-self: flex-end;
                    margin: 1.32rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 3.57143rem;
                    }
                }
            }


        }

        .venue {
            width: 25.99206rem;
            height: 19.90741rem;
            border-radius: 1.38889rem;
            style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 0.6rem;
            .header {
                color: #000;
                font-family: 'Rugen', sans-serif;
                font-size: 1.65344rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                span {
                    color: #D93100;
                }
            }
            .body {
                background-image: url(${props => props.backgroundImage});
                background-position: center center;
                background-size: cover;
                width: 20.96561rem;
                height: 13.49206rem;
                flex-shrink: 0;
                border-radius: 0.69444rem;
            }
            .footer {
                color: #000;
                font-family: 'Inter', sans-serif;
                font-size: 1.25661rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                text-transform: uppercase;
                
                span{
                    color: #D93100;
                }
            }
        }

        .dates {

            display: flex;
            justify-content: space-between;
            flex-direction: column;
            gap: 0.46rem;
            .start, .end {
                width: 13.09524rem;
                height: 9.72222rem;
                border-radius: 0.79365rem;
                background: #FFF;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                display: flex;
                flex-direction: column;

                .text{
                    color: #000;
                    font-family: 'Rugen', sans-serif;
                    font-size: 0.92593rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    margin-top: 1.39rem;
                    margin-left: 1.06rem;
                }
                .date{

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0 0.6rem;
                    .num{
                        color: #000;
                        font-family: 'Rugen', sans-serif;
                        font-size: 3.83598rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                    .shape{}
                }
                .month{
                    color: #D93100;
                    font-family: 'Rugen', sans-serif;
                    font-size: 1.5756rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    margin-left: 0.79rem;
                    margin-bottom: 1.2rem;
                }
            }

            .end {

                .text {

                    span {
                        color: #D93100;
                    }
                }

            }
        }
    }
    


`