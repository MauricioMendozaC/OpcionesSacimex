import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Presentacion from '../components/Inicio/Presentacion';
import Productos from '../components/Inicio/Productos';
import Conocenos from '../components/Inicio/Conocenos';
import Sucursales from '../components/Inicio/Contacto';
import Footer from '../components/Footer';
import VentanaEmergente from '../components/VentanaEmergente';

const Inicio = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);

  useEffect( () => {
    setMostrarAnimaciones(true);
  },[]);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  return (<>
    <GlobalStyle $evitarScroll={evitarScroll}/>
    <Helmet>
      <meta
        name='description'
        content='Impulsando tu bienestar económico con créditos accesibles y calidez humana. Descubre nuestras opciones de 
        créditos y servicios adaptados a tus necesidades.'/>
      <title>Opciones Sacimex</title>
    </Helmet>
    <PrincipalContenedor>
      <Header
        mostrarAnimaciones={mostrarAnimaciones}
        evitarScroll={manejarScroll}/>
      <Presentacion
        mostrarAnimaciones={mostrarAnimaciones}/>            
      <Productos/>
      <Conocenos/>
      <Sucursales/>
      <Footer
          setEstadoAviso={setEstadoAviso}
          evitarScroll={manejarScroll}/>
      <VentanaEmergente
        estadoAviso={estadoAviso}
        setEstadoAviso={setEstadoAviso}
        evitarScroll={manejarScroll}/>
    </PrincipalContenedor>
  </>);
}

export default Inicio;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Presidencia Fina';
    src: url('/fonts/PresidenciaFina.otf') format('truetype');
  }

  @font-face {
    font-family: 'Presidencia Firme';
    src: url('/fonts/PresidenciaFirme.otf') format('truetype');
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }  
  
  body {
    background: repeating-linear-gradient( -45deg, #257140, #257140 2px, #00632F 2px, #00632F 10px );
    font-size: 20px;
    ${({ $evitarScroll }) => $evitarScroll && ('overflow: hidden;overscroll-behavior: none;')}
  } 
`;

const PrincipalContenedor = styled.div`
  width: 100%;
`;