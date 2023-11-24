import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import Section from '../Section';
import Titulo from '../Titulo';
import Imagen from '../Imagen';
import Boton from '../Boton';
import saciAlianza from '../../assets/img/SaciAlianza.png';
import creditoGrupalLogo from '../../assets/img/CreditoGrupalT.png';
import creditoIndividualLogo from '../../assets/img/CreditoIndividualT.png';

const AnimacionEntradaProductos = ({ children }) => {
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
    <ProductoContenedor $visible={isVisible} ref={targetRef}>
      {children}
    </ProductoContenedor>
  );
};

const Productos = () => {

  return(
    <Section
      id='productos'
      background='#FFFFFF'>
        <Titulo
          color='#00632f'
          texto='Productos'/>
        <Contenido>
          <Contenido
            $centrarSaciAlianza>
              <AnimacionEntradaProductos>              
                <TituloCredito>Saci-Alianza</TituloCredito>                
                <Imagen
                  tamano='100px'
                  imagen={saciAlianza}
                  alt='Saci-Alianza'/>                         
                <Texto>¡Inicia tu trámite de crédito hoy mismo y accede a las oportunidades financieras que necesitas!</Texto>                
                <Boton
                  texto='Conoce más'
                  referencia='/SaciAlianza'/>
              </AnimacionEntradaProductos>
              <AnimacionEntradaProductos>
                <TituloCredito>Crédito grupal.</TituloCredito>
                <Imagen
                  tamano='100px'
                  imagen={creditoGrupalLogo}
                  alt='Crédito grupal'/>
                <Texto>Brindamos soluciones financieras a grupos de personas comprometidas con actividades productivas.</Texto>
                <Boton
                  texto='Conoce más'
                  referencia='/CreditoGrupal'
                  verde/>
              </AnimacionEntradaProductos>
          </Contenido>
          <AnimacionEntradaProductos>
            <TituloCredito>Crédito individual.</TituloCredito>
            <Imagen
              tamano='100px'
              imagen={creditoIndividualLogo}
              alt='Crédito individual'/>
            <Texto>Disfruta de tasas fijas durante todo el plazo de tu crédito. Además, te ofrecemos plazos flexibles de hasta 24 meses.</Texto>
            <Boton
              texto='Conoce más'
              referencia='/CreditoIndividual'
              verde/>
          </AnimacionEntradaProductos>
        </Contenido>
    </Section>
  );
};

export default Productos;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 820px;

  @media (min-width: 768px) {
    flex-direction: ${({ $centrarSaciAlianza }) => $centrarSaciAlianza ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
    justify-content: center;
  };

  @media (min-width: 1000px) {
    flex-direction: ${({ $centrarSaciAlianza }) => $centrarSaciAlianza ? 'row-reverse' : 'row'};
  };
`;

const ProductoContenedor = styled.div`
  align-items: center;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding: 0 10px;
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 200px;
`;

const TituloCredito = styled.h3`
  color: #00632F;
  font-size: 1em;
  text-align: center;
`;

const Texto = styled.p`
  color: #257140;
  font-size: 0.875em;
  text-align: center;
`;