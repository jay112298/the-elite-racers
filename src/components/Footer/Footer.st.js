import styled from "styled-components";

export const FooterSec = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 2rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }

    .content {
        width: 100%; /* Removed max-width so it spans the whole screen again */

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2.12rem;
            border-bottom: 1.5px solid black;
            padding-bottom: 1rem;
            flex-wrap: wrap;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 1.5rem;
            }

            .identity {
                display: flex;
                align-items: center;
                width: auto;
                max-width: 100%;

                img {
                    max-width: 100px;
                    height: auto;
                }

                .name {
                    color: #000201;
                    font-family: "Rugen", sans-serif;
                    font-size: 2rem;
                    margin-left: 1rem;

                    @media (max-width: 480px) {
                        font-size: 1.5rem;
                    }

                    span {
                        color: #d93100;
                        font-size: 2.5rem;

                        @media (max-width: 480px) {
                            font-size: 2rem;
                        }
                    }
                }
            }

            .link {
                color: #d93001;
                font-family: "Inter", sans-serif;
                font-size: 1.05rem;
            }
        }

        .bottom {
            display: flex;
            align-items: flex-start;
            justify-content: space-between; /* This pushes the two child divs to the far edges */
            width: 100%;
            margin-top: 3rem;
            padding-top: 1rem;

            /* Drops the Vision section below the links on tablets/smaller screens */
            @media (max-width: 1024px) {
                flex-direction: column;
                gap: 3rem;
            }

            .nav {
                display: flex;
                align-items: flex-start;
                gap: 6rem; /* Big space between the "Navigation" block and "Information" block */

                /* On mobile, spread the 2 columns evenly */
                @media (max-width: 768px) {
                    width: 100%;
                    justify-content: space-between;
                    gap: 1rem;
                }

                .left,
                .right {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem; /* This creates the 4-column look for Title + Links */

                    /* On mobile, stack Title above Links to create a 2-column layout */
                    @media (max-width: 768px) {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }

                .footnav-title {
                    width: 7rem;
                    color: #dd4b21;
                    font-family: "Inter", sans-serif;
                    font-size: 1.05rem;
                    font-weight: 700;
                }

                .footnav-content li {
                    list-style: none;
                    margin-bottom: 0.86rem;
                    color: #000;
                    font-family: "Inter", sans-serif;
                    font-size: 1.05rem;
                    transition: color 0.2s;

                    &:hover {
                        color: #d93100;
                    }
                }
            }

            .vision {
                display: flex;
                align-items: flex-start;
                max-width: 42rem;
                gap: 2rem; /* Separates the "Our Vision" title from the paragraph */

                @media (max-width: 768px) {
                    flex-direction: column;
                    gap: 1rem;
                }

                .footnav-title {
                    color: #dd4b21;
                    font-family: "Inter", sans-serif;
                    font-size: 1.05rem;
                    font-weight: 700;
                    width: auto;
                    min-width: 7rem;
                }

                .footnav-content {
                    .para {
                        color: #000;
                        font-family: "Inter", sans-serif;
                        font-size: 1.05rem;
                        line-height: 1.5rem;
                        margin-bottom: 1.5rem;
                    }

                    .slogan {
                        display: flex;
                        align-items: center;
                        gap: 0.79rem;
                        margin-bottom: 0.98rem;

                        .shape {
                            width: 0.46rem;
                            height: 5.4rem;
                            border-radius: 5rem;
                            background: #dd4b21;
                        }

                        .text {
                            color: #000;
                            font-family: "Inter", sans-serif;
                            font-size: 2.3rem;
                            font-weight: 900;
                            text-transform: uppercase;
                            line-height: 1.1;

                            @media (max-width: 480px) {
                                font-size: 1.8rem;
                            }

                            span {
                                color: #d93001;
                            }
                        }
                    }

                    .cta-buttons {
                        display: flex;
                        justify-content: flex-start;
                        gap: 10px;
                        flex-wrap: wrap;

                        .cta {
                            width: 14.2rem;
                            height: 3.24rem;
                            border-radius: 0.2rem;
                            background: #d93001;
                            color: #fff;
                            font-size: 1rem;
                            font-family: "Inter", sans-serif;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: background 0.3s;

                            &:hover {
                                background: #b52800;
                            }
                        }
                    }
                }
            }
        }
    }

    .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 2.65rem;
        flex-wrap: wrap;

        @media (min-width: 900px) {
            justify-content: flex-end;
        }

        .icon {
            color: #d93100;
            transition: transform 0.2s;

            &:hover {
                transform: translateY(-3px);
            }

            img {
                height: 2rem;
            }
        }
    }
`;