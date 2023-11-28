import { useState } from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-scroll';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Imagen from './Imagen';
import Boton from './Boton';
import { BloquearScroll } from '../utils/estilosPages';
import sacimexLogo from '../assets/img/SacimexLogo.png';
import sacimexLogoBlanco from '../assets/img/SacimexLogoBlanco.png';

const Header = ({ mostrarAnimaciones, barraVerde }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [linkDesplegado, setLinkDesplegado] = useState(null);

  const usarLinks = item => {
    item === linkDesplegado ? setLinkDesplegado(null) : setLinkDesplegado(item);
  };

  return(<>
    <BloquearScroll $evitarScroll={isChecked}/>
    <PrincipalContenedor $barraVerde={barraVerde}>
        <BotonHamburguesa
          $mostrarAnimaciones={mostrarAnimaciones}
          onClick={() => setIsChecked(!isChecked)}>
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
        href='/Inicio'
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Imagen
            tamano='210px'
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
                  <li><a href='/CreditoGrupal'>Crédito grupal</a></li>
                  <li><a href='/CreditoIndividual'>Crédito individual</a></li>
                  <li><a href='/Servicios'>Servicios</a></li>
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
                    <li>
                      <Link
                        to='conocenos'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setIsChecked(false)}>
                          Quiénes somos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='valores'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setIsChecked(false)}>
                          Filosofía y valores
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='contacto'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setIsChecked(false)}>
                          Ubicación y contacto
                      </Link>
                    </li>
                  </>)}
                  {barraVerde && (<>
                    <li><a href='/conocenos'>Quiénes somos</a></li>
                    <li><a href='/valores'>Filosofía y valores</a></li>
                    <li><a href='/contacto'>Ubicación y contacto</a></li>
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
                  <li><a href='/EducacionFinanciera'>Educación financiera</a></li>
                  <li><a href='/RedDeProfesionales'>Red de oficios y profesiones</a></li>
                  <li><a href='/HistoriasDeExito'>Historias de éxito</a></li>
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
                  <li><a href='/OportunidadesDeCarrera'>Oportunidades de carrera</a></li>                  
                </SubLinksContenedor>
              </LinkDesplegable>
            </LinksContenedor>
            <BotonContenedor>
              <Boton
                referencia='/SaciAlianza'
                texto='Saci-Alianza'
                amarillo/>
            </BotonContenedor>
        </BarraNavegacion>
        <Opacidad
          $checked={isChecked}
          onClick={() => setIsChecked(false)}/>
    </PrincipalContenedor>
  </>);
};

export default Header;

const imagenMediaQuery = `
  @media (min-width: 768px) {
    width: 210px;
  };
`;

const PrincipalContenedor = styled.header`
  align-items: center;
  background: ${({ $barraVerde }) => $barraVerde ? '#257140' : '#FFFFFF'};
  border-bottom: 1px solid ${({ $barraVerde }) => $barraVerde ? '#005520' : '#CCCCCC'};
  display: flex;
  height: 70px;
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

const BotonHamburguesa = styled.button`
  background-color: inherit;
  border: none;
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
  height: calc(100vh - 70px);
  justify-content: flex-start;
  left: ${({ $checked }) => $checked ? '0' : '-100%'};
  max-width: 500px;
  padding: 30px;
  position: fixed;
  top: 70px;
  transition:  left 0.3s ease-out;
  width: 100vw;
  z-index: 100;
`;

const LinksContenedor = styled.ul`
  height: auto;
  list-style: none;
  width: 100%; 
  z-index: 101;

  @media (max-height: 550px) {
    overflow: hidden scroll;
  };
`;

const LinkDesplegable = styled.li`
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
  font-size: 1.125em;
  font-weight: 700;
  gap: 10px;
  letter-spacing: 1px;
  padding: 20px 0;
  transition: transform .3s;

  &:hover {
    transform: translateY(-3px);
  };
`;

const SubLinksContenedor = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  height: ${({ $desplegar }) => $desplegar ? '120px' : '0'};
  list-style: none;
  overflow: hidden;
  transition: height .3s;

  a {
    border-radius: 20px;
    color: #257140;
    cursor: pointer;
    display: block;
    font-size: 1em;
    padding: 7px 20px;
    text-decoration: none;
    transition: background .1s, color .1s;

    &:hover {
      background-color: #257140;
      color: #FFFFFF;
    };
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
  height: calc(100vh - 70px);
  opacity: ${({ $checked }) => $checked ? '1' : '0'};
  position: fixed;
  right: ${({ $checked }) => $checked ? '0' : 'calc(0px - 100vw)'};
  top: 70px;
  transition: right .3s, opacity .3s;
  width: calc(100vw - 500px);
`;