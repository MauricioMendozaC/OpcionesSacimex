import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import Imagen from '../Imagen';
import honestidadImagen from '../../assets/img/Honestidad.png';
import respetoImagen from '../../assets/img/Respeto.png';
import compromisoImagen from '../../assets/img/Compromiso.png';

const AnimacionEntradaValor = ({ children }) => {
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
    <Valor 
      $visible={isVisible}
      ref={targetRef}>
        {children}
    </Valor>
  );
};

const Valores = () => {
  return(
    <PrincipalContenedor>
      <AnimacionEntradaValor>
        <ValorTitulo>Honestidad</ValorTitulo>
        <Imagen
          tamano='100px'
          imagen={honestidadImagen}
          alt='Honestidad'
          visible/>
        <TextoValor>Te ofrecemos transparencia financiera en cada paso. Tu confianza es nuestra prioridad.</TextoValor>
      </AnimacionEntradaValor>
      <AnimacionEntradaValor>
        <ValorTitulo>Compromiso</ValorTitulo>
        <Imagen
          tamano='100px'
          imagen={compromisoImagen}
          alt='Compromiso'
          visible/>
        <TextoValor>Trabajamos incansablemente para lograr tus metas financieras, porque tu éxito es nuestro objetivo.</TextoValor>
      </AnimacionEntradaValor>
      <AnimacionEntradaValor>
        <ValorTitulo>Respeto</ValorTitulo>
        <Imagen
          tamano='100px'
          imagen={respetoImagen}
          alt='Respeto'
          visible/>
        <TextoValor>Valoramos tus necesidades y te brindamos soluciones adaptadas a ti, con el respeto que mereces.</TextoValor>
      </AnimacionEntradaValor>
    </PrincipalContenedor>
  );
};

export default Valores;

const PrincipalContenedor = styled.div`
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  max-width: 1000px;
  width: 90%;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 0;
    justify-content: space-around;
  };
`;

const Valor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 40%;
`;

const ValorTitulo = styled.h3`
  color: #000;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
`;

const TextoValor = styled.p`
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
  text-align: center;
`;