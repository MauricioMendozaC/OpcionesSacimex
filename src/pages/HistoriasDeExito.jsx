import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo'
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import Constructor from '../assets/img/Constructor.svg';
import {greenSacimex, text, smaLength1, medLength1, medLength3, smaFont, medFont } from '../utils/stylesRules';

const HistoriasDeExito = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [windowState, setWindowState] = useState(null);

  useEffect( () => {
    setMostrarAnimaciones(true);
  },[]);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  return(<>
    <EstilosGlobales $evitarScroll={evitarScroll}/>
    <Helmet>
      <meta
        name='description'
        content='¿Necesitas un experto en construcción, diseño, reparaciones o más? ¡Estás en el lugar adecuado!'/>
      <title>Opciones Sacimex - Red de profesionales</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
        <Titulo texto='Historias de éxito'/>
        <ImagenTextoContenedor>
          <Imagen
            tamano='300px'
            imagen={Constructor}
            alt='Oficios y profesiones'/>
          <Parrafo>En <b>Opciones Sacimex</b>, creemos que cada trayectoria es un testimonio valioso. Por eso compartimos los 
          logros alcanzados por nuestros clientes a través del tiempo. Únete a nosotros para celebrar estos 
          triunfos y descubrir la inspiración que yace en cada camino recorrido.</Parrafo>
        </ImagenTextoContenedor>
        <StyledP>Pronto podrás encontrar tu historia aquí.</StyledP>
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}/>
  </>);
};

export default HistoriasDeExito;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength1};
  justify-content: flex-start;
  margin-top: ${medLength3};
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: ${medLength1} ${medLength1} ${medLength3};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 880px) {
    padding: ${medLength1} 0 ${medLength3};
  };
`;

const ImagenTextoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${smaLength1};
  justify-content: center;
`;

const Parrafo = styled.p`
  color: ${text};
  font-size: ${smaFont};
  min-width: 300px;
  text-align: center;
  width: calc(100% - 300px - ${smaLength1});

  b {
    color: ${greenSacimex};
  };
`;

const StyledP = styled.p`
  color: ${text};
  font-size: ${medFont};
  text-align: center;
  width: 90%;
`;