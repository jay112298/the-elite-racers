import styled from "styled-components";
// import Ferrari from "../../assets/ferrari.jpeg"; 

export const RecruitmentSec = styled.section`
    width: 90%;
    height: 60rem;
    margin: 0 auto;
    border-radius: 1.85rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;

    .content {
        margin: 3rem 4rem;
        width: calc(100% - 8rem);

        .header {
            text-align: left;

            .recruitment {
                color: #000;
                font-family: 'Rugen', sans-serif;
                font-size: 3rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                display: flex;
                align-items: center;
            }

            .redefined {
                color: #D93100;
                font-family: 'Rugen', sans-serif;
                font-size: 5rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-top: 1rem;
            }
        }

        .separator-line {
            width: 0.066rem;
            height: 10.5rem;
            background: #000;
            position: absolute;
            top: 2rem;
            left: 50rem;
        }

        .celebrate-text {
            position: absolute;
            top: 2rem;
            right: 4rem;
            font-family: 'Inter', sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: uppercase;
            text-align: left;
            
            .line {
                margin-bottom: 0.5rem;
            }
            .red {
                color: #D93100;
            }
        }
        .shift-gear-section {
            margin-top: 3rem;
            padding: 1.5rem;
            background: linear-gradient(223deg, #D93100 0%, #000 47.26%, #D93100 76.47%);
            border-radius: 1rem;
            // background: linear-gradient(90deg, #D93100, #FF6A00); 
            color: #FFF;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;

            .shift-gear {
                display: flex;
                align-items: left;
                justify-content: left;
                font-family: 'Rugen', sans-serif;
                font-size: 4rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                text-align: center;

                .hollow-text {
                    -webkit-text-stroke: 1px #fff;
                    color: transparent;
                    margin-left: 0.5rem;
                }
            }

            .subtext {
                margin-top: 1rem;
                color: #FFF;
                font-family: 'Inter', sans-serif;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align: left;
            }

            .join-btn {
                position: absolute;
                right: -1.5rem;
                bottom: -1.5rem;
                display: inline-block;
                padding: 0.8rem 2rem;
                border-radius: 0.5rem;
                background: #FFF;
                color: #D93100;
                font-family: 'Inter', sans-serif;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 700;
                text-transform: uppercase;
                text-decoration: none;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            }
        }

        .features {  
        margin-top: 3rem;  
        display: flex;  
        flex-direction: column;  
        align-items: center;  

        .feature-row {  
            display: flex;  
            justify-content: space-around;  
            width: 100%;  

            .feature {  
                display: flex;  
                align-items: center;  

                img {  
                    margin-right: 0.5rem;  
                    width: 2rem;  
                }  

                span {  
                    color: #000;  
                    font-family: 'Inter', sans-serif;  
                    font-size: 1.2rem;  
                    font-style: normal;  
                    font-weight: 400;  
                    line-height: 3.5;   
                }  
            }  
        }  

        .ferrari-image {
            margin-top: 1rem; 
            width: 60%;
            text-align: center;
            margin-left: -25rem;

            img {
                margin-top: -19rem;
                max-width: 150%; 
                object-fit: contain;
            }
        }
    }
`;
