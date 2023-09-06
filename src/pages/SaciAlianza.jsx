import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Boton from '../components/Boton';
import Footer from '../components/Footer';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import paso1 from '../assets/img/Paso1.png';
import paso2 from '../assets/img/Paso2.png';
import paso3 from '../assets/img/Paso3.png';
import paso4 from '../assets/img/Paso4.png';

const SolicitaCredito  = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);
  const [estadoDenuncia, setEstadoDenuncia] = useState(false);
  const [estadoUNE, setEstadoUNE] = useState(false);

  useEffect( () => {
    setMostrarAnimaciones(true);
  },[]);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  return(<>
    <EstilosGlobales $evitarScroll={evitarScroll}/>
    <Helmet>
      <meta
        name='description'
        content='Obtén el respaldo financiero que necesitas con nuestro crédito individual Saci-Alianza de Opciones Sacimex.'/>
      <title>Opciones Sacimex - Saci-Alianza</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
    <PrincipalContenedor>
      <Titulo
        color='#00632F'
        texto='Saci-Alianza'
        padding='0 20px'/>
      <Parrafo
        $mostrarAnimaciones={mostrarAnimaciones}>
          Opciones Sacimex ofrece un programa único de alianzas con empresas para facilitar el acceso a créditos de manera rápida y 
          segura, simplificando el proceso para que los empleados puedan alcanzar sus metas financieras con comodidad.
      </Parrafo>
      <SubTitulo $mostrarAnimaciones={mostrarAnimaciones}>¡Consigue tu crédito en cuatro sencillos pasos!</SubTitulo>
      <PasosContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Paso>
            <PasoTitulo>1. Ingresa a SaciAlianza</PasoTitulo>
            <Imagen
              tamano='100px'
              imagen={paso1}/>
            <PasoTexto>Inicia tu proceso ingresando a nuestra página <LinkSaci href='http://convenio.opcionessacimex.com/'>Saci-Alianza</LinkSaci>.</PasoTexto>
          </Paso>
          <Paso>
            <PasoTitulo>2. Completa tu solicitud en línea.</PasoTitulo>
            <Imagen
              tamano='100px'
              imagen={paso2}/>
            <PasoTexto>Proporciona tus datos a través de un formulario en línea.</PasoTexto>
          </Paso>
          <Paso>
            <PasoTitulo>3.  Elige una forma de contacto.</PasoTitulo>
            <Imagen
              tamano='100px'
              imagen={paso3}/>
            <PasoTexto>Elige una forma de contacto para que uno de nuestros asesores se comunique contigo.</PasoTexto>
          </Paso>
          <Paso>
            <PasoTitulo>4.  Recibe tu dinero rápidamente.</PasoTitulo>
            <Imagen
              tamano='100px'
              imagen={paso4}/>
            <PasoTexto>Una vez que el asesor haya revisado la solicitud y aprobado el crédito, el último paso es recibir el 
              dinero solicitado.</PasoTexto>
          </Paso>
      </PasosContenedor>
      <Boton
        texto='Inicia aquí'
        referencia='http://convenio.opcionessacimex.com/'/>
      <PasoTitulo $padding>Si tu empresa tiene antigüedad mayor a tres años, con más de 10 empleados y te gustaría que ofreciera este 
      beneficio a los trabajadores ¡Comunícate con nosotros!</PasoTitulo>
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

export default SolicitaCredito;

const PrincipalContenedor = styled.div`
  align-items: center;  
  display: flex;
  flex-direction: column;
  gap: 70px;
  justify-content: center;
  margin-top: 60px;
  max-width: 820px;
  padding: 30px 0;
  width: 100%;
`;

const SubTitulo = styled.h3`
  color: #257140;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  text-align: center;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const PasosContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 0 30px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  };
`;

const Paso = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
`;

const PasoTitulo = styled.h4`
  color: #257140;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 0.875em;
  letter-spacing: 1px;
  ${({ $padding }) => $padding && ('padding: 0 30px;')}
  text-align: center;
`;

const PasoTexto = styled.p`
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
  text-align: center;
`;

const LinkSaci = styled.a`
  color: #F5A200;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
`;

const Parrafo = styled.p`
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
  max-width: 800px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  text-align: justify;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 90%;
`;