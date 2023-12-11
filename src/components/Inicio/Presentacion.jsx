import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Section from '../Section';
import Imagen from '../Imagen';
import Foto1 from '../../assets/img/Foto1.png';
import Foto2 from '../../assets/img/Foto2.png';
import {greenSacimex, yellowSacimex, whiteSacimex,
  text, label, disabled,
  smaLength1, smaLength2, smaLength3,
  medLength1, medLength2, medLength3,
  larLength1, larLength2, larLength3,
  smaFont, medFont, larFont} from '../../utils/stylesRules';

const Presentacion = ({ mostrarAnimaciones }) => {
  const [imagenActual, setImagenActual] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prevValue) => {
        if(prevValue === 2) return 1;
        else return 2;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return(
    <Section presentation>
      <PrincipalContainer>
        <Imagen
          tamano='45%'
          imagen={imagenActual === 1 ? (Foto1) : (Foto2)}
          extras={extras}/>
        <TextsContainer>
          <StyledH1>Opciones Sacimex.</StyledH1>
          <StyledH2>Tu crédito de confianza.</StyledH2>
        </TextsContainer> 
      </PrincipalContainer>      
    </Section>
  );
};

export default Presentacion;

const extras = `
  min-width: 350px;
`;

const PrincipalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  padding-top: ${smaLength1};
  width: 100%;
`;

const TextsContainer = styled.div`
  align-items: end;
  background-color: ${whiteSacimex};
  display: flex;
  flex-direction: column;
  gap: ${smaLength1};
  padding-right: ${smaLength2};  
  width: 100%;

  @media (min-width: 670px) {
    width: 45%;
  };
`;

const StyledH1 = styled.h1`
  color: ${greenSacimex};
  font-size: ${medLength1};
  text-align: center;

  @media (min-width: 955px) {
    font-size: ${medLength2};
  };

  @media (min-width: 1260px) {
    font-size: ${medLength3};
  };
`;

const StyledH2 = styled.h2`
  color: ${label};
  font-size: ${smaLength2};
  text-align: center;

  @media (min-width: 955px) {
    font-size: ${smaLength3};
  };

  @media (min-width: 1260px) {
    font-size: ${medLength1};
  };
`;