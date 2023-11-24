import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from "styled-components";

const AnimacionEntradaBoton = ({ children, referencia, amarillo, newBlank }) => {
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
      target={newBlank && ('_blank')}
      rel={newBlank && ('noopener noreferrer')}
      $visible={isVisible}
      href={referencia}
      $amarillo={amarillo}
      ref={targetRef}>
        {children}
    </PrincipalContenedor>
  );
};

const Boton = ({ texto, referencia, amarillo, newBlank }) => {
  return(
    <AnimacionEntradaBoton 
      referencia={referencia}
      amarillo={amarillo}
      newBlank={newBlank}>
        {texto}
    </AnimacionEntradaBoton>
  );
};

export default Boton;

const PrincipalContenedor = styled.a`
  background-color: ${({ $amarillo }) => $amarillo ? '#F5A200' : '#257140'};
  border-radius: 3px;
  color: ${({ $amarillo }) => $amarillo ? '#005217' : '#FFFFFF'};
  cursor: pointer;
  font-size: 0.875em;
  font-weight: 700;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding: 9px 18px;
  text-decoration: none;
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: background .2s, opacity 2s, transform 2s;

  &:hover {
    background-color: ${({ $amarillo }) => $amarillo ? '#D38000' : '#005520;'}
  };
`;