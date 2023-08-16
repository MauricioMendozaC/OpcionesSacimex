import { useState, useEffect } from 'react';
import Section from '../Section';
import SliderTitulos from './SliderTitulos';
import Imagen from '../Imagen';
import styled from 'styled-components';
import Foto2 from '../../assets/img/Foto1.jpg';
import Foto1 from '../../assets/img/Foto2.jpg';

const Presentacion = ({ mostrarAnimaciones }) => {
  const [imagenActual, setImagenActual] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prevValue) => {
        if(prevValue === 2) return 1;
        else return 2;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);


  const textos = [
    '¡Créditos rápidos, oportunidades ahora!',
    '¡Créditos personales, cumple tus proyectos!',
    '¡Nunca es tarde para iniciar tu negocio!',
    '¡Créditos grupales, juntos hacia el éxito!'  
  ];

  return(
    <Section
      presentacion>
        <Diagonal/>
        <TitulosContenedor>
          <Titulo
            $mostrarAnimaciones={mostrarAnimaciones}>
            <SliderTitulos
              textos={textos}/>
          </Titulo>
        </TitulosContenedor>      
        <Imagen
          tamano='100%'
          imagen={Foto1}
          alt='Negocio nuevo'
          extras={imagenActual === 1 ? (extrasActivo) : (extrasInactivo)}
          extrasImg='height: 100%;'/>
        <Imagen
          tamano='100%'
          imagen={Foto2}
          alt='Negocio nuevo'
          extras={imagenActual === 2 ? (extrasActivo) : (extrasInactivo)}
          extrasImg='height: 100%;'/>
    </Section>
  );
};

export default Presentacion;

const Diagonal = styled.div`
  background-color: #00632F;
  background-image: linear-gradient(0deg, #00632F 50%, #257140 50%);
  background-size: 40px 40px;
  border-top: 3px solid #FFF;
  bottom: -100px;
  box-shadow: 0px -10px 27px 0px rgba(0,0,0,0.75);
  height: 65%;
  opacity: 1;
  position: absolute;
  transform: skewY(-10deg);
  width: 100%;
  z-index: 2;
  -moz-box-shadow: 0px -10px 27px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px -10px 27px 0px rgba(0,0,0,0.75);

  @media (min-width: 768px) {
    backdrop-filter: blur( 4px );
    background: rgba( 0, 99, 47, 0.8 );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-bottom: none;
    border-radius: 10px;
    height: 100%;
    left: 0;
    max-width: 500px;
    top: 0;
    transform: skewY(0);
    width: 40%;
    -webkit-backdrop-filter: blur( 4px );
  };

  @media (min-width: 1200px) {
    left: 50px;
  };
`;

const TitulosContenedor = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 50%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 10;

  @media (min-width: 768px) {
    height: 100%;
    left: 0;
    max-width: 500px;
    top: 0;
    width: 40%;
  };

  @media (min-width: 1200px) {
    left: 50px;
  };
`;

const Titulo = styled.div`
  align-items: center;
  background-color: #F5A200;
  box-shadow: 0px 10px 27px 0px rgba(0,0,0,0.75);
  display: flex;
  height: 120px;
  justify-content: center;
  letter-spacing: 1px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  text-align: center;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
  -moz-box-shadow: 0px 10px 27px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 10px 27px 0px rgba(0,0,0,0.75);  

  @media (min-width: 768px) {
    border-radius: 10px;
    font-size: 1.75em;
    padding: 30px 20px;
    height: 160px;
  };

  @media (max-width: 300px) {
    font-size: 1.375em;
  };
`;

const extrasActivo = `
  height: 60%;
  left: 50%;
  max-width: 1200px;
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate(-50%, 0);
  transition: opacity 2s;
  z-index: 1;

  @media (min-width: 768px) {
    box-shadow: 10px -5px 27px 0px rgba(0,0,0,0.75);
    height: 100%;
    -moz-box-shadow: 10px -5px 27px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px -5px 27px 0px rgba(0,0,0,0.75);
  };
`;

const extrasInactivo = `
  height: 60%;
  left: 50%;
  max-width: 1200px;
  opacity: 0;
  position: fixed;
  top: 0;
  transform: translate(-50%, 0);
  transition: opacity 2s;
  z-index: 1;  

  @media (min-width: 768px) {
    height: 100%;
  };
`;