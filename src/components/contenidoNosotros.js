import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    p {
        line-height: 2;
        margin-top: 2rem;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem; 
    }
    
`; 

const ContenidoNosotros = () => {
    const consulta = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        gatsbyImageData(width: 1200)
                    }
                }
            }
        }
    `)                                  

    const datos = consulta.allDatoCmsPagina.nodes[0];

    const { titulo, contenido, imagen } = datos;

    return (
        <>
            <h1
                css={css`
                    text-align: center;
                    margin-top: 4rem;
                    font-size: 4rem;
                `}
            >{titulo}</h1>
            <Contenido>
                <p>{contenido}</p>
                <GatsbyImage 
                    image={imagen.gatsbyImageData} 
                    alt="nosotros" 
                    width={1200}
                />
            </Contenido>
        </>
    );
};

export default ContenidoNosotros;