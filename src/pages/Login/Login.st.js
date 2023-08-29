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

        }

        .form {
            
            font-family: 'Inter', sans-serif;


            .title {
                color: #181818;
                font-size: 2.24868rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 0 6.8rem;
            }

            .label {
                color: #17171E;
                font-size: 0.79365rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            input[type="text"] {

            }

            button {

            }
        }
    }


`;