import { useState } from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-scroll';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Imagen from './Imagen';
import Boton from './Boton';
import { BloquearScroll } from '../utils/estilosPages';
import { greenSacimex, whiteSacimex, text, disabled, smaLength1, smaLength2, smaLength3, medLength2, medLength3,
         larLength2, larLength3, smaFont, medFont} from '../utils/stylesRules';
import sacimexLogoBlanco from '../assets/img/SacimexLogoBlanco.png';

const Header = ({ mostrarAnimaciones, barraVerde }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [linkDesplegado, setLinkDesplegado] = useState(null);

  const usarLinks = item => {
    item === linkDesplegado ? setLinkDesplegado(null) : setLinkDesplegado(item);
  };

  return(<>
    <BloquearScroll $evitarScroll={isChecked}/>
    <PrincipalContenedor>
        <BotonHamburguesa
          $mostrarAnimaciones={mostrarAnimaciones}
          onClick={() => setIsChecked(!isChecked)}>
            <Linea
              $linea1={true}
              $checked={isChecked}/>
            <Linea
              $linea2
              $checked={isChecked}/>
            <Linea
              $linea3
              $checked={isChecked}/>
        </BotonHamburguesa>
      <LogoContenedor
        href='/Inicio'
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Imagen
            tamano={larLength3}
            imagen={sacimexLogoBlanco}
            alt='Sacimex Logo'/>
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

const PrincipalContenedor = styled.header`
  align-items: center;
  background: ${greenSacimex};
  border-bottom: 1px solid #004f25;
  display: flex;
  height: ${medLength3};
  justify-content: space-between;
  left: 0;
  padding: 0 ${smaLength3};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
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
  height: ${smaLength2};
  justify-content: space-between;
  justify-self: start;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: ${smaLength3};
  z-index: 101;
`;

const Linea = styled.span`
  background-color: ${whiteSacimex};
  border-radius: 10px;
  display: block;
  height: 2px;
  width: 100%;

  ${({ $linea1 }) => $linea1 && css`
    transform: rotate(${({ $checked }) => $checked ? '38deg' : '0'});
    transform-origin: 0% 0%;
    transition: transform .4s ease-in-out;
  `};

  ${({ $linea2 }) => $linea2 && css`
    transform: scaleY(${({ $checked }) => $checked ? '0' : '100%'});
    transition: transform .2s ease-in-out;
  `};

  ${({ $linea3 }) => $linea3 && css`
    transform: rotate(${({ $checked }) => $checked ? '-38deg' : '0'});
    transform-origin: 0% 100%;
    transition: transform .4s ease-in-out;
  `};
`;

const BarraNavegacion = styled.nav`
  align-items: center;
  background-color: ${whiteSacimex};
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  height: calc(100vh - ${medLength3});
  justify-content: flex-start;
  left: ${({ $checked }) => $checked ? '0' : '-100%'};
  max-width: 350px;
  padding: ${smaLength3};
  position: fixed;
  top: ${medLength3};
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
  border-bottom: 1px solid ${disabled};
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`;

const LinkPrincipal = styled.div`
  align-items: center;
  color: ${greenSacimex};
  cursor: pointer;
  display: flex;
  font-size: ${medFont};
  font-weight: 800;
  gap: ${smaLength1};
  padding: ${smaLength2} 0;
  transition: transform .3s;

  &:hover {
    transform: translateY(-3px);
  };
`;

const SubLinksContenedor = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${smaLength1};
  justify-content: flex-start;
  height: ${({ $desplegar }) => $desplegar ? larLength2 : '0'};
  list-style: none;
  overflow: hidden;
  transition: height .3s;

  a {
    border-radius: 20px;
    color: ${text};
    cursor: pointer;
    display: block;
    font-size: ${smaFont};
    padding: ${smaLength1} ${smaLength2};
    text-decoration: none;
    transition: background .1s, color .1s;

    &:hover {
      background-color: ${greenSacimex};
      color: #FFFFFF;
    };
  };
`;

const BotonContenedor = styled.div`
  background-color: ${whiteSacimex};
  border-top: 1px solid ${disabled};
  bottom: 0;
  display: grid;
  height: ${medLength2};
  max-width: 350px;
  place-items: center;
  position: fixed;
  width: 100%;
  z-index: 102;
`;

const Opacidad = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(32, 32, 32, 0.5);
  height: calc(100vh - ${medLength3});
  opacity: ${({ $checked }) => $checked ? '1' : '0'};
  position: fixed;
  right: ${({ $checked }) => $checked ? '0' : 'calc(0px - 100vw)'};
  top: ${medLength3};
  transition: right .3s, opacity .3s;
  width: calc(100vw - 350px);
`;