import styled from 'styled-components';

export const ExploreSec = styled.section`
    width: 90%;
    height: 55.22487rem;
    margin: 0 auto;
    border-radius: 1.85185rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;


    .content {

        margin: 5.29rem 5.6rem;

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
    }
`;