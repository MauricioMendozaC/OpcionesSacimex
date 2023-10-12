import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Vacantes from '../components/OportunidadesDeCarrera/Vacantes';
import InfoVacante from '../components/OportunidadesDeCarrera/InfoVacante';
import Footer from '../components/Footer';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import OportunidadesDeCarrera from '../assets/img/OportunidadesDeCarrera.svg';
import { AiFillCloseCircle } from 'react-icons/ai';

const BolsaDeTrabajo = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);
  const [estadoDenuncia, setEstadoDenuncia] = useState(false);
  const [estadoUNE, setEstadoUNE] = useState(false);
  const [estadoInfoVacantes, setInfoVacantes] = useState(false);
  const [vacanteActiva, setVacanteActiva] = useState(0);
  const [vacantes, setVacantes] = useState([]);
  const [infoMostrada, setInfoMostrada] = useState(1);

  useEffect(() => {
    fetch('./json/datosVacantes.json')
      .then( res => res.json() )
        .then( res => setVacantes(res) )
  }, []);

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
        content='Explora nuestras oportunidades de trabajo y únete a nosotros en el camino hacia el éxito mutuo.'/>
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
          </ContenedorTextos>
          <Imagen
            tamano='300px'
            imagen={OportunidadesDeCarrera}/>
        </ImagenTextoContenedor>
        <Vacantes
          vacantes={vacantes}
          setInfoVacantes={setInfoVacantes}
          setVacanteActiva={setVacanteActiva}/>
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Hoja $mostrar={estadoInfoVacantes}>
      <BotonCerrarPosicionador>
        <BotonCerrarContenedor onClick={() => {setInfoVacantes(false); setInfoMostrada(1)}}>
          <AiFillCloseCircle/>
        </BotonCerrarContenedor>
      </BotonCerrarPosicionador>
      <DegradadoFinal/>
      <ContenedorTexto>
        <InfoVacante
          info={vacantes[vacanteActiva]}
          infoMostrada={infoMostrada}
          setInfoMostrada={setInfoMostrada}/>
      </ContenedorTexto>
    </Hoja>
    <Opacidad
      $mostrar={estadoInfoVacantes}
      onClick={() => {setInfoVacantes(false); setInfoMostrada(1)}}/>
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

const Hoja = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  height: 100vh;
  left: ${({ $mostrar }) => $mostrar ? '0' : '-500px'};
  max-width: 500px;
  overflow: auto;
  position: fixed;
  top: 0;
  transition: left .3s;
  width: 100%;
  z-index: 120;
`;

const BotonCerrarPosicionador = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%);
  border-radius: 10px;
  display: grid;
  height: 40px;
  max-width: 500px;
  padding-right: 15px;
  place-items: center end;
  position: fixed;
  top: 0;
  width: 100%;
`;

const BotonCerrarContenedor = styled.button`
  background-color: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 16px;
`;

const DegradadoFinal = styled.div`
  background: linear-gradient(0, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%);
  border-radius: 0 0 10px 10px;
  bottom: 0;
  height: 40px;
  max-width: 500px;
  position: fixed;
  width: 100%;
`;

const Opacidad = styled.div`
  background-color: rgba(52, 58, 64, 0.6);
  height: 100vh;
  left: 0;
  opacity: ${({ $mostrar }) => $mostrar ? '1' : '0'};
  position: fixed;
  top: 0;
  transform: scale(${({ $mostrar }) => $mostrar ? '100%' : '0'});
  transition: opacity .3s;
  width: 100%;
  z-index: 110;
`;

const ContenedorTexto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  width: 100%;
`;