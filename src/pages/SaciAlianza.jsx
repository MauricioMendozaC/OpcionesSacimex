import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Boton from '../components/Boton';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import paso1 from '../assets/img/Paso1.png';
import paso2 from '../assets/img/Paso2.png';
import paso3 from '../assets/img/Paso3.png';
import paso4 from '../assets/img/Paso4.png';
import { greenSacimex, text, label, smaLength1, medLength1, medLength2, medLength3, larLength1, larLength3, smaFont, medFont } from '../utils/stylesRules';

const SolicitaCredito  = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [windowState, setWindowState] = useState(null);

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
      <Titulo texto='Saci-Alianza'/>
      <Parrafo $mostrarAnimaciones={mostrarAnimaciones}>
        Opciones Sacimex ofrece un programa único de alianzas con empresas para facilitar el acceso a créditos de manera rápida y 
        segura, simplificando el proceso para que los empleados puedan alcanzar sus metas financieras con comodidad.
      </Parrafo>
      <SubTitulo $mostrarAnimaciones={mostrarAnimaciones}>¡Consigue tu crédito en cuatro sencillos pasos!</SubTitulo>
      <PasosContenedor $mostrarAnimaciones={mostrarAnimaciones}>
        <Paso>
          <PasoTitulo>1. Ingresa a SaciAlianza</PasoTitulo>
          <Imagen
            tamano={larLength1}
            imagen={paso1}/>
          <PasoTexto>Inicia tu proceso ingresando a nuestra página <LinkSaci href='http://convenio.opcionessacimex.com/'>Saci-Alianza</LinkSaci>.</PasoTexto>
        </Paso>
        <Paso>
          <PasoTitulo>2. Completa tu solicitud en línea.</PasoTitulo>
          <Imagen
            tamano={larLength1}
            imagen={paso2}/>
          <PasoTexto>Proporciona tus datos a través de un formulario en línea.</PasoTexto>
        </Paso>
        <Paso>
          <PasoTitulo>3.  Elige una forma de contacto.</PasoTitulo>
          <Imagen
            tamano={larLength1}
            imagen={paso3}/>
          <PasoTexto>Elige una forma de contacto para que uno de nuestros asesores se comunique contigo.</PasoTexto>
        </Paso>
        <Paso>
          <PasoTitulo>4.  Recibe tu dinero rápidamente.</PasoTitulo>
          <Imagen
            tamano={larLength1}
            imagen={paso4}/>
          <PasoTexto>Una vez que el asesor haya revisado la solicitud y aprobado el crédito, el último paso es recibir el 
            dinero solicitado.</PasoTexto>
        </Paso>
      </PasosContenedor>
      <Boton
        amarillo
        texto='Inicia aquí'
        referencia='http://convenio.opcionessacimex.com/'/>
      <TextoFinal $padding>Si tu empresa tiene antigüedad mayor a tres años, con más de 10 empleados y te gustaría que ofreciera este 
      beneficio a los trabajadores ¡Comunícate con nosotros!</TextoFinal>
    </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}/>
  </>);
};

export default SolicitaCredito;

const PrincipalContenedor = styled.div`
  align-items: center;  
  display: flex;
  flex-direction: column;
  gap: ${medLength3};
  justify-content: center;
  margin-top: ${medLength3};
  max-width: 990px;
  padding: ${medLength1} 0;
  width: 100%;
`;

const SubTitulo = styled.h3`
  color: ${text};
  font-size: ${medFont};
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  text-align: center;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const PasosContenedor = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength2};
  list-style: none;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 0 ${medLength1};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${medLength2};
  };
`;

const Paso = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength1};
  width: ${larLength3};
`;

const PasoTitulo = styled.h4`
  color: ${text};
  font-size: ${smaFont};
  font-weight: 400;
  text-align: center;
`;

const PasoTexto = styled.p`
  color: ${label};
  font-size: ${smaFont};
  text-align: center;
`;

const LinkSaci = styled.a`
  color: ${greenSacimex};
`;

const Parrafo = styled.p`
  color: ${text};
  font-size: ${smaFont};
  max-width: 800px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  text-align: justify;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 90%;
`;

const TextoFinal = styled.p`
  color: ${label};
  font-size: ${smaFont};
  font-weight: 800;
  padding: 0 ${medLength1};
  text-align: center;
`;