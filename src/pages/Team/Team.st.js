import styled from "styled-components";

export const TeamWrapper = styled.div`
  width: 90rem;
  margin: 0 5rem;

  .header {
    margin: 1.52rem 0%;
    font-family: "Rugen", sans-serif;

    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    border-bottom: 1px solid black;

    .shape {
      width: 3.50529rem;
      height: 2.51323rem;
      flex-shrink: 0;
      background: #ff3a00;
    }

    .text {
      color: #000;
      font-size: 3.96825rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .leaders-wrapper {
    height: auto;
    padding-bottom: 2rem;
    border-radius: 0rem 0rem 3.96825rem 3.96825rem;
    background: #fff;
    box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.25);

    .top {
      display: flex;
      justify-content: space-between;

      .left {
        width: 35.25132rem;
        height: 8.46561rem;
        margin: 2.18rem 3.37rem;
        flex-shrink: 0;
        color: #000;
        font-family: "Inter", sans-serif;
        font-size: 3.76984rem;
        font-style: italic;
        font-weight: 900;
        line-height: 92.523%;
        text-transform: uppercase;

        .text {
          span {
            color: #ff3a00;
            font-family: "Inter", sans-serif;
            font-size: 3.76984rem;
            font-style: italic;
            font-weight: 900;
            line-height: 92.523%;
            text-transform: uppercase;
          }

          img {
            width: 6.08466rem;
            height: 2.77778rem;
            flex-shrink: 0;
          }
        }
      }

      .right {
        margin: 2.18rem 3.37rem;

        img {
          width: 18rem;
          height: 10rem;
          margin-top: -2rem;
        }
      }
    }

    .cards-leader {
      display: flex;
      justify-content: space-around;
      gap: 4.7rem;
      margin-bottom: 2rem;
    }

    .additional-cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      gap: 1.5rem;
      padding: 2rem 1rem;
      margin: 0 2rem;
    }

    .additional-cards {
      margin-top: 2rem; // Adjust this value to create space between the two rows of cards
    }

    .statements {
      display: flex;
      justify-content: space-between;
      color: #000;
      font-family: "Inter", sans-serif;
      font-size: 3.76984rem;
      font-style: italic;
      font-weight: 900;
      line-height: 92.523%;
      text-transform: uppercase;

      .left,
      .right {
        width: 34.8545rem;
        // margin-top: 35.51rem;
        margin-top: 9.7rem;

        span {
          color: #ff3a00;
          font-family: "Inter", sans-serif;
          font-size: 3.76984rem;
          font-style: italic;
          font-weight: 900;
          line-height: 92.523%; /* 3.48796rem */
          text-transform: uppercase;
        }
      }

      .left {
        margin-left: 3.31rem;
      }

      .right {
        align-items: end;
      }
    }
  }

  .explore-team {
    position: absolute;
    /* height: 245px; */
    /* width: 245px; */
    top: calc(170.6rem + 114.36px);
    left: 43.12rem;
    z-index: ;
    border-radius: 50rem;
    /* box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.25); */
    background-color: #fff;

    img {
      width: 10rem;
    }
  }

  .members-wrapper {
    margin-top: 1.98rem;
    width: 90.87302rem;
    height: auto;

    border-radius: 3.96825rem;
    background: #fff; /*linear-gradient(180deg, #FF3A00 0%, rgba(255, 58, 0, 0.00) 100%);*/
    box-shadow: 0px -4px 20px -5px rgba(0, 0, 0, 0.25);

    .top {
      display: flex;
      justify-content: space-between;

      .left {
        width: 35.25132rem;
        height: 8.46561rem;
        margin: 2.18rem 3.37rem;
        flex-shrink: 0;
        color: #000;
        font-family: "Inter", sans-serif;
        font-size: 3.76984rem;
        font-style: italic;
        font-weight: 900;
        line-height: 92.523%; /* 3.48796rem */
        text-transform: uppercase;

        .text {
          span {
            color: #ff3a00;
            font-family: "Inter", sans-serif;
            font-size: 3.76984rem;
            font-style: italic;
            font-weight: 900;
            line-height: 92.523%;
            text-transform: uppercase;
          }

          img {
            width: 6.08466rem;
            height: 2.77778rem;
            flex-shrink: 0;
          }
        }
      }

      .right {
        margin: 2.18rem 3.37rem;
      }
    }

    .cards-member,
    .additional-cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      gap: 1.5rem;
      padding: 2rem 1rem;
      margin: 0 2rem;
    }

    .cards-legacy {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
      padding: 2rem;
      margin-bottom: 2rem;
    }

    .cards-member {
      display: grid;
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      gap: 1.5rem;
      padding: 2rem 1rem;
      margin: 0 2rem;
    }

    .cards-faculty {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
      padding: 2rem;
    }

    .cards-sae-team {
      display: grid;
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      gap: 10px;
      padding: 2rem 1rem 2rem 0;
      margin-left: 4.7rem;
    }
  }
`;
