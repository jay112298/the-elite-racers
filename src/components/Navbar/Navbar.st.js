import styled from 'styled-components';

export const NavSection = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    background: linear-gradient(to right, #fcefeb, #fae5df, #fff);
    justify-content: space-between;
    font-family: 'Inter', sans-serif;
    padding: 1rem 0;
    position: relative; /* Required for absolute positioning of mobile menu */

    .logo {
        margin-left: 4.64rem;
        z-index: 100;

        @media (max-width: 900px) {
            margin-left: 1.5rem; /* Tighter margins on smaller screens */
        }
    }

    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        margin-right: 4.64rem;
        z-index: 100;

        .bar {
            width: 25px;
            height: 3px;
            background-color: #000;
            margin: 3px 0;
            transition: 0.3s;
            border-radius: 2px;
        }

        /* Simple animation for the hamburger turning into an X */
        .bar.open:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }

        @media (max-width: 900px) {
            display: flex;
            margin-right: 1.5rem;
        }
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 4.64rem; /* Aligns with the logo margin */

        .nav-links {
            color: #000;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: auto 1.14rem;
            text-decoration: none;
            transition: color 0.2s ease-in-out;

            &:hover {
                color: #D93100; /* Pulled from your commented code */
            }
        }

        /* Mobile & Tablet Dropdown Menu */
        @media (max-width: 900px) {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #fae5df; /* Matches the middle of your gradient */
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 0;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);

            /* Hidden by default, toggled via the 'open' class */
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transition: clip-path 0.3s ease-in-out;

            &.open {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }

            .nav-links {
                margin: 1rem 1.5rem;
                font-size: 16px; /* Slightly larger text for mobile tapping */
            }
        }
    }

    /* Your account-dash styles remain untouched here... */
`;