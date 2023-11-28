import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import DatosCreditosGrupales from '../components/CreditoGrupal/DatosCreditosGrupales';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import somosCredito from '../assets/img/SomosCredito.png';
import DamasCredito from '../assets/img/Damas.png';
import EllaSabiduria from '../assets/img/ELLA.png'
import FotoGrupal from '../assets/img/FotoGrupal.jpg';

const CreditoGrupal = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [creditoActivo, setCreditoActivo] = useState(1);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [windowState, setWindowState] = useState(null);

  useEffect( () => {
    setMostrarAnimaciones(true);
  },[]);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  return(<>
    <EstilosGlobales $evitarScroll={evitarScroll} $fondoGris/>
    <Helmet>
      <meta
        name='description'
        content='Potencia tus proyectos con créditos grupales en Opciones Sacimex.'/>
      <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script:wght@700&family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
      <title>Opciones Sacimex - Créditos grupales</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
            <Imagen
              tamano='100%'
              imagen={FotoGrupal}
              alt='Crédito grupal Sacimex'
              extras='max-width: 820px;'
              mostrarAnimaciones={mostrarAnimaciones}/>
          <FiltroTitulo>
            <Titulo
              color='#FFF'
              texto='Crédito grupal'/>
          </FiltroTitulo>
      </PrincipalContenedor>
      <InformacionYBotones>
            <Botones>
              <BotonCredito
                $activo={creditoActivo === 1}
                onClick={() => setCreditoActivo(1)}>
                  Ella-Sabiduría
              </BotonCredito>
              <BotonCredito
                $activo={creditoActivo === 2}
                onClick={() => setCreditoActivo(2)}>
                  Da-más crédito
              </BotonCredito>
              <BotonCredito
                $activo={creditoActivo === 3}
                onClick={() => setCreditoActivo(3)}>
                  Somos crédito
              </BotonCredito>
            </Botones>
            <Informacion>
              {creditoActivo === 3 && (<>
                <Imagen
                  tamano='200px'
                  imagen={somosCredito}
                  alt='Somos crédito'/>
              </>)}
              {creditoActivo === 2 && (<>
                <Imagen
                  tamano='200px'
                  imagen={DamasCredito}
                  alt='Da-Más crédito'/>
              </>)}
              {creditoActivo === 1 && (<>
                <Imagen
                  tamano='200px'
                  imagen={EllaSabiduria}
                  alt='Ella-Sabiduría'/>
              </>)}
              <DatosCreditosGrupales creditoActivo={creditoActivo}/>
            </Informacion>
          </InformacionYBotones>
    </CentrarPrincipalContenedor>
    <Footer
      setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}/>
  </>)
};

export default CreditoGrupal;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding-bottom: 30px;
  position: relative;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const FiltroTitulo = styled.div`
  background: linear-gradient(0deg, rgba(0,99,47,1) 0%, rgba(0,99,47,1) 18%, rgba(0,99,47,0.25262605042016806) 100%);
  bottom: 35px;
  height: 80px;
  padding-top: 10px;
  position: absolute;
  width: 100%;
`;

const InformacionYBotones = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 820px;
  width: 100%;
`;

const Botones = styled.div`
  display: flex;
  gap: 10px;
`;

const BotonCredito = styled.button`
  background-color: ${({ $activo }) => $activo ? '#FFFFFF' : '#F5A200'};
  border: none;
  border-radius: 3px 3px 0 0;
  color: #005520;
  cursor: pointer;
  font-size: 0.875em;
  font-weight: 700;
  padding: 5px 10px;
  transition: background .3s;
`;

const Informacion = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  width: 100%;
`;