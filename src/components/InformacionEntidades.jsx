import styled from 'styled-components';
import { whiteSacimex, smaLength1, medLength1, medLength3, larLength2, larLength3, smaFont } from '../utils/stylesRules';

const InformacionEntidades = ({ entidadActivo }) => {
  return(
    <PrincipalContenedor>
      {entidadActivo === 0 && (<>
        <SubTitulo>¿Qué es el Buró de Entidades Financieras?</SubTitulo>
        <Parrafo>El Buró de Entidades Financieras es una institución encargada de reunir y gestionar información financiera relevante sobre 
          los usuarios que han solicitado créditos o realizado operaciones con entidades financieras. Su propósito es proporcionar 
          transparencia y apoyar a los usuarios en la toma de decisiones financieras informadas.</Parrafo>
      </>)}
      {entidadActivo === 1 && (<>
        <SubTitulo>¿Qué es la Comisión Nacional Bancaria y de Valores (CNBV)?</SubTitulo>
        <Parrafo>La CNBV es una entidad reguladora que supervisa y regula el sistema bancario y los mercados de valores. Su misión es 
          garantizar la solidez y transparencia del sistema financiero, protegiendo los intereses de los usuarios y fomentando la confianza en 
          las instituciones financieras.</Parrafo>
      </>)}
      {entidadActivo === 2 && (<>
        <SubTitulo>¿Qué es la Financiera Nacional de Desarrollo (FND)?</SubTitulo>
        <Parrafo>La FND es una entidad financiera gubernamental que promueve el desarrollo económico y social del país. Ofrece servicios 
          financieros y créditos a proyectos y programas en diversos sectores para impulsar el crecimiento y bienestar de la sociedad.</Parrafo>
      </>)}
      {entidadActivo === 3 && (<>
        <SubTitulo>¿Qué es la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF)?</SubTitulo>
        <Parrafo>La CONDUSEF es una institución pública que defiende los derechos de los usuarios de servicios financieros en México. Su 
          misión es promover la transparencia y la equidad en las relaciones entre usuarios y entidades financieras, garantizando la 
          seguridad y confianza en el sistema financiero.</Parrafo>
      </>)}
      {entidadActivo === 4 && (<>
        <SubTitulo>¿Qué es el Círculo de Crédito?</SubTitulo>
        <Parrafo>El Círculo de Crédito es una Sociedad de Información Crediticia que recopila y procesa datos sobre el historial crediticio 
          de personas y empresas en México. Su propósito es proporcionar información a instituciones financieras y empresas para evaluar el 
          riesgo crediticio antes de otorgar préstamos o créditos.</Parrafo>
      </>)}
      {entidadActivo === 5 && (<>
        <SubTitulo>¿Qué es la Secretaría de Hacienda y Crédito Público (SHCP)?</SubTitulo>
        <Parrafo>La SHCP es una dependencia del gobierno mexicano responsable de la gestión de las finanzas públicas. Su labor es formular 
          y ejecutar la política económica y fiscal, además de supervisar el manejo de los recursos financieros del país.</Parrafo>
      </>)}
    </PrincipalContenedor>
  );
};

export default InformacionEntidades;

const PrincipalContenedor = styled.div`
  background-color: #005520;
  display: flex;
  flex-direction: column;
  gap: ${smaLength1};
  height: ${larLength3};
  padding: ${medLength1};
  width: 100%;

  @media (min-width: 768px) {
    height: ${larLength2};
  };

  @media (min-width: 850px) {
    padding: ${medLength1} ${medLength3};
  };
`;

const Parrafo = styled.p`
  color: ${whiteSacimex};
  font-size: ${smaFont};
  text-align: justify;
  width: 100%;
`;

const SubTitulo = styled.p`
  color: ${whiteSacimex};
  font-size: ${smaFont};
  font-weight: 800;
`;