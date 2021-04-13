import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsHabitacion(filter: {slug: {eq: $slug}}) {
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData(width: 1200)
                }
            }
        }
    }
`;

const HabitacionTemplate = ({data: { allDatoCmsHabitacion: { nodes } }}) => {

    const { titulo, contenido, imagen } = nodes[0];

    console.log(imagen);

    return (
        <Layout>
            <main css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}>
                <h1 css={css`
                    text-align: center;
                    margin-top: 4rem;    
                `}>{titulo}</h1>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt={titulo}/>

           </main>
       </Layout>
    );
};

export default HabitacionTemplate;