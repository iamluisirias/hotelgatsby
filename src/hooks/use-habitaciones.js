import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion {
                nodes {
                    id,
                    titulo,
                    contenido,
                    slug, 
                    imagen {
                        gatsbyImageData(placeholder : DOMINANT_COLOR) 
                    }
                }
            }
        }
    `);

    return data.allDatoCmsHabitacion.nodes.map(habitacion =>(
        {
            titulo: habitacion.titulo,
            id: habitacion.id,
            contenido: habitacion.contenido,
            slug: habitacion.slug,
            imagen: habitacion.imagen,
        
        }
    ));

    //Destructuring        
    //const { id, titulo, contenido, slug, imagen }

   
}

export default useHabitaciones;