import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import VentanaEmergente from '../components/VentanaEmergente'
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import ImagenGastosHormiga from '../assets/img/GastosHormiga.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const RastreaTusCentavos = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);
  const [pasoActivo, setPasoActivo] = useState(1);

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
        content='¡Empieza a tomar el control de tus finanzas diarias!'/>
      <title>Opciones Sacimex - Rastrea tus centavos</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Titulo
            texto='Rastrea tus centavos'/>
          <TextoImagenContenedor>
            <StyledP>Nuestra calculadora interactiva te ayuda a rastrear y controlar esos pequeños gastos que suman con el tiempo. 
              ¡Empieza a tomar el control de tus finanzas diarias y ahorra para tus metas más grandes!</StyledP>
            <Imagen
              tamano='300px'
              imagen={ImagenGastosHormiga}
              alt='Gastos hormiga'/>
          </TextoImagenContenedor>
          <IndicadorDePasosContenedor>
            <IndicadorDePasos
              $activo={pasoActivo === 1}>
              <span>1</span>
            </IndicadorDePasos>
            <IndicadorDePasos
              $activo={pasoActivo === 2}>
              <span>2</span>
            </IndicadorDePasos>
            <IndicadorDePasos
              $activo={pasoActivo === 3}>
              <span>3</span>
            </IndicadorDePasos>
          </IndicadorDePasosContenedor>
          <TextoPasos>¿Cuánto es tu ingreso mensual?</TextoPasos>
          <StyledInput
            type='number'/>
          <StyledButton><AiOutlineArrowRight/></StyledButton>
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

export default RastreaTusCentavos;

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

const TextoImagenContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  color: #000000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  padding: 0 30px;
  text-align: justify;
  width: 100%;
`;

const IndicadorDePasosContenedor = styled.div`
  display: flex;
  gap: 10px;
`;

const IndicadorDePasos = styled.div`
  background-color: ${({ $activo }) => $activo ? '#F5A200' : '#FFFFFF'};
  ${({ $activo }) => !$activo && ('border: 2px solid #F5A200;')}
  border-radius: 50%;
  display: grid;
  height: 50px;
  place-items: center;
  transition: background .3s, border .3s;
  width: 50px;

  span {
    color: #00632F;
    font-family: 'Presidencia Firme', sans-serif;
    font-size: 1em;
  };
`;

const TextoPasos = styled.p`
  color: #005520;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.125em;
  letter-spacing: 1px;
`;

const StyledInput = styled.input`
  appearance: textfield;
  border: 1px solid #005520;
  border-radius: 25px;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  outline: #00632F;
  padding: 10px 25px;
  text-align: right;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  };
`;

const StyledButton = styled.button`
  background-color: #00632F;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25em;
  padding: 9px 18px;
`;
