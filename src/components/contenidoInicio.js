import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    p {
        line-height: 2;
        margin-top: 2rem;
    }

`;

const ContenidoInicio = () => {
    
    const informacion = useStaticQuery(graphql`
        query MyQuery {
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                       gatsbyImageData
                    }
                }
            }
        }
    `)

    const datos = informacion.allDatoCmsPagina.nodes[0];

    const { titulo, contenido, imagen } = datos;

    return (
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{titulo}</h2>
            <TextoInicio>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="inicio"/>
            </TextoInicio>
            
        </>
    );
};

export default ContenidoInicio;


