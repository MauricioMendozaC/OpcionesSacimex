import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderTitulos = ({ textos }) => {
  const [indexTextoActual, setIndexTextoActual] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndexTextoActual((prevIndex) => (prevIndex + 1) % textos.length);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [indexTextoActual, textos.length]);

  return (
    <PrincipalContenedor>
      {textos[indexTextoActual]}
    </PrincipalContenedor>
  );
};

export default SliderTitulos;

const PrincipalContenedor = styled.h1`
  color: #FFF;
  display: grid;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 2em;
  height: 200px;
  place-items: center;

  @media (min-width: 768px) {
    font-size: 1em;
  };
`;


