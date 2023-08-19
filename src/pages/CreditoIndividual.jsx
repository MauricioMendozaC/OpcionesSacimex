import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Imagen from '../components/Imagen';
import Titulo from '../components/Titulo';
import DatosCreditosIndividuales from '../components/CreditoIndividual/DatosCreditosIndividuales';
import Footer from '../components/Footer';
import VentanaEmergente from '../components/VentanaEmergente';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import Foto3 from '../assets/img/Foto3.jpg';
import SaciMotor from '../assets/img/SaciMotor.png';
import SaciCrece from '../assets/img/SaciCrece.png';

const CreditoIndividual = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [creditoActivo, setCreditoActivo] = useState(1);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);

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
            mostrarAnimaciones={mostrarAnimaciones}/>
          <FiltroTitulo>
            <Titulo
              color='#FFF'
              texto='Crédito individual'/>
          </FiltroTitulo>
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
                  tamano='200px'
                  imagen={SaciMotor}
                  alt='Saci-Motor'/>
              </>)}
              {creditoActivo === 2 && (<>
                <Imagen
                  tamano='200px'
                  imagen={SaciCrece}
                  alt='Saci-Crece'/>
              </>)}
              <DatosCreditosIndividuales creditoActivo={creditoActivo}/>
            </Informacion>
          </InformacionYBotones>
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

export default CreditoIndividual;

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
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 0.875em;
  letter-spacing: 1px;
  padding: 5px 10px;
  transition: background .3s;
`;

const BotonSaci = styled.a`
  background-color: ${({ $activo }) => $activo ? '#FFFFFF' : '#F5A200'};
  border: none;
  border-radius: 3px 3px 0 0;
  color: #005520;
  cursor: pointer;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 0.875em;
  letter-spacing: 1px;
  padding: 5px 10px;
  text-decoration: none;
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