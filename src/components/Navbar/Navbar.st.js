import styled from 'styled-components'

export const NavSection = styled.nav`

    display: flex;
    align-items: center;
    width: 100%;
    background: linear-gradient(to right, #fcefeb, #fae5df, #fff) ;
    justify-content: space-between;
    font-family: 'Inter', sans-serif;

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

`