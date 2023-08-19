import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Calculadora = () => {
  const [pasoActivo, setPasoActivo] = useState(1);
  const [ingresoMensual, setIngresoMensual] = useState(null);
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [gastosDiariosTotales, setGastosDiariosTotales] = useState(0);
  const [ventanaGastos, setVentanaGastos] = useState(false);

  let gastos = {
    'helados' : 0,
    'refresco' : 0,
    'cafe' : 0,
    'revistas' : 0,
    'propinas' : 0,
    'chocolates' : 0,
    'dulces' : 0,
    'cigarros' : 0,
    'otros' : 0,
    'total' : 0
  };

  const usarInputIngreso = ev => {
    setIngresoMensual(ev.target.value);
  };

  const usarBoton = () => {
    if(pasoActivo === 1 && ingresoMensual) {
      setPasoActivo(2);
      setEstadoAlerta(null);
    };

    if(pasoActivo === 1 && !ingresoMensual) {
      setEstadoAlerta('Escribe un número para los ingresos mensuales');
    };
  };

  const limpiar = () => {
    setPasoActivo(1);
    setIngresoMensual(null);
    setEstadoAlerta(null);
  };

  return(<>
    <IndicadorDePasosContenedor>
      <IndicadorDePasos
        $activo={pasoActivo === 1}>
          <span>1</span>
      </IndicadorDePasos>
      <IndicadorDePasos
          $activo={pasoActivo === 2}>
            <span>2</span>
      </IndicadorDePasos>
        <IndicadorDePasos
          $activo={pasoActivo === 3}>
            <span>3</span>
        </IndicadorDePasos>
      </IndicadorDePasosContenedor>
      <TextoPasos>
        {pasoActivo === 1 && ('¿De cuánto es tu ingreso mensual?')}
        {pasoActivo === 2 && ('Agrega tus gastos diarios:')}
      </TextoPasos>
      <StyledInput type='number' onChange={ev => usarInputIngreso(ev)} $mostrar={pasoActivo === 1}/>
      {pasoActivo === 2 && (<>
        <BotonAgregar 
          onClick={() => setVentanaGastos(true)}
          $mostrar={!ventanaGastos}>
            <AiOutlinePlus/>
            <span>Agregar gasto</span>
        </BotonAgregar>
        <GastosTotalesContenedor $mostrar={!ventanaGastos}>
          <GastosTotales>
            <span>Total diario:</span>
            <SpanVerde>{`$ ${gastosDiariosTotales.toFixed(2)}`}</SpanVerde>
          </GastosTotales>
          <GastosTotales>
            <span>Total semanal:</span>
            <SpanVerde>{`$ ${(gastosDiariosTotales * 7).toFixed(2)}`}</SpanVerde>
          </GastosTotales>
          <GastosTotales>
            <span>Total mensual:</span>
            <SpanVerde>{`$ ${(gastosDiariosTotales * 30).toFixed(2)}`}</SpanVerde>
          </GastosTotales>
          <GastosTotales>
            <span>Total anual:</span>
            <SpanVerde>{`$ ${(gastosDiariosTotales * 365).toFixed(2)}`}</SpanVerde>
          </GastosTotales>
        </GastosTotalesContenedor>
      </>)}
      <Alerta>{estadoAlerta}</Alerta>
      <StyledButton 
        onClick={usarBoton}
        $mostrar={!ventanaGastos}>
          {pasoActivo === 1 && ('Continuar')}
          {pasoActivo === 2 && ('Finalizar')}
      </StyledButton>
      {(pasoActivo === 2 || pasoActivo === 3) && (<StyledButton $reiniciar onClick={limpiar}>Reiniciar calculadora</StyledButton>)}
      <TiposDeGastoContenedor>
        <TiposDeGasto>
          <span>Café</span>
        </TiposDeGasto>
      </TiposDeGastoContenedor>
  </>);
};

export default Calculadora;

const IndicadorDePasosContenedor = styled.div`
  display: flex;
  gap: 10px;
`;

const IndicadorDePasos = styled.div`
  background-color: ${({ $activo }) => $activo ? '#F5A200' : '#FFFFFF'};
  ${({ $activo }) => !$activo && ('border: 2px solid #F5A200;')}
  border-radius: 50%;
  display: grid;
  height: 50px;
  place-items: center;
  transition: background .3s, border .3s;
  width: 50px;

  span {
    color: #005217;
    font-family: 'Presidencia Firme', sans-serif;
    font-size: 1em;
  };
`;

const TextoPasos = styled.p`
  color: #005520;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.125em;
  letter-spacing: 1px;
  text-align: center;
`;

const StyledInput = styled.input`
  appearance: textfield;
  border: 1px solid #005520;
  border-radius: 25px;
  ${({ $mostrar }) => !$mostrar && ('display: none;')}
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  outline: #00632F;
  padding: 10px 25px;
  text-align: right;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  };
`;

const Alerta = styled.p`
  color: red;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
`;

const StyledButton = styled.button`
  background: ${({ $reiniciar }) => $reiniciar ? 'linear-gradient(135deg, rgba(245,162,0,1) 0%, rgba(247,196,34,1) 100%)' : 'linear-gradient(135deg, rgba(0,99,47,1) 0%, rgba(34,133,79,1) 100%)'};
  border: none;
  border-radius: 5px;
  color: ${({ $reiniciar }) => $reiniciar ? '#005217' : '#FFFFFF'};
  cursor: pointer;
  ${({ $mostrar }) => !$mostrar && ('display: none;')}
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  padding: 9px 18px;
  transition: transform .3s;
  
  &:hover {
    transform: scale(105%);
  };
`;

const BotonAgregar = styled.button`
  align-items: center;
  background-color: #FFFFFF;
  border: 2px solid #257140;
  border-radius: 5px;
  color: #257140;
  cursor: pointer;
  display: ${({ $mostrar }) => $mostrar ? 'flex' : 'none'};
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1em;
  gap: 10px;
  padding: 9px 18px;
  transition: transform .3s;
  
  &:hover {
    transform: scale(105%);
  };
`;

const GastosTotales = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-family: 'Presidencia Firme', sans-serif;
    font-size: 1em;
  };
`;

const SpanVerde = styled.span`
  color: #00632F;
`;

const GastosTotalesContenedor = styled.div`
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  display: ${({ $mostrar }) => $mostrar ? 'flex' : 'none'};
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 300px;
`;

const TiposDeGastoContenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
`;

const TiposDeGasto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;