import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';

const AnimacionEntradaTitulo = ({ children, color, padding }) => {
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
      $padding={padding}
      $color={color}
      ref={targetRef}>
        {children}
    </PrincipalContenedor>
  );
};

const Titulo = ({texto, padding, color, mostrarAnimaciones}) => {
  return(
    <AnimacionEntradaTitulo
      padding={padding}
      color={color}>
        {texto}
    </AnimacionEntradaTitulo>
  );
};

export default Titulo;

const PrincipalContenedor = styled.h3`
  color: ${({ $color }) => $color ? ($color) : '#005520'};
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.625em;
  letter-spacing: 1px;
  margin: auto;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding-bottom: 13px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  white-space: nowrap;
  width: auto;

  &:before {
    background-color: #F5A200;
    content: '';
    display: block;
    height: 3px;
    margin-bottom: 5px;
    transition: width 2s;
    width: ${({ $visible }) => $visible ? '75px' : '0'};
  };

  &:after {
    background-color: #F5A200;
    bottom:0;
    content: '';
    display: block;
    height: 3px;
    margin-bottom: 0.25em;
    position:absolute;
    right:0;
    transition: width 2s;
    width: ${({ $visible }) => $visible ? '75px' : '0'};
  };
`;