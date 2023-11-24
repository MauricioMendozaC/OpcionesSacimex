import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo'
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import Constructor from '../assets/img/Constructor.svg';

const RedDeProfesionales = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);
  const [estadoDenuncia, setEstadoDenuncia] = useState(false);
  const [estadoUNE, setEstadoUNE] = useState(false);

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
        <Titulo texto='Red de oficios'/>
        <ImagenTextoContenedor>
          <Imagen
            tamano='300px'
            imagen={Constructor}
            alt='Oficios y profesiones'/>
          <Parrafo>En <b>Opciones Sacimex</b>, creemos en la importancia de reconocer y respaldar las habilidades y conocimientos 
            únicos que cada individuo aporta a su comunidad, es por eso que hemos decidido formalizar una red de las diversas 
            profesiones y oficios de nuestros clientes y no clientes para impulsar su trayectoria y bienestar al siguiente 
            nivel.</Parrafo>
        </ImagenTextoContenedor>
        <StyledH4>¿Listo para destacar tu profesión u oficio en tu localidad? ¡Completa el formulario y forma parte de nuestra comunidad!</StyledH4>
        
          <StyledIframe src="https://docs.google.com/forms/d/e/1FAIpQLSeThs1njygICIaPId2eol2Pnx9L_0MHspCcXGoMb7wOhbhNjQ/viewform?embedded=true" width="640" height="873" frameborder="0" marginheight="0" marginwidth="0">Cargando…</StyledIframe>
        
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      estadoAviso={estadoAviso}
      estadoDenuncia={estadoDenuncia}
      estadoUNE={estadoUNE}
      setEstadoUNE={setEstadoUNE}
      setEstadoAviso={setEstadoAviso}
      evitarScroll={manejarScroll}
      setEstadoDenuncia={setEstadoDenuncia}
      manejarScroll={manejarScroll}/>
  </>);
};

export default RedDeProfesionales;

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

const StyledH4 = styled.h4`
  color: #00632F;
  font-size: 1.25em;
  font-weight: 400;
  text-align: center;
  width: 90%;
`;

const StyledIframe = styled.iframe`
  max-width: 820px;
  width: 100%;
`;