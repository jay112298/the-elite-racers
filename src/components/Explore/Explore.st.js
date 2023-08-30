import styled from 'styled-components';

export const ExploreSec = styled.section`
    width: 90%;
    height: 55.22487rem;
    margin: 0 auto;
    border-radius: 1.85185rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;

    background-image: url(${props => props.blob1}), url(${props => props.blob2}), url(${props => props.blob3}), url(${props => props.ogStar}), url(${props => props.ogStar}), url(${props => props.ogStar});
    background-repeat: no-repeat;
    background-position: 0% 0%, 100% 0%, 0% 100%, 4% 95%, 36% 5%, 39% 2%;
    background-size: auto, auto, auto, 3.4rem, 2.8rem, 1.78rem;

    .content {

        margin: 5.29rem 4.2rem;

        .explore {
            .speed {

                width: 30rem;
                span {
                    color: #D93100;
                    font-family: 'Rugen', sans-serif;
                    font-size: 5.09259rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

                color: #000;
                font-family: 'Rugen', sans-serif;
                font-size: 2.18254rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .victory {
                width: 33rem;
            }

            .destination {
                font-family: 'Rugen', sans-serif;
                color: #000;
                font-size: 2.18254rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                span {
                    color: #D93100;
                }
            }

            .brief {
                margin: 2.31rem auto;
                color: #000;
                font-family: 'Inter', sans-serif;
                font-size: 1.28968rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                width: 35.64815rem;
            }

            .cta {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 1.46rem;
                width: 16.2037rem;
                height: 3.76984rem;
                flex-shrink: 0;
                border-radius: 0.46296rem;
                background: #D93100;
                color: #FFF;
                font-family: 'Inter', sans-serif;
                font-size: 1.28968rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                text-transform: uppercase;
            }
        }


    }
    .fsae {
        width: 39.48413rem;
        height: 50.40787rem;
        margin-top: 2.9rem;
        margin-right: 2.45rem;
        flex-shrink: 0;
        border-radius: 1.5211rem;
        /* background: linear-gradient(223deg, #D93100 0%, #000 47.26%, #D93100 76.47%); */
        background-image: url(${props => props.subtract});
        background-position: center;
        background-size: cover;
        /* box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.25); */

        /* clip-path: polygon(0 0, 80% 0, 80% 10%, 100% 10%, 100% 100%, 0 100%); */

        .header {
            display: flex;
            align-items: center;
            height: 7.5rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .future {

                margin: 2.52rem;
                color: #FFF;
                font-family: 'Rugen', sans-serif;
                font-size: 1.65344rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                span {
                    font-size: 3.30688rem;
                }

            }

            .ter-logo {

                border-radius: 1.85185rem;
                background: linear-gradient(40deg, #942201 0%, #D93100 100%);
                box-shadow: 0px 4px 10px 0px rgba(217, 49, 0, 0.50);
                margin-top: 0.7rem;
                margin-right: 1.3rem;
                width: 8rem;
                display: flex;
                justify-content: center;

                img {
                    width: 5rem;
                    height: 4.6rem;
                }
            }

        }

        .content {

            display: flex;
            align-items: center;
            justify-content: space-between;


            .sae {
                
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .f {

                    img {
                        width: 5.88rem;
                        height: 3.10rem;
                    }

                }

                .star {

                    img {
                        margin: 1.98rem 0;
                        width: 3.24rem;
                    }

                    &:last-child {
                        img {
                            margin-top: 0rem;
                        }
                    }




                }

                .sae-typo {
                    height: 20rem;
                    width: 9rem;
                    color: #FFF;
                    text-align: center;
                    font-family: 'Rugen', sans-serif;
                    font-size: 5rem;
                    font-style: normal;
                    font-weight: 400;
                    /* line-height: 0%; 0rem */
                }

            }

            .car {

                height: 35rem;
                width: 23.4127rem;
                display: flex;
                justify-content: flex-end;

                img {

                    height: 34rem;
                    

                }
            }
        }
    }
`;