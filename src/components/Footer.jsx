import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled, { css } from 'styled-components';
import { CiInstagram, CiFacebook, CiTwitter } from 'react-icons/ci';
import Imagen from './Imagen';
import InformacionEntidades from './InformacionEntidades';
import sacimexLogo from '../assets/img/SacimexLogoBlanco.png';

const AnimacionEntradaRedes = ({ children }) => {
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
    <RedesContenedor 
      $visible={isVisible}
      ref={targetRef}>
        {children}
    </RedesContenedor>
  );
};

const Footer = ({ setEstadoAviso, evitarScroll }) => {
  const [entidadActivo, setEntidadActivo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntidadActivo((prevValue) => {
        if(prevValue===5) return 0;
        else return prevValue + 1;
      });
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const usarClickAviso = item => {
    setEstadoAviso(item);
    evitarScroll(true);
  };

  return(
    <PrincipalContenedor>
      <AnimacionEntradaRedes>
        <Redes
          href='https://www.facebook.com/sacimex'
          rel='noopener noreferrer'
          target='_blank'>
            <CiFacebook/>
        </Redes>
        <Redes
          href='https://instagram.com/opciones__sacimex?igshid=Y2IzZGU1MTFhOQ=='
          rel='noopener noreferrer'
          target='_blank'>
            <CiInstagram/>
        </Redes>
        <Redes
          href='https://twitter.com/sacimex?t=ZfV1WcsXKRxeFz2L39hbFA&s=09'
          rel='noopener noreferrer'
          target='_blank'>
            <CiTwitter/>
        </Redes>
      </AnimacionEntradaRedes>
      <Imagen
        tamano='150px'
        imagen={sacimexLogo}
        extras='margin-bottom: 30px;'
        alt='Sacimex Logo'/>
      <AcercaDeContenedor
        $textos>
          <TextosAcercaDeContenedor>
            <TitulosAcercaDe>Regulación</TitulosAcercaDe>
            <TextoAcercaDe
              href='#!'
              onClick={() => usarClickAviso(1)}>
                Aviso de privacidad
            </TextoAcercaDe>
            <TextoAcercaDe
              href='/Comisiones'>
                Comisiones y beneficios
            </TextoAcercaDe>
            <TextoAcercaDe>Dictamen técnico</TextoAcercaDe>
          </TextosAcercaDeContenedor>
          <TextosAcercaDeContenedor>
            <TitulosAcercaDe>Aclaraciones</TitulosAcercaDe>
            <TextoAcercaDe>Formato de aclaración</TextoAcercaDe>
            <TextoAcercaDe>Unidad Especializada UNE</TextoAcercaDe>
            <TextoAcercaDe>Denuncia anónima</TextoAcercaDe>
          </TextosAcercaDeContenedor>
      </AcercaDeContenedor>
      <StyledDiv>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00632F" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,69.3C960,64,1200,32,1320,16L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <AcercaDeContenedor>
          <ImagenEntidadesContenedor
            $entidadActivo={entidadActivo === 0}
            href='https://www.buro.gob.mx/'
            rel='noopener noreferrer'
            target='_blank'>
              <Imagen
                tamano='100%'
                imagen='https://www.intercam.com.mx/wp-content/uploads/2019/07/logo-buro-entidades-financieras.png'
                extras={extras}
                alt='Logo Buro de Entidades Financieras'/>
          </ImagenEntidadesContenedor>
          <ImagenEntidadesContenedor
            $entidadActivo={entidadActivo === 1}
            href='https://www.gob.mx/cnbv'
            rel='noopener noreferrer'
            target='_blank'>
              <Imagen
                tamano='100%'
                imagen='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logo_de_la_CNBV.svg/80px-Logo_de_Financiera_Rural.svg.png'
                extras={extras}
                alt='Logo Comisión Nacional Bancaria y de Valores'/>
          </ImagenEntidadesContenedor>
          <ImagenEntidadesContenedor
            $entidadActivo={entidadActivo === 2}
            href='https://www.gob.mx/fnd'
            rel='noopener noreferrer'
            target='_blank'>
              <Imagen
                tamano='100%'
                imagen='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Logo_de_Financiera_Rural.svg/80px-Logo_de_Financiera_Rural.svg.png'
                extras={extras}
                alt='Logo Financiera Nacional de Desarrollo'/>
          </ImagenEntidadesContenedor>
          <ImagenEntidadesContenedor
            $entidadActivo={entidadActivo === 3}
            href='https://www.gob.mx/condusef'
            rel='noopener noreferrer'
            target='_blank'>
              <Imagen
                tamano='100%'
                imagen='https://blog.bayport.mx/wp-content/uploads/2021/07/Condusef.jpg'
                extras={extras}
                alt='Logo Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros'/>
          </ImagenEntidadesContenedor>
          <ImagenEntidadesContenedor
            $entidadActivo={entidadActivo === 4}
            href='https://www.circulodecredito.com.mx/home'
            rel='noopener noreferrer'
            target='_blank'>
              <Imagen
                tamano='100%'
                imagen='https://otorgantes.circulodecredito.com.mx/CCreditoPM/html/view/images/logo_inicio.gif;jsessionid=hQDJsTc9iDGCUlf9zSqBMC5iqj7hcdzxKn1A_ktwlFIxErMrUqoX!-1169947207'
                extras={extras}
                alt='Logo Círculo de Crédito'/>
          </ImagenEntidadesContenedor>
          <ImagenEntidadesContenedor
            $entidadActivo={entidadActivo === 5}
            href='https://www.gob.mx/shcp'
            rel='noopener noreferrer'
            target='_blank'>
              <Imagen
                tamano='100%'
                imagen='https://upload.wikimedia.org/wikipedia/commons/e/e6/SHCP2018-2024.png'
                extras={extras}
                alt='Logo Secretaría de Hacienda y Crédito Público'/>
          </ImagenEntidadesContenedor>
        </AcercaDeContenedor>
      </StyledDiv>
      <InformacionEntidades
        entidadActivo={entidadActivo}/>
    </PrincipalContenedor>
  );
};

export default Footer;

const extras = `
  background-color: #FFFFFF;
  border-radius: 5px;
`;

const StyledDiv = styled.div`
  background-color: #005520;
  width: 100%;
`;

const PrincipalContenedor = styled.footer`
  align-items: center;
  background-color: #00632F;
  border-top: 1px solid #CCC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  position: relative;
  z-index: 100;
`;

const RedesContenedor = styled.div`
  display: flex;
  gap: 35px;
  margin-bottom: 30px;

  @media (min-width: 850px) {
    background-color: rgba(0, 0, 0, .50);    
    bottom: 50px;
    clip-path: polygon(0% 0%, 80% 0, 100% 50%, 80% 100%, 0% 100%);
    flex-direction: column;
    gap: 0;
    height: 180px;
    justify-content: space-around;
    left: 0;
    margin: 0;
    opacity: ${({ $visible }) => $visible ? '1' : '0'};
    padding-left: 10px;
    position: fixed;
    transform: translateX(${({ $visible }) => $visible ? '0' : '-10px'});
    transition: opacity 2s, transform 2s;
    width: 60px;
    z-index: 20;
  };
`;

const Redes = styled.a`
  color: #FFFFFF;
  font-size: 32px;
  font-family: 'Presidencia Fina', sans-serif;
  text-decoration: none;
  transition: transform .3s;

  &:hover {
    transform: scale(105%);
  };
`;

const AcercaDeContenedor = styled.div`
  align-items: ${({ $textos }) => $textos ? 'flex-start' : 'center'}; 
  display: flex;
  justify-content: ${({ $textos }) => $textos ? 'center' : 'space-between'};
  width: 100%;

  @media (min-width: 768px) {
    justify-content: ${({ $textos }) => $textos ? 'center' : 'space-around'};
  };

  ${({ $textos }) => $textos && css`
    gap: 50px;
    padding: 0 10px;
  `};
`;

const TextosAcercaDeContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 155px;
  width: 45%;
`;

const TitulosAcercaDe = styled.h5`
  color: #FFFFFF;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 0.875em;
  letter-spacing: 1px;
  text-align: center;
`;

const TextoAcercaDe = styled.a`
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.75em;
  text-align: center;
  text-decoration: none;
`;

const ImagenEntidadesContenedor = styled.a`
  cursor: pointer;
  max-width: 80px;
  opacity: ${({ $entidadActivo }) => $entidadActivo ? '1' : '0.1'};
  ${({ $entidadActivo }) => $entidadActivo && ('transform: translateY(-5px);')}
  transition: opacity .3s, transform .3s;
  width: 16%;  
`;