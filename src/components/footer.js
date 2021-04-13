import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;

    &:visited {
        color: #fff;
    }

    &:hover {
        cursor: pointer;
    }

`;

const Footer = ({title}) => {
    
    const year = new Date().getFullYear();

    return (
        <footer
            css={css`
                background-color: rgba(44,62,80);
                padding: 1rem;
                margin-top: 5rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <EnlaceHome to={'/'}>
                    <h1>{title}</h1>
                </EnlaceHome>
                <p css={css`color: #fff`}>Hotel Gatsby. Todos los derechos reservados</p>
                <p css={css`color: #fff`}>Copyright &#169; {year}</p>
            </div>
        </footer>
    );
};

export default Footer;