import styled from 'styled-components'

export const Card = styled.div`

    width: 21.69312rem;
    height: 17.59259rem;
    fill: var(--neutral-light-100, #FFF);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.10);
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.10));
    border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;

    .cover-img {
        width: 21.69312rem;
        height: 11.90476rem;
        object-fit: cover;
        border-radius: 0.8rem 0.8rem 0 0;

        
    }

    .info {

        display: flex;
        align-items: center;
        margin-left: 1.59rem;
        margin-bottom: 1.32rem;
        .author-pic {
            height: 2.64rem;
            width: 2.64rem;
            border-radius: 3rem;
        }

        .blog-info {

            margin-left: 1.06rem;
            margin-top: 1.32rem;

            .title {
                color: #000;

                /* TextLarge/Medium */
                font-family: Inter;
                font-size: 1.0582rem;
                font-style: normal;
                font-weight: 500;
                line-height: 1.71958rem; /* 162.5% */
                letter-spacing: -0.01164rem;

            }

            .author-name {
                color: var(--neutral-dark-38, #939599);

                /* SmallText/Regular */
                font-family: Inter;
                font-size: 0.66138rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.32275rem; /* 200% */
            }
        }
    }
`