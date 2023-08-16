import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import Section from '../Section';
import Titulo from '../Titulo';
import Sucursal from './Sucursal';
import { datosSucursales } from '../../utils/datos';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

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
    <Section
      id='contacto'
      background='#EFEFEF'>
        <Titulo
          texto='Contacto'/>
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

const SeccionSucursal = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 820px;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding: 10px;
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

const Flecha = styled.div`
  background-color: #F5A200;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  font-size: 16px;
  height: 25px;
  place-items: center;
  transition: transform .3s;
  width: 25px;

  &:hover {
    transform: scale(105%);
  };
`;