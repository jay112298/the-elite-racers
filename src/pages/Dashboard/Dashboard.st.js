import styled from 'styled-components'

export const DashContainer = styled.div`

  
  min-height: 100vh;
  width: 100vw;
  display: flex;

  .sidebar {

    height: 60vh;
    position: absolute;
    top: 20vh;
    bottom: 20vh;
    left: 0;
    width: 4rem;
    border-radius: 2.93rem;
    background-color: #602BF8;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    
    
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.15rem;
      height: 5rem;
    }

    .tabs {

      margin-top: 2.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      li {

        
        margin-bottom: 1rem;
        color: var(--dmv-grey-text, #FFFFFF);
        font-family: 'Manrope', sans-serif;
        font-size: 1.0rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        gap: 0.6rem;
        cursor: pointer;
        display: flex;

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;

          .icon-svg {
            height: 2rem;
            width: 2rem;
          }
        }

        .label {
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

      .active {
        color: #000;
        font-family: 'Manrope', sans-serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }

  .main-content {
    width: calc(100vw);
    .top-navbar {
      padding: 1rem;
      display: flex;
      height: 4rem;
      background-color: #fff;
      align-items: center;
      justify-content: space-between;

      .greeting {
        margin-left: 2.5rem;
        color: var(--dmv-black, #23262F);
        font-family: 'Manrope', sans-serif;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.5rem; /* 153.846% */
      }

      .user {

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .user-bell {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }
        
        .user-icon {
          display: flex;
          align-items: center;
          gap: 0.88rem;
          color: #6956E5;
          margin: 2.5rem;
        }
      }
    }

    .content {

      margin-left: 5rem;

    }
  }





`



/* 
.content {
  Add styles for your content area
} */
