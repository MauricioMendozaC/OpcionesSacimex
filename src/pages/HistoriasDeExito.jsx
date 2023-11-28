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
  gap: 30px;
  justify-content: flex-start;
  margin-top: 60px;
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 30px 30px 60px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 880px) {
    padding: 30px 0 60px;
  };
`;

const ImagenTextoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Parrafo = styled.p`
  min-width: 300px;
  text-align: justify;
  width: calc(100% - 310px);

  b {
    color: #005520;
  };
`;

const StyledP = styled.p`
  color: #00632F;
  font-size: 1.25em;
  font-weight: 400;
  text-align: center;
  width: 90%;
`;