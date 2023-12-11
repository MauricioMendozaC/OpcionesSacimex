import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import {greenSacimex, yellowSacimex, smaLength1, smaLength2, medLength3, larFont} from '../utils/stylesRules';

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

const PrincipalContenedor = styled.h2`
  color: ${({ $color }) => $color ? ($color) : greenSacimex};
  font-size: ${larFont};
  margin: auto;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding-bottom: ${smaLength2};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  white-space: nowrap;
  width: auto;

  &:before {
    background-color: ${yellowSacimex};
    content: '';
    display: block;
    height: 3px;
    margin-bottom: ${smaLength1};
    transition: width 2s;
    width: ${({ $visible }) => $visible ? medLength3 : '0'};
  };

  &:after {
    background-color: ${yellowSacimex};
    bottom: 0;
    content: '';
    display: block;
    height: 3px;
    margin-bottom: 5px;
    position: absolute;
    right: 0;
    transition: width 2s;
    width: ${({ $visible }) => $visible ? medLength3 : '0'};
  };
`;