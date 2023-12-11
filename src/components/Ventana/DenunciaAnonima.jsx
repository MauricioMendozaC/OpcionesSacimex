import { useState } from 'react';
import styled from 'styled-components';
import { greenSacimex, yellowSacimex, whiteSacimex, text, label, smaLength1, smaLength2, smaLength3, medLength1,
        medLength3, smaFont, medFont } from '../../utils/stylesRules';

const DenunciaAnonima = () => {
  const [stateInp1, setStateInp1] = useState('vacio');
  const [stateInp2, setStateInp2] = useState('vacio');

  const manejarInput = input => {
    const value = input.value.trim();

    if(input.id === 'denuncia-1') {
      if(value === '') setStateInp1('vacio');
      else setStateInp1('completo');
    };

    if(input.id === 'denuncia-2') {
      if(value === '') setStateInp2('vacio');
      else setStateInp2('completo');
    };
  };

  return(<>
    <Texto>
      <StyledH3>Tu denuncia será totalmente anónima.</StyledH3>
      <Parrafo>En nuestra sección de denuncias anónimas, tienes el poder de exponer cualquier conducta inapropiada. 
        Tu confidencialidad está garantizada mientras trabajamos juntos para mantener nuestra comunidad honesta y segura.</Parrafo>
    </Texto>
    <ContenedorInputs>
      <SpanInputContenedor>
        <StyledSpan
          $isFocus={stateInp1 === 'focus'}
          $isVacio={stateInp1 === 'vacio'}
          $isCompleto={stateInp1 === 'completo'}>
            Motivo de la denuncia
        </StyledSpan>
        <StyledInput
          id='denuncia-1'
          type='text'
          onFocus={() => setStateInp1('focus')}
          onBlur={ev => manejarInput(ev.target)}/>
      </SpanInputContenedor>
      <SpanInputContenedor>
        <StyledSpan
          $isFocus={stateInp2 === 'focus'}
          $isVacio={stateInp2 === 'vacio'}
          $isCompleto={stateInp2 === 'completo'}>
            Descripción detallada de la denuncia
        </StyledSpan>
        <StyledTextArea
          id='denuncia-2'
          onFocus={() => setStateInp2('focus')}
          onBlur={ev => manejarInput(ev.target)}/>
      </SpanInputContenedor>
      <StyledButton>Enviar</StyledButton>
    </ContenedorInputs>
  </>);
};

export default DenunciaAnonima;

const Texto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength2};
  padding: ${medLength3} ${smaLength3};
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: ${text};
  font-size: ${medFont};
  text-align: center;
`;

const Parrafo = styled.p`
  font-size: ${smaFont};
  text-align: center;
  width: 100%;
`;

const ContenedorInputs = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength1};
  width: 100%;
`;

const SpanInputContenedor = styled.div`
  position: relative;
  width: 90%;
`;

const StyledInput = styled.input`
  border: 2px solid ${label};
  border-radius: 25px;
  font-size: ${smaFont};
  outline: none;
  padding: ${smaLength1} ${smaLength2};
  transition: border .3s;
  width: 100%;

  &:focus {
    border: 2px solid ${yellowSacimex};
  };
`;

const StyledSpan = styled.span`
  background-color: ${whiteSacimex};
  font-size: ${smaFont};
  left: ${smaLength2};
  padding: 0 ${smaLength1};
  pointer-events: none;
  position: absolute;
  transition: color .3s, transform .3s, border .3s, top .3s;

  ${({ $isVacio }) => $isVacio && (`
    border-left: 2px solid ${whiteSacimex};
    border-right: 2px solid ${whiteSacimex};
    top: 10px;
  `)}

  ${({ $isFocus }) => $isFocus && (`
    border-left: 2px solid ${yellowSacimex};
    border-right: 2px solid ${yellowSacimex};
    color: ${greenSacimex};
  `)}

  ${({ $isCompleto }) => $isCompleto && (`
    border-left: 2px solid ${label};
    border-right: 2px solid ${label};
  `)}

  ${({ $isFocus, $isCompleto }) => ($isFocus || $isCompleto) && (`
    transform: scale(80%);
    top: -12px;
  `)}

  ${({ $isVacio, $isCompleto }) => ($isVacio || $isCompleto) && (`
    color: ${label};
  `)}
`;

const StyledTextArea = styled.textarea`
  border: 2px solid ${label};
  border-radius: 25px;
  font-size: 1em;
  height: 150px;
  outline: none;
  padding: 10px 20px;
  resize: none;
  transition: border .3s;
  width: 100%;

  &:focus {
    border: 2px solid ${yellowSacimex};
  };
`;

const StyledButton = styled.button`
  background-color: ${yellowSacimex};
  border: none;
  border-radius: 5px;
  color: ${text};
  cursor: pointer;
  font-size: ${smaFont};
  font-weight: 800;
  padding: ${smaLength1} ${smaLength2};
  transition: transform .3s;

  &:hover {
    transform: scale(105%);
  };
`;