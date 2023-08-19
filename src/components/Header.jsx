import { useState } from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-scroll';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Imagen from './Imagen';
import Boton from './Boton';
import sacimexLogo from '../assets/img/SacimexLogo.png';
import sacimexLogoBlanco from '../assets/img/SacimexLogoBlanco.png';

const Header = ({ mostrarAnimaciones, evitarScroll, barraVerde }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [linkDesplegado, setLinkDesplegado] = useState(null);

  const usarMenu = checked => {
    setIsChecked(checked);
    evitarScroll(checked);
  };

  const usarLinks = item => {
    item === linkDesplegado ? setLinkDesplegado(null) : setLinkDesplegado(item);
  };

  return(
    <PrincipalContenedor $barraVerde={barraVerde}>
        <BotonHamburguesa
          $mostrarAnimaciones={mostrarAnimaciones}
          onClick={() => usarMenu(!isChecked)}>
            <Linea
              $linea1={true}
              $checked={isChecked} $barraVerde={barraVerde}/>
            <Linea
              $linea2
              $checked={isChecked} $barraVerde={barraVerde}/>
            <Linea
              $linea3
              $checked={isChecked} $barraVerde={barraVerde}/>
        </BotonHamburguesa>
      <LogoContenedor
        href='/'
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Imagen
            tamano='120px'
            imagen={barraVerde ? (sacimexLogoBlanco) : (sacimexLogo)}
            alt='Sacimex Logo'
            extras={imagenMediaQuery}/>
      </LogoContenedor>
        <BarraNavegacion
          $checked={isChecked}>
            <LinksContenedor>
              <LinkDesplegable>
                <LinkPrincipal 
                  onClick={() => usarLinks(1)}>
                    <span>Productos</span>
                    {linkDesplegado !== 1 && (<AiOutlinePlus/>)}
                    {linkDesplegado === 1 && (<AiOutlineMinus/>)}
                </LinkPrincipal>
                <SubLinksContenedor $desplegar={linkDesplegado === 1}>
                  <SubLinkA href='/CreditoGrupal'>Crédito grupal</SubLinkA>
                  <SubLinkA href='/CreditoIndividual'>Crédito individual</SubLinkA>
                  <SubLinkA href='/Servicios'>Servicios</SubLinkA>
                  <SubLinkA>Promociones</SubLinkA>
                </SubLinksContenedor>
              </LinkDesplegable>
              <LinkDesplegable>
                <LinkPrincipal 
                  onClick={() => usarLinks(2)}>
                    <span>Conócenos</span>
                    {linkDesplegado !== 2 && (<AiOutlinePlus/>)}
                    {linkDesplegado === 2 && (<AiOutlineMinus/>)}
                </LinkPrincipal>
                <SubLinksContenedor $desplegar={linkDesplegado === 2}>
                  {!barraVerde && (<>
                    <SubLinkSpan>
                      <Link
                        to='conocenos'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => usarMenu(false)}>
                          Quiénes somos
                      </Link>
                    </SubLinkSpan>
                    <SubLinkSpan> 
                      <Link
                        to='valores'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => usarMenu(false)}>
                          Filosofía y valores
                      </Link>
                    </SubLinkSpan>
                    <SubLinkSpan>
                      <Link
                        to='directorio'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => usarMenu(false)}>
                          Ubicación y contacto
                      </Link>
                    </SubLinkSpan>
                  </>)}
                  {barraVerde && (<>
                    <SubLinkA href='/#conocenos'>Quiénes somos</SubLinkA>
                    <SubLinkA href='/#valores'>Filosofía y valores</SubLinkA>
                    <SubLinkA href='/#directorio'>Ubicación y contacto</SubLinkA>
                  </>)}
                </SubLinksContenedor>
              </LinkDesplegable>
              <LinkDesplegable>
                <LinkPrincipal 
                  onClick={() => usarLinks(3)}>
                    <span>Compromiso social</span>
                    {linkDesplegado !== 3 && (<AiOutlinePlus/>)}
                    {linkDesplegado === 3 && (<AiOutlineMinus/>)}
                </LinkPrincipal>
                <SubLinksContenedor $desplegar={linkDesplegado === 3}>
                  <SubLinkA href='/EducacionFinanciera'>Educación financiera</SubLinkA>
                  <SubLinkA href='/RedDeProfesionales'>Red de oficios y profesiones</SubLinkA>
                  <SubLinkA href='/HistoriasDeExito'>Historias de éxito</SubLinkA>
                </SubLinksContenedor>
              </LinkDesplegable>
              <LinkDesplegable>
                <LinkPrincipal
                  onClick={() => usarLinks(4)}>
                  <span>Bolsa de trabajo</span>
                  {linkDesplegado !== 4 && (<AiOutlinePlus/>)}
                   {linkDesplegado === 4 && (<AiOutlineMinus/>)}
                </LinkPrincipal>
                <SubLinksContenedor $desplegar={linkDesplegado === 4}>
                  <SubLinkA>Oportunidades de carrera</SubLinkA>
                  <SubLinkA>Contacta con Desarrollo Humano</SubLinkA>
                </SubLinksContenedor>
              </LinkDesplegable>
            </LinksContenedor>
            <BotonContenedor>
              <Boton
                referencia='/SaciAlianza'
                texto='Saci-Alianza'
                sacialianza/>
            </BotonContenedor>
        </BarraNavegacion>
        <Opacidad
          $checked={isChecked}
          onClick={() => usarMenu(false)}/>
    </PrincipalContenedor>
  );
};

export default Header;

const imagenMediaQuery = `
  @media (min-width: 768px) {
    width: 150px;
  };
`;

const PrincipalContenedor = styled.header`
  align-items: center;
  background: ${({ $barraVerde }) => $barraVerde ? '#257140' : '#FFFFFF'};
  border-bottom: 1px solid ${({ $barraVerde }) => $barraVerde ? '#005520' : '#CCCCCC'};
  display: flex;
  height: 60px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;

  @media (min-width: 768px) {
    padding: 0 30px;
  };
`;

const LogoContenedor = styled.a`
  cursor: pointer;
  margin: auto;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
`;

const BotonHamburguesa = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 18px;
  justify-content: space-between;
  justify-self: start;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 25px;
  z-index: 101;
`;

const Linea = styled.span`
  background-color: ${({ $barraVerde }) => $barraVerde ? '#FFFFFF' : '#005520'};
  border-radius: 10px;
  display: block;
  height: 2px;
  width: 100%;

  ${({ $linea1 }) => $linea1 && css`
    transform: rotate(${({ $checked }) => $checked ? '45deg' : '0'});
    transform-origin: 0% 0%;
    transition: transform .4s ease-in-out;
  `};

  ${({ $linea2 }) => $linea2 && css`
    transform: scaleY(${({ $checked }) => $checked ? '0' : '100%'});
    transition: transform .2s ease-in-out;
  `};

  ${({ $linea3 }) => $linea3 && css`
    transform: rotate(${({ $checked }) => $checked ? '-45deg' : '0'});
    transform-origin: 0% 100%;
    transition: transform .4s ease-in-out;
  `};
`;

const BarraNavegacion = styled.nav`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: calc(100vh - 60px);
  justify-content: flex-start;
  left: ${({ $checked }) => $checked ? '0' : '-100%'};
  max-width: 500px;
  padding: 30px;
  position: fixed;
  top: 60px;
  transition:  left 0.3s ease-out;
  width: 100vw;
  z-index: 100;
`;

const LinksContenedor = styled.div`
  height: auto;
  width: 100%; 
  z-index: 101;

  @media (max-height: 550px) {
    overflow: hidden scroll;
  };
`;

const LinkDesplegable = styled.div`
  border-bottom: 1px solid #CCC;
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`;

const LinkPrincipal = styled.div`
  align-items: center;
  color: #00632F;
  cursor: pointer;
  display: flex;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.125em;
  gap: 10px;
  letter-spacing: 1px;
  padding: 20px 0;
  transition: transform .3s;

  &:hover {
    transform: translateY(-3px);
  };
`;

const SubLinksContenedor = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $desplegar }) => $desplegar ? '170px' : '0'};
  overflow: hidden;
  transition: height .3s;
`;

const SubLinkSpan = styled.span`
  border-radius: 20px;
  color: #257140;
  cursor: pointer;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  padding: 7px 20px;
  transition: background .1s, color .1s;

  &:hover {
    background-color: #257140;
    color: #FFFFFF;
  };
`;

const SubLinkA = styled.a`
  border-radius: 20px;
  color: #257140;
  cursor: pointer;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  padding: 7px 20px;
  text-decoration: none;
  transition: background .1s, color .1s;
  width: auto;

  &:hover {
    background-color: #257140;
    color: #FFFFFF;
  };
`;

const BotonContenedor = styled.div`
  background-color: #FFFFFF;
  border-top: 1px solid #CCC;
  bottom: 0;
  display: grid;
  height: 60px;
  max-width: 500px;
  place-items: center;
  position: fixed;
  width: 100%;
  z-index: 102;
`;

const Opacidad = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(32, 32, 32, 0.5);
  height: calc(100vh - 60px);
  left: ${({ $checked }) => $checked ? '500px' : '-100%'};
  position: fixed;
  top: 60px;
  transition: left .3s;
  width: calc(100vw - 500px);
`;