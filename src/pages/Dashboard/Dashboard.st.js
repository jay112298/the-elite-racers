import styled from 'styled-components'

export const DashContainer = styled.div`


  min-height: 100vh;
  width: 100vw;
  display: flex;

  .sidebar {

    height: 100vh;
    width: calc(100vw*1/6);
    background-color: #F6F6F6;
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

      li {

        margin-left: 2rem;
        margin-bottom: 1rem;
        color: var(--dmv-grey-text, #878787);
        font-family: 'Manrope', sans-serif;
        font-size: 1.0rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        gap: 0.6rem;
        cursor: pointer;
        display: flex;
        width: 12.5rem;
        padding: 0.25rem 0.25rem 0.25rem 0rem;
        /* flex-direction: column; */
        justify-content: flex-start;
        align-items: center;

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .label {
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

      .active {
        color: #6956E5;
        font-family: 'Manrope', sans-serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }

  .main-content {
    width: calc(100vw*5/6);
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
  }





`



/* 
.content {
  Add styles for your content area
} */
