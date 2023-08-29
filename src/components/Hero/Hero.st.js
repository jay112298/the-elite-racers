import styled from 'styled-components'

export const HeroWrap = styled.section`

  width: 100%;
  height: 46.42857rem;
  background: url(${props => props.blob1}), url(${props => props.blob2}), url(${props => props.x});
  background-repeat: no-repeat;
  background-position: 0% 5%, 86% 11%, 15% 65%;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-family: 'Inter', sans-serif;
    height: 7.93rem;

    .logo {
        margin-left: 4.64rem;
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav-links {
            color: #000;
            
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: auto 1.14rem;
        }

 
    }

    .account-dash {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 0.81rem;
        margin-right: 5.24rem;

        .signup {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 6.15551rem;
            height: 2.4838rem;
            flex-shrink: 0;
            border-radius: 0.43197rem;
            border: 1px solid #D93100;
            color: #D93100;
            font-size: 0.75594rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .login {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 6.15551rem;
            height: 2.4838rem;
            flex-shrink: 0;
            border-radius: 0.43197rem;
            background: #D93100;
            color: #FFF;
            font-size: 0.75594rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

  }

  .hero-content {

    font-family: 'Inter', sans-serif;
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
          font-family: 'Inter', sans-serif;
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
            background-color: #D93100;
            margin-right: 1rem;
          }

          .text {
            margin-top: 0.6rem;
            color: #000;
            font-family: 'Inter', sans-serif;
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

        .explore {
          margin-top: 0.79rem;
          color: #D93100;
          font-family: 'Inter', sans-serif;
          font-size: 1.25661rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          display: flex;
          align-items: center;

          img {
            margin-left: 0.5rem;
          }
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
          color: #D93100;
          font-family: 'Rugen', sans-serif;
          font-size: 8.7963rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        color: #000;
        font-family: 'Rugen', sans-serif;
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


`