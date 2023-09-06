import { useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

const DenunciaAnonima = ({ estadoDenuncia, setEstadoDenuncia, evitarScroll }) => {
  const [stateInp1, setStateInp1] = useState('vacio');
  const [stateInp2, setStateInp2] = useState('vacio');

  const usarClickCerrar = () => {
    setEstadoDenuncia(false);
    evitarScroll(false);
  };

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
    <Opacidad
      onClick={usarClickCerrar}
      $mostrarAviso={estadoDenuncia}/>
    <Hoja
      $mostrarAviso={estadoDenuncia}>
        <BotonCerrarPosicionador>
          <BotonCerrarContenedor
            onClick={usarClickCerrar}>
              <AiFillCloseCircle/>
          </BotonCerrarContenedor>
        </BotonCerrarPosicionador>
        <Texto>
          <StyledH3>Tu denuncia será totalmente anónima.</StyledH3>
          <Parrafo>En nuestra sección de denuncias anónimas, tienes el poder de exponer cualquier conducta inapropiada. 
            Tu confidencialidad está garantizada mientras trabajamos juntos para mantener nuestra comunidad honesta y segura.
          </Parrafo>
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
    </Hoja>
  </>);
};

export default DenunciaAnonima;

const Opacidad = styled.div`
  background-color: rgba(52, 58, 64, 0.6);
  height: 100vh;
  opacity: ${({ $mostrarAviso }) => $mostrarAviso ? '1' : '0'};
  position: fixed;
  right: ${({ $mostrarAviso }) => $mostrarAviso ? '0' : 'calc(0px - 100vw)'};
  top: 0;
  transition: right .3s, opacity .3s;
  width: calc(100vw - 500px);
  z-index: 101;
`;

const Hoja = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  height: 100vh;
  left: ${({ $mostrarAviso }) => $mostrarAviso ? '0' : '-500px'};
  max-width: 500px;
  opacity: ${({ $mostrarAviso }) => $mostrarAviso ? '1' : '0'};
  position: fixed;
  top: 0;
  transition: left .3s, opacity .3s;
  width: 100%;
  z-index: 101;
`;

const BotonCerrarPosicionador = styled.div`
  background: linear-gradient(180deg, rgba(250,255,247,1) 0%, rgba(250,255,247,1) 65%, rgba(250,255,247,0) 100%);
  border-radius: 10px;
  display: grid;
  height: 40px;
  max-width: 500px;
  padding-right: 15px;
  place-items: center end;
  position: fixed;
  top: 0;
  width: 100%;
`;

const BotonCerrarContenedor = styled.button`
  background-color: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 16px;
`;

const Texto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 60px 20px;
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: #00632F;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.25em;
  text-align: center;
`;

const Parrafo = styled.p`
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  text-align: justify;
  width: 100%;
`;

const ContenedorInputs = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const SpanInputContenedor = styled.div`
  position: relative;
  width: 90%;
`;

const StyledInput = styled.input`
  border: 2px solid #AAA;
  border-radius: 25px;
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  outline: none;
  padding: 10px 20px;
  transition: border .3s;
  width: 100%;

  &:focus {
    border: 2px solid #DC9100;
  };
`;

const StyledSpan = styled.span`
  background-color: #FFF;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  left: 20px;
  padding: 0 5px;
  pointer-events: none;
  position: absolute;
  transition: color .3s, transform .3s, border .3s, top .3s;

  ${({ $isVacio }) => $isVacio && (`
    border-left: 2px solid #FFF;
    border-right: 2px solid #FFF;
    top: 10px;
  `)}

  ${({ $isFocus }) => $isFocus && (`
    border-left: 2px solid #DC9100;
    border-right: 2px solid #DC9100;
    color: #DC9100;
  `)}

  ${({ $isCompleto }) => $isCompleto && (`
    border-left: 2px solid #AAA;
    border-right: 2px solid #AAA;
  `)}

  ${({ $isFocus, $isCompleto }) => ($isFocus || $isCompleto) && (`
    transform: scale(80%);
    top: -12px;
  `)}

  ${({ $isVacio, $isCompleto }) => ($isVacio || $isCompleto) && (`
    color: #AAA;
  `)}
`;

const StyledTextArea = styled.textarea`
  border: 2px solid #AAA;
  border-radius: 25px;
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  height: 150px;
  outline: none;
  padding: 10px 20px;
  resize: none;
  transition: border .3s;
  width: 100%;

  &:focus {
    border: 2px solid #DC9100;
  };
`;

const StyledButton = styled.button`
  background-color: #F5A200;
  border: none;
  border-radius: 5px;
  color: #004410;
  cursor: pointer;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1em;
  padding: 9px 18px;
  transition: transform .3s;

  &:hover {
    transform: scale(105%);
  };
`;