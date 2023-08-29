import styled from 'styled-components';

export const Form = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .content-block {

        width: 73.9418rem;
        height: 52.57937rem;
        margin: 6.2rem 0;
        flex-shrink: 0;
        border-radius: 2.05026rem;
        border: 1px solid #B9B9B9;
        background: #FFF;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;

        .img {
            width: 36.64021rem;
            height: 52.57937rem;
            border-radius: 2.05026rem 0rem 0rem 2.05026rem;
            background: url(${props => props.logincover});
            background-position: center center;
            background-size: cover;

            .logo {

                img {
                    margin: 1.92rem 1.92rem;
                    height: 6rem;
                    width: 6rem;
                }
            }

            .slogan {
                text-transform: uppercase;
                width: 24.27249rem;
                height: 6.48148rem;
                font-family: 'Rugen', sans-serif;
                font-size: 2.22665rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                background: linear-gradient(81deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-left: 8rem;
            }

        }

        .form-section {
            
            font-family: 'Inter', sans-serif;

            .form-area {

                margin: 0 6.8rem;

                .title {
                    color: #181818;
                    font-size: 2.24868rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
    
                .label {
                    color: #17171E;
                    margin-top: 1.8rem;
                    margin-bottom: 0.4rem;
                    font-size: 0.79365rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
    
                input[type="text"], input[type="password"] {
                    padding: 0.2rem 1rem;
                    width: 21.47884rem;
                    height: 1.65026rem;
                    border-radius: 0.39683rem;
                    border: 1px solid #A1A7B0;
                    background: #FFF;
                }
    
                button {
                    display: block;
                    width: 100%;
                    font-family: 'Inter', sans-serif;
                    margin: 1.98rem 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    /* width: 23.47884rem; */
                    height: 2.1164rem;
                    border-radius: 0.33069rem;
                    background: #D93100;
                    color: #FFF;
                    font-size: 0.72751rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    border-color: #D93100;
                }

                .forgot-pass {
                    margin-top: 0.86rem;
                    margin-bottom: 1.52rem;

                    a {
                        color: #D93100;

                        text-decoration: none;
                    }
                }

                .or-sec {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1.52rem;

                    .dash {
                        width: 10.31746rem;
                        height: 0.06614rem;
                        background: #17171E;
                    }
                }

                .google-link {
                    height: 2.1164rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.5291rem;
                    border: 1px solid #A1A7B0;
                    background: #FDFDFD;

                    .google {

                        height: 1.6rem;
                        img {
                            width: 1.6rem;
                            height: 1.6rem;
                            margin-right: 0.2rem;

                        }
                    }

                    .text {
                        height: 1.2rem;
                        color: #17171E;
                        font-size: 1rem;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                    }
                }

                .signup-link {
                    margin: 0.94rem 0;
                    font-family: 'Inter', sans-serif;
                    color: #000;
                    font-size: 0.72751rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    a {
                        color: #D93100;
                        font-family: 'Inter', sans-serif;
                        font-size: 0.72751rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
            }
        }
    }


`;