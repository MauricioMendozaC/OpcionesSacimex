import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import BranchesWithVacancies from '../components/OportunidadesDeCarrera/BranchesWithVacancies';
import Vacancies from '../components/OportunidadesDeCarrera/Vacancies';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor, BloquearScroll } from '../utils/estilosPages';
import OportunidadesDeCarrera from '../assets/img/OportunidadesDeCarrera.svg';

const BolsaDeTrabajo = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [windowState, setWindowState] = useState(null);
  const [jobVacancies, setJobVacancies] = useState([]);
  const [branches, setBranches] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);
  const [activeBranch, setActiveBranch] = useState(null);

  const elementToScroll = useRef(null);

  useEffect(() => {
    fetchDbJobVacancies();
    fetchDbBranches();
    fetchDbProfiles();
    setMostrarAnimaciones(true);
  }, []);

  const fetchDbJobVacancies = () => {
    fetch('./json/DbJobVacancies.json')
      .then( res => res.json() )
        .then( res => setJobVacancies(res) );
  };

  const fetchDbBranches = () => {
    fetch('./json/DbBranches.json')
      .then( res => res.json() )
        .then( res => setBranches(res) );
  };

  const fetchDbProfiles = () => {
    fetch('./json/DbProfiles.json')
      .then( res => res.json() )
        .then( res => setProfiles(res) );
  };

  const scrollToElement = () => {
    if (elementToScroll.current) {
      const offset = 30;
      const elementPosition = elementToScroll.current.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return(<>
    <EstilosGlobales/>
    <BloquearScroll $evitarScroll={windowState}/>
    <Helmet>
      <meta
        name='description'
        content='Explora nuestras oportunidades de trabajo y únete a nosotros en el camino hacia el éxito mutuo.'/>
      <title>Opciones Sacimex - Oportunidades de carrera</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
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
        
        {branches !== null && (
        <Tabla ref={elementToScroll}>
          <BranchesWithVacancies
            branches={branches}
            jobVacancies={jobVacancies}
            activeBranch={activeBranch}
            setActiveBranch={setActiveBranch}
            scrollToElement={scrollToElement}/>
          <Vacancies
            activeBranch={activeBranch}
            jobVacancies={jobVacancies}
            branches={branches}
            setWindowState={setWindowState}
            setVacanteSeleccionada={setVacanteSeleccionada}/>
        </Tabla>
        )}
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}
      vacanteSeleccionada={vacanteSeleccionada}
      jobVacancies={jobVacancies}
      profiles={profiles}/>
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

const Tabla = styled.div`
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
`;

