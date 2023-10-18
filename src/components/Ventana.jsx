import styled from 'styled-components';
import AvisoPrivacidad from './Ventana/AvisoPrivacidad';
import UnidadEspecializada from './Ventana/UnidadEspecializada';
import DenunciaAnonima from './Ventana/DenunciaAnonima';
import InfoVacante from './OportunidadesDeCarrera/InfoVacante';
import { AiFillCloseCircle } from 'react-icons/ai';

const Ventana = ({ windowState, setWindowState, vacantes, vacanteSeleccionada }) => {
  return(
    <PrincipalContenedor
      $showWindow={windowState}>
        <Hoja $showWindow={windowState}>
          <BotonCerrarPosicionador>
            <BotonCerrarContenedor
              onClick={() => setWindowState(null)}>
                <AiFillCloseCircle/>
            </BotonCerrarContenedor>
          </BotonCerrarPosicionador>
          {windowState === 1 && (<AvisoPrivacidad/>)}
          {windowState === 2 && (<UnidadEspecializada/>)}
          {windowState === 3 && (<DenunciaAnonima/>)}
          {windowState === 4 && (<InfoVacante vacanteSeleccionada={vacanteSeleccionada} vacantes={vacantes}/>)}
          <DegradadoFinal/>
        </Hoja>
        <Opacidad
          $showWindow={windowState}
          onClick={() => setWindowState(null)}/>
    </PrincipalContenedor>
  );
};

export default Ventana;

const PrincipalContenedor = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  pointer-events: ${({ $showWindow }) => $showWindow ? 'all' : 'none'};
  width: 100%;
  z-index: 110;
`;

const Hoja = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  height: 100vh;
  left: ${({ $showWindow }) => $showWindow ? '0' : '-500px'};
  max-width: 500px;
  overflow: auto;
  position: absolute;
  top: 0;
  transition: left .3s;
  width: 100%;
  z-index: 110;
`;

const Opacidad = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(32, 32, 32, 0.5);  
  height: 100%;
  opacity: ${({ $showWindow }) => $showWindow ? '1' : '0'};
  transition: opacity .3s;
  width: 100%;
  z-index: 105;
`

const BotonCerrarPosicionador = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%);
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

const DegradadoFinal = styled.div`
  background: linear-gradient(0, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%);
  border-radius: 0 0 10px 10px;
  bottom: 0;
  height: 40px;
  max-width: 500px;
  position: fixed;
  width: 100%;
`;