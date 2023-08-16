import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import VentanaEmergente from '../components/VentanaEmergente'; 
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import SapaoLogo from '../assets/img/SapaoLogo.png';

const Servicios = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);

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
        content='Contamos con una gama de servicios diseñados para brindarte una experiencia completa.'/>
      <title>Opciones Sacimex - Servicios</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Titulo texto='Servicios'/>
          <StyledH3>En nuestras sucursales, te ofrecemos la posibilidad de pagar por los siguientes servicios:</StyledH3>
          <Imagen
            tamano='250px'
            imagen={SapaoLogo}
            alt='Logo de Sapao'/>
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setEstadoAviso={setEstadoAviso}
      evitarScroll={manejarScroll}/>
    <VentanaEmergente
        estadoAviso={estadoAviso}
        setEstadoAviso={setEstadoAviso}
        evitarScroll={manejarScroll}/>
  </>);
};

export default Servicios;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 30px 0 60px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: #00632F;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;
  width: 95%;
`;