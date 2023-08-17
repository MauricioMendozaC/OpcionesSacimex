import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from "styled-components";

const AnimacionEntradaBoton = ({ children, referencia, sacialianza }) => {
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
    <PrincipalContenedor
      $visible={isVisible}
      href={referencia}
      $sacialianza={sacialianza}
      $verde={true}
      ref={targetRef}>
        {children}
    </PrincipalContenedor>
  );
};

const Boton = ({ texto, referencia, sacialianza }) => {
  return(
    <AnimacionEntradaBoton 
      referencia={referencia}
      sacialianza={sacialianza}>
        {texto}
    </AnimacionEntradaBoton>
  );
};

export default Boton;

const PrincipalContenedor = styled.a`
  background-color: ${({ $sacialianza }) => $sacialianza ? '#F5A200' : '#257140'};
  border-radius: 3px;
  color: ${({ $sacialianza }) => $sacialianza ? '#005217' : '#FFFFFF'};
  cursor: pointer;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 0.875em;
  letter-spacing: 1px;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding: 9px 18px;
  text-decoration: none;
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: background .2s, opacity 2s, transform 2s;

  &:hover {
    background-color: ${({ $sacialianza }) => $sacialianza ? '#D38000' : '#005520;'}
  };
`;