import styled from 'styled-components'

export const FooterSec = styled.footer`

    display: flex;
    align-items: flex-end;

    .blank {
        width: 4.69577rem;
        height: 1.98413rem;
        background: #D9D9D9;
    }

    .content {
        width: calc(100rem - 4.69577rem - 4.69577rem);

        .top {

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2.12rem;
            border-bottom: 1.5px solid black;

            .identity {
                display: flex;
                align-items: center;
                width: 33.86243rem;
                height: 15.47619rem;

                .name{
                    width: 17.39418rem;
                    height: 5.09259rem;
                    color: #000201;
                    font-family: 'Rugen', sans-serif;
                    font-size: 2.1545rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    span {
                        color: #D93100;
                        font-family: 'Rugen', sans-serif;
                        font-size: 2.84392rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
            }

            .link {
                color: #D93001;
                font-family: 'Inter', sans-serif;
                font-size: 1.0582rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                span {
                    color: #656565;
                }
            }
        }

        .bottom {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            .nav, .vision{
                display: flex;
                align-items: flex-start;

                .footnav-title {
                    width: 7rem !important;
                    color: #DD4B21;
                    font-family: 'Inter', sans-serif;
                    font-size: 1.0582rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    width: 5.5rem;
                }

                .footnav-content {
                    li {
                        list-style: none;
                        margin-bottom: 0.86rem;
                        color: #000;
                        font-family: 'Inter', sans-serif;
                        font-size: 1.0582rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
            }

            .nav {
                .left, .right {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;

                    
                }
            }

            .vision {
                width: 41.99735rem;

                align-items: flex-start;

                .footnav-title {
                    width: 30rem !important;
                }

                .footnav-content {

                    margin-top: 2.05rem;
                    
                    .para {
                        color: #000;
                        font-family: 'Inter', sans-serif;
                        font-size: 1.0582rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        margin-bottom: 1.5rem;
                    }

                    .slogan {

                        display: flex;
                        align-items: center;
                        gap: 0.79rem;
                        margin-bottom: 0.98rem;
                        .shape {
                            width: 0.46296rem;
                            height: 5.42328rem;
                            border-radius: 5.29101rem;
                            background: #DD4B21;
                        }

                        .text {
                            width: 26.5873rem;
                            color: #000;
                            font-family: 'Inter', sans-serif;
                            font-size: 2.31481rem;
                            font-style: normal;
                            font-weight: 900;
                            line-height: normal;
                            text-transform: uppercase;

                            span {
                                color: #D93001;
                            }
                        }



                    }

                    .cta {
                        margin-top: 0.93rem;
                        width: 14.21958rem;
                        height: 3.24074rem;
                        border-radius: 0.19841rem;
                        background: #D93001;
                        color: #FFF;
                        font-size: 0.99206rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        font-family: 'Inter', sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

            }
        }
    }

`
