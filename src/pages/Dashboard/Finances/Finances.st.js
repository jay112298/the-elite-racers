import styled from "styled-components";

export  const FinContainer = styled.div`

    width: 100%;
    height: 100%;
    margin: 2rem;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr; */

    .card {
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 250px;
        padding: 20px;
        text-align: center;
        margin-top: 20px;

        .card-header {
            background-color: #3498db;
            color: #ffffff;
            padding: 10px 0;
            border-radius: 10px 10px 0 0;

            h2 {
                margin: 0;
                font-size: 24px;
            }

        }

        .card-content {
            padding: 20px 0;

            p {
                margin: 0;
                font-size: 16px;
                color: #555;
            }
        }
    }

`