import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Boton = styled(Link)`
    margin: 2rem auto .5rem auto;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;

    &:visited {
        color: #fff;
    }

`;

const HabitacionPreview = ({habitacion}) => {

    //Destructuring
    const { titulo, contenido, imagen , slug} = habitacion;

    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
                display: grid;
                grid-auto-rows: 1fr 2fr;
               
            `}
        >
            <GatsbyImage image={imagen.gatsbyImageData} alt={slug} />
            
            <div css={css`
                padding: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
               
            `}>
                <h3 css={css`
                    text-align: center;
                    font-size: 3rem;
                `}>{titulo}</h3>

                <p>{contenido}</p>
                <Boton to={slug}>Ver Habitación</Boton>

            </div>
        </div>
    );
};

export default HabitacionPreview;