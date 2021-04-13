import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Header from './header';
import Footer from './footer';
import useSeo from '../hooks/use-seo';

const Layout = props => {

    const seo = useSeo();

    const { siteName, fallbackSeo: { description, title } } = seo;

    return (
        <>
            {/* Estilos globales de la aplicación */}
            <Global 
                styles={css`

                    *, *:before, *:after  {
                        box-sizing: inherit;
                    } 

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }

                    h1 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    a {
                        &:visited {
                            color: unset;
                        }
                    }
                `}
            />

            {/* Helmet es el componente que simula la etiqeuta <head> en un documento html normal, es aqui donde se puede configurar toda la metadata de la página/proyecto */}
            <Helmet>
                <title>{title
                }</title>
                <meta name="description" content={description}/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                
            </Helmet>

            <Header siteName={siteName}/>
            {props.children}
            <Footer title={title}/>
        </>
    );
};

export default Layout;