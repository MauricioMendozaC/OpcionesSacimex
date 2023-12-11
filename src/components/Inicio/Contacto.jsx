import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import Section from '../Section';
import Titulo from '../Titulo';
import Sucursal from './Sucursal';
import { datosSucursales } from '../../utils/datos';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import { yellowSacimex, smaLength1, smaLength3, smaFont } from '../../utils/stylesRules';

const AnimacionEntradaSucursales = ({ children }) => {
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
    <SeccionSucursal
      $visible={isVisible}
      ref={targetRef}>
        {children}
    </SeccionSucursal>
  );
};

const Sucursales = () => {
  const[indexActivo, setIndexActivo] = useState(null);

  const usarClick = index => {
    if(indexActivo === index) setIndexActivo(null);
    else setIndexActivo(index);
  };

  return(
    <Section id='contacto'>
        <Titulo texto='Contacto'/>
        <AnimacionEntradaSucursales>
            {datosSucursales.map( (item, index) => (item.tipo === 2 || item.tipo === 3) && (
              <Sucursal
                key={index}
                nombre={item.nombre}
                direccion={item.direccion}
                ubicacion={item.ubicacion}
                telefono1={item.telefono1}
                telefono2={item.telefono2}
                email={item.email}
                activo={indexActivo === index}>
                  {indexActivo === index && (<Flecha onClick={() => usarClick(index)}><BsChevronDoubleUp/></Flecha>)}
                  {indexActivo !== index && (<Flecha onClick={() => usarClick(index)}><BsChevronDoubleDown/></Flecha>)}
              </Sucursal>
            ))} 
        </AnimacionEntradaSucursales>
        <AnimacionEntradaSucursales>
            {datosSucursales.map( (item, index) => item.tipo === 1 && (
              <Sucursal
                key={index}
                nombre={item.nombre}
                direccion={item.direccion}
                ubicacion={item.ubicacion}
                telefono1={item.telefono1}
                telefono2={item.telefono2}
                email={item.email}
                activo={indexActivo === index}>
                  {indexActivo === index && (<Flecha onClick={() => usarClick(index)}><BsChevronDoubleUp/></Flecha>)}
                  {indexActivo !== index && (<Flecha onClick={() => usarClick(index)}><BsChevronDoubleDown/></Flecha>)}
              </Sucursal>
            ))} 
        </AnimacionEntradaSucursales>
    </Section>
  );
};

export default Sucursales;

const SeccionSucursal = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  max-width: 820px;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding: ${smaLength1};
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 80%;  

  @media (min-width: 1000px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  };
`;

const Flecha = styled.button`
  background-color: ${yellowSacimex};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  font-size: ${smaFont};
  height: ${smaLength3};
  place-items: center;
  transition: transform .3s;
  width: ${smaLength3};

  &:hover {
    transform: scale(105%);
  };
`;