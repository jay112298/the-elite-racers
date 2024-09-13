import styled from "styled-components";

export const HeroWrap = styled.section`
  width: 100%;
  height: 46.42857rem;
  background: url(${(props) => props.blob1}), url(${(props) => props.blob2}),
    url(${(props) => props.x});
  background-repeat: no-repeat;
  background-position: 0% 5%, 86% 11%, 15% 65%;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-family: "Inter", sans-serif;
    height: 7.93rem;

    .logo {
      margin: 0 0.04rem;
      img {
        width: 13.64rem;
        height: 13.64rem;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;

      .nav-links {
        a {
          color: #000;
          font-size: 0.92593rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: auto 1.8rem;
          text-decoration: none;
        }
      }
    }
  }

  .hero-content {
    font-family: "Inter", sans-serif;
    background: url(), url(), url();
    .top {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 2.45rem;
      margin-left: 5.6rem;

      .left {
        width: 36.24339rem;
        height: 8.13492rem;

        .title {
          color: #000;
          text-transform: capitalize;
          font-family: "Inter", sans-serif;
          font-size: 2.44709rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        .body {
          display: flex;
          align-items: center;
          .shape {
            width: 5px;
            height: 4.29894rem;
            flex-shrink: 0;
            background-color: #d93100;
            margin-right: 1rem;
          }

          .text {
            margin-top: 0.6rem;
            color: #000;
            font-family: "Inter", sans-serif;
            font-size: 1.28261rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            span {
              color: #000;
              font-family: Inter;
              font-size: 1.28261rem;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
        }

        .explore-button {
          margin-top: 0.79rem;
          display: flex;
          align-items: center;
        }

        .explore-btn {
          margin-top: 0.79rem;
          color: #d93100;
          font-family: "Inter", sans-serif;
          font-size: 1.25661rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          display: flex;
          align-items: center;
          background-color: transparent;
          border: 1px solid transparent;
          border-radius: 0.43197rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }

        .explore-btn:hover {
          border: 1px solid #d93100;
        }

        .explore-btn img {
          margin-left: 0.5rem;
          color: #d93100;
        }
      }

      .line {
        width: 0.06614rem;
        height: 10.51587rem;
        background: #000;
      }

      .right {
        width: 39.88rem;
        margin-left: 4.76rem;
        margin-right: 8.73rem;

        span {
          color: #d93100;
          font-family: "Rugen", sans-serif;
          font-size: 8.7963rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        color: #000;
        font-family: "Rugen", sans-serif;
        font-size: 2.77778rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .car-img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.06rem;
      img {
        width: 85.71429rem;
        height: 19.51058rem;
      }
    }
  }
`;