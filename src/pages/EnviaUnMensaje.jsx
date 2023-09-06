import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo'
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { validarNombre, validarEmail, validarMensaje } from '../utils/enviarCorreo';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import DHO from '../assets/img/DHO.jpg';

const EnviaUnMensaje = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);
  const [stateInp1, setStateInp1] = useState('vacio');
  const [stateInp2, setStateInp2] = useState('vacio');
  const [stateInp3, setStateInp3] = useState('vacio');
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [error3, setError3] = useState(null);
  const [enviado, setEnviado] = useState(false);
  const [estadoDenuncia, setEstadoDenuncia] = useState(false);
  const [estadoUNE, setEstadoUNE] = useState(false);

  useEffect( () => {
    setMostrarAnimaciones(true);
  },[]);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  const manejarInput = input => {
    const value = input.value.trim();

    if(input.id === '1') {
      if(value === '') setStateInp1('vacio');
      else setStateInp1('completo');
    };

    if(input.id === '2') {
      if(value === '') setStateInp2('vacio');
      else setStateInp2('completo');
    };

    if(input.id === '3') {
      if(value === '') setStateInp3('vacio');
      else setStateInp3('completo');
    };
  };

  const manejarClick = async () => {
    setError1(validarNombre().error);
    setError2(validarEmail().error);
    setError3(validarMensaje().error);

    if(validarNombre().valido && validarEmail().valido && validarMensaje().valido){
      const data = {
        nombre: validarNombre().dato,
        correo: validarEmail().dato,
        mensaje: validarMensaje().dato,
      };

      try {
        const response = await fetch('https://web.opcionessacimex.com/php/enviar-correo.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        console.log(result);
      } catch (error) {};

      document.getElementById('1').value = '';
      document.getElementById('2').value = '';
      document.getElementById('3').value = '';

      setEnviado(true);
      setInterval(() => setEnviado(false), 10000);
    };
  };

  return(<>
    <EstilosGlobales $evitarScroll={evitarScroll}/>
    <Helmet>
      <meta
        name='description'
        content=' Nuestro equipo de Desarrollo Humano está aquí para ayudarte.'/>
      <title>Opciones Sacimex - Envía un mensaje a DHO</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
        <Titulo texto='Envia un mensaje'/>
        <ImagenTextoContenedor>
          <Imagen
            tamano='300px'
            imagen={DHO}
            alt='Desarrollo Humano y Organizacional'/>
          <Parrafo>En <b>Opciones Sacimex</b>, creemos en el poder del desarrollo humano para impulsar el éxito de todos. 
          ¿Tienes preguntas, ideas o estás buscando oportunidades de crecimiento? Nuestro equipo de Desarrollo Humano está aquí 
          para ayudarte.</Parrafo>
        </ImagenTextoContenedor>
        <StyledH4>Completa los campos a continuación con tus datos y déjanos un mensaje.</StyledH4>
        <ContenedorInputs autoComplete='off'>
          <SpanInputContenedor>
            <StyledSpan
              $isFocus={stateInp1 === 'focus'}
              $isVacio={stateInp1 === 'vacio'}
              $isCompleto={stateInp1 === 'completo'}>
                Nombre
            </StyledSpan>
            <StyledInput
              id='1'
              type='text'
              onFocus={() => setStateInp1('focus')}
              onBlur={ev => manejarInput(ev.target)}/>
            <MensajeError>{error1}</MensajeError>
          </SpanInputContenedor>
          <SpanInputContenedor>
            <StyledSpan
              $isFocus={stateInp2 === 'focus'}
              $isVacio={stateInp2 === 'vacio'}
              $isCompleto={stateInp2 === 'completo'}>
                Correo electrónico
            </StyledSpan>
            <StyledInput
              id='2'
              type='text'
              onFocus={() => setStateInp2('focus')}
              onBlur={ev => manejarInput(ev.target)}/>
            <MensajeError>{error2}</MensajeError>
          </SpanInputContenedor>
          <SpanInputContenedor>
            <StyledSpan
              $isFocus={stateInp3 === 'focus'}
              $isVacio={stateInp3 === 'vacio'}
              $isCompleto={stateInp3 === 'completo'}>
                Escribe tu mensaje
            </StyledSpan>
            <StyledTextArea
              id='3'
              onFocus={() => setStateInp3('focus')}
              onBlur={ev => manejarInput(ev.target)}/>
            <MensajeError>{error3}</MensajeError> 
          </SpanInputContenedor>
        </ContenedorInputs>
        <MensajeEnviado $activo={enviado}>
          <AiOutlineCheckCircle/>
          <span>Mensaje enviado</span>
        </MensajeEnviado>
        <StyledButton onClick={manejarClick}>Enviar</StyledButton>
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      estadoAviso={estadoAviso}
      estadoDenuncia={estadoDenuncia}
      estadoUNE={estadoUNE}
      setEstadoUNE={setEstadoUNE}
      setEstadoAviso={setEstadoAviso}
      evitarScroll={manejarScroll}
      setEstadoDenuncia={setEstadoDenuncia}
      manejarScroll={manejarScroll}/>
  </>);
};

export default EnviaUnMensaje;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  margin-top: 60px;
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 30px 30px 60px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 880px) {
    padding: 30px 0 60px;
  };

  p {
    font-family: 'Presidencia Fina', sans-serif;
  };
`;

const ImagenTextoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Parrafo = styled.p`
  color: #000000;
  font-size: 1em;
  min-width: 300px;
  text-align: justify;
  width: calc(100% - 310px);

  b {
    color: #005520;
  };
`;

const StyledH4 = styled.h4`
  color: #00632F;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;
  width: 90%;
`;

const ContenedorInputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
  width: 100%;
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

const SpanInputContenedor = styled.div`
  position: relative;
  width: 100%;
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

const MensajeError = styled.p`
  color: red;
  font-size: 1em;
  text-align: center;
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

const MensajeEnviado = styled.div`
  align-items: center;
  background-color: #00B85D;
  color: #FFF;
  border-radius: 25px;
  display: flex;
  gap: 15px;
  height: 50px;
  ${({ $activo }) => !$activo && ('opacity: 0;')}
  padding: 0 15px;
  ${({ $activo }) => !$activo && ('transform: scale(0);')}
  transition: transform .3s, opacity .3s;

  span {
    font-family: 'Presidencia Firme', sans-serif;
    font-size: 1em;
  };
`;