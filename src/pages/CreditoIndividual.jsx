import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Imagen from '../components/Imagen';
import Titulo from '../components/Titulo';
import DatosCreditosIndividuales from '../components/CreditoIndividual/DatosCreditosIndividuales';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import Foto3 from '../assets/img/Foto3.jpg';
import SaciMotor from '../assets/img/SaciMotor.png';
import SaciCrece from '../assets/img/SaciCrece.png';
import { greenSacimex, yellowSacimex, whiteSacimex, text, disabled, smaLength1, smaLength2, smaLength3, medLength1,
  medLength2, medLength3, larLength3, smaFont } from '../utils/stylesRules';

const CreditoIndividual = () => {
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
        content='Obtén el impulso financiero que necesitas con nuestros créditos individuales en Opciones Sacimex.'/>
      <title>Opciones Sacimex - Créditos individuales</title>
      <link href="https://fonts.googleapis.com/css2?family=Kalam&family=Marck+Script&family=Pacifico&display=swap" rel="stylesheet"/>
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
            imagen={Foto3}
            alt='Frutería Sacimex'
            mostrarAnimaciones={mostrarAnimaciones}
            extras={imgExtras}/>
          <TextsContainer>
            <Titulo texto='Crédito individual'/>
            <StyledP>En <b>Opciones Sacimex</b>, obtén los mejores créditos individuales para alcanzar tus objetivos 
              financieros. ¡Logra tus metas personales con nuestro respaldo financiero a tu medida!</StyledP>
          </TextsContainer>
      </PrincipalContenedor>
      <InformacionYBotones>
            <Botones>
              <BotonCredito
                $activo={creditoActivo === 1}
                onClick={() => setCreditoActivo(1)}>
                  Saci-Motor
              </BotonCredito>
              <BotonCredito
                $activo={creditoActivo === 2}
                onClick={() => setCreditoActivo(2)}>
                  Saci-Crece
              </BotonCredito>
              <BotonCredito
                $activo={creditoActivo === 3}
                onClick={() => setCreditoActivo(3)}>
                  Línea Sacimex
              </BotonCredito>
              <BotonSaci href='/SaciAlianza'>
                  Saci-Alianza
              </BotonSaci>
            </Botones>
            <Informacion>
              {creditoActivo === 1 && (<>
                <Imagen
                  tamano={larLength3}
                  imagen={SaciMotor}
                  alt='Saci-Motor'/>
              </>)}
              {creditoActivo === 2 && (<>
                <Imagen
                  tamano={larLength3}
                  imagen={SaciCrece}
                  alt='Saci-Crece'/>
              </>)}
              <DatosCreditosIndividuales creditoActivo={creditoActivo}/>
            </Informacion>
          </InformacionYBotones>
    </CentrarPrincipalContenedor>
    <Footer
      setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}/>
  </>);
};

export default CreditoIndividual;

const imgExtras = `
  clip-path: circle(95% at 12% 4%);

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
  flex-wrap: wrap;
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

const BotonSaci = styled.a`
  background-color: ${yellowSacimex};
  border-radius: 3px;
  color: ${text};
  ${({ $activo }) => !$activo && 'cursor: pointer;'};  
  font-size: ${smaFont};
  font-weight: 800;
  padding: ${smaLength1} ${smaLength2};
  text-decoration: none;
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