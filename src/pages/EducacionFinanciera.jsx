import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import ImagenEducacion from '../assets/img/EducacionFinanciera.jpg';
import PreviewInclusionFinancieraDeLasMujeres from '../assets/img/PreviewInclusionFinancieraDeLasMujeres.jpg';
import PreviewConsejosParaElRegresoAClases from '../assets/img/PreviewConsejosParaElRegresoAClases.jpg';
import PreviewFinanzasJovenes from '../assets/img/PreviewFinanzasJovenes.jpg';
import PreviewConduguiasYFolletos from '../assets/img/PreviewConduguiasYFolletos.jpg';
import PreviewCuadernos from '../assets/img/PreviewCuadernos.jpg';


const EducacionFinanciera = () => {
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
        content='Aprende a administrar tu dinero, invertir con inteligencia y planificar tu futuro financiero.'/>
      <title>Opciones Sacimex - Educación Financiera</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
        <Imagen
          tamano='100%'
          imagen={ImagenEducacion}
          alt='Educación financiera'/>
        <FiltroTitulo>
          <Titulo
            color='#FFF'
            texto='Educación financiera'/>
        </FiltroTitulo>
        <Parrafo>Descubre el camino hacia un futuro financiero sólido y próspero con nuestra sección de Educación Financiera.
          En <OpcionesSacimex>Opciones Sacimex</OpcionesSacimex>, creemos en empoderar a nuestros clientes con conocimientos clave para 
          tomar decisiones financieras informadas y alcanzar sus metas económicas con confianza.</Parrafo>
        <StyledP>Te presentamos algunas páginas para consultar sobre educación financiera:</StyledP>
        <PreviewsContenedor>
        <StyledA
          href='https://revista.condusef.gob.mx/2023/08/inclusion-financiera-de-las-mujeres/'
          target='_blank'
          rel='noopener noreferrer'>
            <StyledImg
              src={PreviewInclusionFinancieraDeLasMujeres}/>
            <Opacidad><span>Inclusión financiera de las mujeres</span></Opacidad>
            <StyledSpan>https://revista.condusef.gob.mx/2023/08/inclusion-financiera-de-las-mujeres/</StyledSpan>
        </StyledA>
        <StyledA
          href='https://webappsos.condusef.gob.mx/EducaTuCartera/Finanzas-jovenes.html'
          target='_blank'
          rel='noopener noreferrer'>
            <StyledImg
              src={PreviewFinanzasJovenes}/>
            <Opacidad><span>Finanzas jóvenes</span></Opacidad>
            <StyledSpan>https://webappsos.condusef.gob.mx/EducaTuCartera/Finanzas-jovenes.html</StyledSpan>
        </StyledA>
        <StyledA
          href='https://revista.condusef.gob.mx/2023/08/consejos-para-el-regreso-a-clases/'
          target='_blank'
          rel='noopener noreferrer'>
            <StyledImg
              src={PreviewConsejosParaElRegresoAClases}/>
            <Opacidad><span>Consejos para el regreso a clases</span></Opacidad>
            <StyledSpan>https://revista.condusef.gob.mx/2023/08/consejos-para-el-regreso-a-clases/</StyledSpan>
        </StyledA>
        <StyledA
          href='https://webappsos.condusef.gob.mx/EducaTuCartera/conduguias.html'
          target='_blank'
          rel='noopener noreferrer'>
            <StyledImg
              src={PreviewConduguiasYFolletos}/>
            <Opacidad><span>Conduguías y folletos</span></Opacidad>
            <StyledSpan>https://webappsos.condusef.gob.mx/EducaTuCartera/conduguias.html</StyledSpan>
        </StyledA>
        <StyledA
          href='https://webappsos.condusef.gob.mx/EducaTuCartera/cuadernos.html'
          target='_blank'
          rel='noopener noreferrer'>
            <StyledImg
              src={PreviewCuadernos}/>
            <Opacidad><span>Cuadernos</span></Opacidad>
            <StyledSpan>https://webappsos.condusef.gob.mx/EducaTuCartera/cuadernos.html</StyledSpan>
        </StyledA>
        </PreviewsContenedor>
        {/*<StyledP>También puedes hacer uso de nuestras calculadoras interactivas:</StyledP>
        <BotonCalculadora
          href='/EducacionFinanciera/RastreaTusCentavos'>
            Rastrea tus Centavos
        </BotonCalculadora>*/}
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}/>
  </>);
};

export default EducacionFinanciera;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 0 0 60px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const FiltroTitulo = styled.div`
  background: linear-gradient(180deg, rgba(0,99,47,1) 0%, rgba(0,99,47,1) 18%, rgba(0,99,47,0.25262605042016806) 100%);
  height: 80px;
  padding-top: 10px;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Parrafo = styled.p`
  font-size: 1em;
  text-align: justify;
  width: 90%;

  @media (min-width: 880px) {
    width: 100%;
  };
`;

const OpcionesSacimex = styled.span`
  color: #00632F;
  font-weight: 700;
`;

const StyledP = styled.p`
  color: #00632F;
  font-size: 1.125em;
  font-weight: 800;
  text-align: center;
  width: 90%;

  @media (min-width: 820px) {
    width: 100%;
  };
`;

const PreviewsContenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  width: 90%;

  @media (min-width: 820px) {
    width: 100%;
  };
`;

const StyledA = styled.a`
  position: relative;
  text-decoration: none;
  width: 300px;
`;

const StyledSpan = styled.div`
  color: #000;
  font-size: 0.75em;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
`;

const StyledImg = styled.img`
  border: 1px solid #CCC;
  object-fit: cover;
  width: 100%;
`;

const Opacidad = styled.div`
  align-items: end;
  background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
  border-radius: 5px;
  color: #FFF;
  display: flex;
  font-size: 1em;
  font-weight: 700;
  height: 100%;
  left: 0;
  opacity: 0;
  padding: 10px;
  position: absolute;
  top: 0;
  transition: opacity .3s;
  width: 100%;

  &:hover {
    opacity: 1;
  };
`;

/*const BotonCalculadora = styled.a`
  background-color: #00632F;
  color: #FFF;
  font-size: 1em;
  font-weight: 700;
  padding: 9px 18px;
  text-decoration: none;
`;*/