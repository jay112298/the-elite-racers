import styled from "styled-components";


export const SheetWrapper = styled.div`

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.75rem;
        background: #2D2D2D;
        position: sticky;

        .link-icon{
            color: aliceblue;
            padding: 1rem;
        }

        .title {
            color: #f9f9f9;
            margin-right: 2rem;
            font-family: 'Eplilogue', sans-serif;
            font-weight: 600;
            font-size: 1.25rem;
            font-weight: 600;

        }

    }

    .main-content {

        .header {

            margin: 5.19rem 4.38rem;
            color: var(--primary-colour-dark-grey, #3B3B3B);
            display: flex;
            justify-content: space-between;

            h2 {

                /* H2 */
                font-family: Epilogue;
                font-size: 1.125rem;
                font-style: normal;
                font-weight: 500;
                line-height: 1.5rem; /* 133.333% */
            }

            .searchbar {
                width: 15.625rem;
                height: 1rem;
                flex-shrink: 0;
                border-radius: 1.25525rem;
                border: 1px solid #868686;
                opacity: 0.2;
                background: #FBFBFB;
            }

        }

        .sheet {

            margin: 3.3rem 4.3rem;
            font-family: 'Epilogue', sans-serif;
            font-weight: 400;

            .sheet-title {
                background-color: #F4F4F4;
                
            }

            .sheet-contents {
                p:last-of-type {
                    color: #1890FF;

                }
            }
            .sheet-title, .sheet-contents {
                height: 4.3rem;
                display: grid;
                align-items: center;
                place-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

                p:last-of-type {
                    font-family: Epilogue;
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 400;
                }
            }

        }

    }


`