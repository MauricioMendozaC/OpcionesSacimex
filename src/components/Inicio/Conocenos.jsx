import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import Section from '../Section';
import Titulo from '../Titulo';
import Valores from './Valores';
import Imagen from '../Imagen';
import misionLogo from '../../assets/img/MisionLogo.png';
import visionLogo from '../../assets/img/VisionLogo.png';
import { greenSacimex, text, smaLength3, larLength1, smaFont, medFont } from '../../utils/stylesRules';

const AnimacionEntradaSucursales = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <InfoExtraContenedor
      id={id}
      $visible={isVisible}
      ref={targetRef}>
        {children}
    </InfoExtraContenedor>
  );
};

const Conocenos = () => {

  return(
    <Section id='conocenos'>
        <Titulo texto='Conócenos'/>
        <AnimacionEntradaSucursales>
          <SubTitulo>Sobre Opciones Sacimex.</SubTitulo>
          <Texto>Somos una Sociedad Financiera de Objeto Múltiple (SOFOM) con un enfoque especial en brindar apoyo financiero 
            a comunidades con limitado acceso al sector. Desde nuestro inicio con tres sucursales el 3 de Septiembre de 2008, 
            hemos crecido para estar cerca de ti con 12 unidades de negocio en Oaxaca y Puebla.<br/><br/>Nuestra prioridad es tu 
            tranquilidad, por eso operamos bajo la atenta inspección y vigilancia de la CNBV (<i>Comisión Nacional Bancaria y 
            de Valores</i>) y CONDUSEF (<i>Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios 
            Financieros</i>), asegurando un camino financiero sólido y confiable para ti y aquellos cercanos a ti.</Texto>
        </AnimacionEntradaSucursales>
        <AnimacionEntradaSucursales id='valores'>
          <SubTitulo>Valores que nos unen</SubTitulo>
          <Valores/>
        </AnimacionEntradaSucursales>
        <AnimacionEntradaSucursales>
          <SubTitulo>Nuestra misión.</SubTitulo>
          <MisionVision>
            <ImagenContenedor>
              <Imagen
                tamano={larLength1}
                imagen={misionLogo}
                alt='Misión de Sacimex'/>
            </ImagenContenedor>
            <MisionVisionTexto>Somos una financiera comprometida a impulsar con responsabilidad el bienestar económico de 
              nuestros clientes, mediante el otorgamiento de créditos accesibles ofertados con calidez humana, tecnología 
              adaptable y ambiente financieros con principios.</MisionVisionTexto>
          </MisionVision>
        </AnimacionEntradaSucursales>      
        <AnimacionEntradaSucursales>
          <SubTitulo>Nuestra visión.</SubTitulo>
          <MisionVision>
            <MisionVisionTexto $alinearDerecha>
              En comunión con nuestros colaboradores, ser una financiera importante en el mercado, líder en procesos de 
              calidad, responsabilidad social, ambiente laboral sano y crecimiento financiero de nuestros clientes.
            </MisionVisionTexto>
            <ImagenContenedor>
              <Imagen
                tamano={larLength1}
                imagen={visionLogo}
                alt='Visión de Sacimex'/>
            </ImagenContenedor>
          </MisionVision>   
        </AnimacionEntradaSucursales>
    </Section>
  );
};

export default Conocenos;

const InfoExtraContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  height: auto;
  max-width: 820px;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const SubTitulo = styled.h3`
  color: ${greenSacimex};
  font-size: ${medFont};
  font-weight: 400;
`;

const Texto = styled.p`
  color: ${text};
  font-size: ${smaFont};
  text-align: justify;
  width: 90%;
`;

const MisionVision = styled.div`
  align-items: center;
  display: flex;
  width: 90%;
`;

const ImagenContenedor = styled.div`
  display: grid;
  place-items: center;
  width: 30%;
`;

const MisionVisionTexto = styled.p`
  color: ${text};
  font-size: ${smaFont};
  text-align: justify;
  width: 70%;

  @media (min-width: 768px) {
    text-align: ${({ $alinearDerecha }) => $alinearDerecha ? 'right' : 'left'};
  };
`;