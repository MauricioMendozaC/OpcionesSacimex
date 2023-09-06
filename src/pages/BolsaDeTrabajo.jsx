import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import OportunidadesDeCarrera from '../assets/img/OportunidadesDeCarrera.svg';

const BolsaDeTrabajo = () => {
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
      <title>Opciones Sacimex - Oportunidades de carrera</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
        <Titulo texto='Oportunidades'/>
        <ImagenTextoContenedor>
          <ContenedorTextos>
            <Parrafo>Explora nuestras oportunidades y únete a nosotros en el camino hacia el éxito mutuo. Tu 
            próximo paso profesional comienza aquí.</Parrafo>
            <StyledH4>Si te interesa alguna de nuestras oportunidades laborales, por favor comunícate con nuestro equipo de 
            Desarrollo Humano.</StyledH4>
            <BotonDesarrolloHumano href='/EnviaUnMensaje'>Envía un mensaje</BotonDesarrolloHumano>
          </ContenedorTextos>
          <Imagen
            tamano='300px'
            imagen={OportunidadesDeCarrera}/>
        </ImagenTextoContenedor>
        <iframe title='w' src="https://docs.google.com/document/d/e/2PACX-1vQmO2z78J0fjh9FU6IGCjEMVChAtX3a3ErKLDye3-XtirdXd4EJRyrBwKMOn3LvsSNaJdblNv-inQYZ/pub?embedded=true"></iframe>
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

export default BolsaDeTrabajo;

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

  p {
    font-family: 'Presidencia Fina', sans-serif;
  };

  iframe {
    border: none;
    height: 500px;
    width: 100%;
  };
`;

const ImagenTextoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const ContenedorTextos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 300px;
  width: calc(100% - 310px);
`;

const Parrafo = styled.p`
  color: #000000;
  font-size: 1.125em;
  text-align: justify;
  width: 100%;

  b {
    color: #005520;
  };
`;

const StyledH4 = styled.h4`
  color: #00632F;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;
  width: 100%;
`;

const BotonDesarrolloHumano = styled.a`
  background-color: #F5A200;
  border: none;
  border-radius: 5px;
  color: #004410;
  cursor: pointer;
  font-family: 'Presidencia Firme';
  font-size: 1em;
  padding: 9px 18px;
  text-decoration: none;
  transition: transform .3s;
  
  &:hover {
    transform: scale(105%);
  };
`;