import styled from "styled-components";

export const FooterSec = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 2rem; 

  // .blank {
  //   width: 3.69577rem;
  //   height: 1.98413rem;
  //   background: #d9d9d9;
  // }

  .cta-buttons {
    display: flex;
    justify-content: flex-start; /* Align buttons in a row */
    gap: 10px; /* Space between the buttons */
    margin-top: 0.93rem;
  }

  .content {
    width: 100%;
    padding: 0 2rem; /* Added padding to the content */

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.12rem;
      border-bottom: 1.5px solid black;
      padding-bottom: 1rem; /* Added padding below the border */

      .identity {
        display: flex;
        align-items: center;
        width: 33.86243rem;
        height: 15.47619rem;

        .name {
          width: 17.39418rem;
          height: 5.09259rem;
          color: #000201;
          font-family: "Rugen", sans-serif;
          font-size: 2.1545rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          span {
            color: #d93100;
            font-family: "Rugen", sans-serif;
            font-size: 2.84392rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }

      .link {
        color: #d93001;
        font-family: "Inter", sans-serif;
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
      margin-top: 3rem;
      padding-top: 1rem; /* Added padding above the bottom content */

      .nav,
      .vision {
        display: flex;
        align-items: flex-start;

        .footnav-title {
          width: 7rem !important;
          color: #dd4b21;
          font-family: "Inter", sans-serif;
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
            font-family: "Inter", sans-serif;
            font-size: 1.0582rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }

      .nav {
        .left,
        .right {
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
            font-family: "Inter", sans-serif;
            font-size: 1.0582rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5rem;
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
              background: #dd4b21;
            }

            .text {
              width: 26.5873rem;
              color: #000;
              font-family: "Inter", sans-serif;
              font-size: 2.31481rem;
              font-style: normal;
              font-weight: 900;
              line-height: normal;
              text-transform: uppercase;

              span {
                color: #d93001;
              }
            }
          }

          .cta {
            margin-top: 0.93rem;
            width: 14.21958rem;
            height: 3.24074rem;
            border-radius: 0.19841rem;
            background: #d93001;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.99206rem;
            font-family: "Inter", sans-serif;
            cursor: pointer;
            font-size: 0.99206rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            font-family: "Inter", sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.46rem;
    margin: 2.65rem 1.06rem;
    margin-bottom: 0;

    .icon {
      color: #d93100;
      padding: 3px 5px;

      img {
        height: 2rem;
      }
    }
  }
`;
