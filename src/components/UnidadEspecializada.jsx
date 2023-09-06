import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

const UnidadEspecializada = ({ estadoUNE, setEstadoUNE, evitarScroll }) => {
  const usarClickCerrar = () => {
    setEstadoUNE(false);
    evitarScroll(false);
  };

  return(
    <PrincipalContenedor
      onClick={usarClickCerrar}
      $mostrarAviso={estadoUNE}>
        <Hoja
          $mostrarAviso={estadoUNE}>
            <BotonCerrarPosicionador>
              <BotonCerrarContenedor
                onClick={usarClickCerrar}>
                  <AiFillCloseCircle/>
              </BotonCerrarContenedor>
            </BotonCerrarPosicionador>
            <Texto>
              <StyledH3>¿Sabes qué es la UNE?</StyledH3>
              <Parrafo>La Ley de Protección y Defensa al Usuario de Servicios Financieros establece que cada entidad financiera 
                debe contar con una Unidad Especializada de Atención a Usuarios para atender quejas e inconformidades.</Parrafo>
              <StyledH3>¿Cómo te puede ayudar la UNE?</StyledH3>
              <Parrafo>Nuestro compromiso es brindarte la mejor experiencia posible en todos tus tratos con nosotros. Si en 
                algún momento sientes que tus expectativas no se han cumplido o tienes alguna preocupación relacionada con 
                nuestros servicios financieros, nuestras Unidades Especializadas están aquí para ayudarte de manera eficiente y 
                efectiva.</Parrafo>
              <StyledH4>Contacta con nuestra Unidad Especializada de Atención a Usuarios</StyledH4>
              <Links href='mailto:atencion_a_usuarios@opcionessacimex.com'>atencion_a_usuarios@opcionessacimex.com</Links>
              <Links href='tel:8008238544'>Tel. Gratuito: 8008238544</Links>
            </Texto>
        </Hoja>
    </PrincipalContenedor>
  );
};

export default UnidadEspecializada;

const PrincipalContenedor = styled.div`
  background-color: rgba(52, 58, 64, 0.6);
  display: grid;
  height: 100vh;
  place-items: start center;
  position: fixed;
  top: 0;
  transform: scale(${({ $mostrarAviso }) => $mostrarAviso ? '100%' : '0'});
  width: 100%;
  z-index: 101;
`;

const Hoja = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  height: 100vh;
  max-width: 500px;
  opacity: ${({ $mostrarAviso }) => $mostrarAviso ? '1' : '0'};
  overflow: auto;
  position: relative;
  transition: opacity .3s;
  width: 100%;
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

const StyledH4 = styled.h4`
  color: #00632F;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1.25em;
  text-align: center;
`;

const Links = styled.a`
  color: #000;
  cursor: pointer;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  text-align: center;
  text-decoration: none;
`;