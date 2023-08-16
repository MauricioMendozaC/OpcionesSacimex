import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';
import VentanaEmergente from '../components/VentanaEmergente';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import { datosCreditos } from '../utils/datos';

const Comisiones = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);

  const existeCampo = (campo, index) => {
    const existe = campo in datosCreditos[index];

    return existe;
  };

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
        content='Créditos accesibles con transparencia en Opciones Sacimex. Descubre nuestras opciones de financiamiento con comisiones claras y justas.'/>
      <title>Opciones Sacimex - Comisiones</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Titulo
            texto='Comisiones'/>
          <div>
            <OpcionesSaci>Opciones Sacimex S.A. de C.V. SOFOM E.N.R.</OpcionesSaci>
            <Sacimex>Sacimex</Sacimex>
          </div>
          {datosCreditos.map( (item, index) => (
            <CreditoContenedor key={index}>
              <NombreCredito>{item.nombre}</NombreCredito>
              <DatosCredito>{item.numeroDeRegistro}</DatosCredito>
              <DatosCredito>{item.tipoDeCredito}</DatosCredito>
              {item.subtipoDeCredito && (<DatosCredito>{item.subtipoDeCredito}</DatosCredito>)}
              <TablaContenedor>
                <Tabla>
                  {(existeCampo('apertura', index) || existeCampo('disposicionDelCredito', index) ||
                  existeCampo('gastosDeInvestigacion', index) || existeCampo('pagoTardio', index) ||
                  existeCampo('gastosDeCobranza', index)) && (
                    <tr>
                      <Encabezado $titulo></Encabezado>
                      <Encabezado>Porcentaje</Encabezado>
                      <Encabezado>Y/O</Encabezado>
                      <Encabezado>Moneda</Encabezado>
                      <Encabezado>Referencia</Encabezado>
                      <Encabezado>Periocidad</Encabezado>
                      <Encabezado>Fecha de entrada</Encabezado>
                      <Encabezado>Fecha de actualización</Encabezado>
                    </tr>
                  )}                  
                  {existeCampo('apertura', index) && (
                    <tr>
                      <Celda $titulo>Contratación o apertura</Celda>
                      <Celda>{item.apertura.porcentaje}</Celda>
                      <Celda>{item.apertura.yo} </Celda>
                      <Celda>{item.apertura.moneda}</Celda>
                      <Celda>{item.apertura.referencia}</Celda>
                      <Celda>{item.apertura.periocidad}</Celda>
                      <Celda>{item.apertura.fechaDeEntrada}</Celda>
                      <Celda>{item.apertura.fechaDeActualizacion}</Celda>
                    </tr>
                  )}
                  {existeCampo('disposicionDelCredito', index) && (
                    <tr>
                      <Celda $titulo>Disposición del crédito</Celda>
                      <Celda>{item.disposicionDelCredito.porcentaje}</Celda>
                      <Celda>{item.disposicionDelCredito.yo}</Celda>
                      <Celda>{item.disposicionDelCredito.moneda}</Celda>
                      <Celda>{item.disposicionDelCredito.referencia}</Celda>
                      <Celda>{item.disposicionDelCredito.periocidad}</Celda>
                      <Celda>{item.disposicionDelCredito.fechaDeEntrada}</Celda>
                      <Celda>{item.disposicionDelCredito.fechaDeActualizacion}</Celda>
                    </tr>
                  )}
                  {existeCampo('gastosDeInvestigacion', index) && (
                    <tr>
                      <Celda $titulo>Gastos de investigación y / o formalización</Celda>
                      <Celda>{item.gastosDeInvestigacion.porcentaje}</Celda>
                      <Celda>{item.gastosDeInvestigacion.yo}</Celda>
                      <Celda>{item.gastosDeInvestigacion.moneda}</Celda>
                      <Celda>{item.gastosDeInvestigacion.referencia}</Celda>
                      <Celda>{item.gastosDeInvestigacion.periocidad}</Celda>
                      <Celda>{item.gastosDeInvestigacion.fechaDeEntrada}</Celda>
                      <Celda>{item.gastosDeInvestigacion.fechaDeActualizacion}</Celda>
                    </tr>
                  )}    
                  {existeCampo('pagoTardio', index) && (
                    <tr>
                      <Celda $titulo>Pago tardío o inoportuno</Celda>
                      <Celda>{item.pagoTardio.porcentaje}</Celda>
                      <Celda>{item.pagoTardio.yo}</Celda>
                      <Celda>{item.pagoTardio.moneda}</Celda>
                      <Celda>{item.pagoTardio.referencia}</Celda>
                      <Celda>{item.pagoTardio.periocidad}</Celda>
                      <Celda>{item.pagoTardio.fechaDeEntrada}</Celda>
                      <Celda>{item.pagoTardio.fechaDeActualizacion}</Celda>
                    </tr>
                  )}
                  {existeCampo('gastosDeCobranza', index) && (
                    <tr>
                      <Celda $titulo>Gastos de cobranza</Celda>
                      <Celda>{item.gastosDeCobranza.porcentaje}</Celda>
                      <Celda>{item.gastosDeCobranza.yo}</Celda>
                      <Celda>{item.gastosDeCobranza.moneda}</Celda>
                      <Celda>{item.gastosDeCobranza.referencia}</Celda>
                      <Celda>{item.gastosDeCobranza.periocidad}</Celda>
                      <Celda>{item.gastosDeCobranza.fechaDeEntrada}</Celda>
                      <Celda>{item.gastosDeCobranza.fechaDeActualizacion}</Celda>
                    </tr>
                  )}
                </Tabla>
              </TablaContenedor>
            </CreditoContenedor>
          ))}
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setEstadoAviso={setEstadoAviso}
      evitarScroll={manejarScroll}/>
    <VentanaEmergente
        estadoAviso={estadoAviso}
        setEstadoAviso={setEstadoAviso}
        evitarScroll={manejarScroll}/>
  </>);
};

export default Comisiones;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 30px 0 60px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const OpcionesSaci = styled.h3`
  color: #257140;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  text-align: center;
`;

const Sacimex = styled.h2`
  color: #00632F;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1.75em;
  letter-spacing: 1px;
  text-align: center;
`;

const CreditoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NombreCredito = styled.h4`
  color: #005520;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  text-align: center;
`;

const DatosCredito = styled.p`
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  text-align: center;
`;

const TablaContenedor = styled.div`
  margin-bottom: 100px;
  max-width: 820px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 90vw;

  @media (min-width: 920px) {
    overflow-x: hidden;
  };
`;

const Tabla = styled.table`
  border-collapse: collapse;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
  text-align: center;
  width: 820px;
`;

const Celda = styled.td`
  border-bottom: 1px solid #ccc;
  ${({ $titulo }) => $titulo && ('border-right: 1px solid #00632F;')};
  ${({ $titulo }) => $titulo && (`font-family: 'Presidencia Firme', sans-serif`)};
  ${({ $titulo }) => $titulo && ('letter-spacing: 1px;')};
  padding: 8px;
`;

const Encabezado = styled.th`
  border-bottom: 1px solid #00632F;
  ${({ $titulo }) => $titulo && ('border-right: 1px solid #00632F;')};
  padding: 8px;
`;