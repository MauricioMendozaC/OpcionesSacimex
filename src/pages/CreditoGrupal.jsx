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
import { greenSacimex, yellowSacimex, whiteSacimex, text, disabled, smaLength1, smaLength2, smaLength3, medLength1,
        medLength2, medLength3, larLength3, smaFont } from '../utils/stylesRules';

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
    <EstilosGlobales $evitarScroll={evitarScroll}/>
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
          <TextsContainer>            
            <Titulo texto='Crédito grupal'/>
            <StyledP>Descubre en <b>Opciones Sacimex</b> los mejores créditos grupales para comunidades unidas. ¡Transforma
            tus metas en realidad con nuestros créditos compartidos y apoyo financiero comunitario!</StyledP>
          </TextsContainer>
          <Imagen
            tamano='100%'
            imagen={FotoGrupal}
            alt='Crédito grupal Sacimex'
            extras={imgExtras}
            mostrarAnimaciones={mostrarAnimaciones}/>
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
              tamano={larLength3}
              imagen={somosCredito}
              alt='Somos crédito'/>
          </>)}
          {creditoActivo === 2 && (<>
            <Imagen
              tamano={larLength3}
              imagen={DamasCredito}
              alt='Da-Más crédito'/>
          </>)}
          {creditoActivo === 1 && (<>
            <Imagen
              tamano={larLength3}
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

const imgExtras = `
  clip-path: circle(95% at 88% 4%);

  @media (min-width: 550px) {
    width: 80%;
  };

  @media (min-width: 850px) {
    width: 50%;
  };
`;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: ${smaLength3};
  justify-content: center;
  margin-top: ${medLength3};
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding-bottom: ${medLength1};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 850px) {
    gap: 0;
  };
`;

const TextsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  width: 100%;

  @media (min-width: 850px) {
    width: 50%;
  };
`;

const StyledP = styled.p`
  color: ${text};
  font-size: ${smaFont};
  padding: 0 ${smaLength3};
  text-align: center;

  @media (min-width: 850px) {
    padding: 0;
  };

  b {
    color: ${greenSacimex};
  };
`;

const InformacionYBotones = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${medLength1};
  max-width: 820px;
  width: 100%;
`;

const Botones = styled.div`
  display: flex;
  gap: ${smaLength1};
`;

const BotonCredito = styled.button`
  background-color: ${({ $activo }) => $activo ? whiteSacimex : yellowSacimex};
  border: ${({ $activo }) => $activo ? `1px solid ${disabled}` : 'none'};
  border-radius: 3px;
  color: ${text};
  ${({ $activo }) => !$activo && 'cursor: pointer;'};  
  font-size: ${smaFont};
  font-weight: 800;
  padding: ${smaLength1} ${smaLength2};
  transition: background .3s;
`;

const Informacion = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength2};
  padding: ${smaLength3};
  width: 100%;
`;