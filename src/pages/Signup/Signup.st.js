import styled from 'styled-components'

export const SignupForm = styled.div`

text-align: center;
    max-width: 400px;
    margin: 0 auto;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .success-ribbon {
        background-color: #4caf50;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;

        div {
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            label {
                margin-bottom: 5px;
            }

            input,
            select {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 100%;
            }

            button {
                padding: 10px 15px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }

`