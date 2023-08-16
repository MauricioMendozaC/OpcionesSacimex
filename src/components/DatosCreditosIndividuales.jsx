import styled from 'styled-components';

const DatosCreditosIndividuales = ({ creditoActivo }) => {
  return(<>
    <Parrafo>
      {creditoActivo === 1 && (`¡Descubre "Saci-Motor"! Un producto financiero revolucionario y solidario, diseñado para grupos 
      de personas auto seleccionables (hombres y mujeres) que valoran el apoyo mutuo y desean avanzar juntos hacia un futuro 
      financiero próspero.`)}
      {creditoActivo === 2 && (`Descubre "Saci-Crece"! Un producto de tecnología individual diseñado para personas con capacidad 
      económica demostrada y la habilidad legal para contratarse. Ya seas empleado o desarrolles actividades productivas lícitas, 
      "Saci-Crece" está diseñado para ayudarte a alcanzar tus metas financieras y potenciar tu crecimiento.`)}
      {creditoActivo === 3 && (`¡Desbloquea nuevas oportunidades para tu negocio con nuestro crédito comercial a medida! ¿Estás 
      listo para expandir, renovar o mejorar tu empresa? Nuestro crédito te ofrece flexibilidad y conveniencia para lograrlo.`)}
    </Parrafo>
    <StyledUl>
      {(creditoActivo ===1 || creditoActivo === 2) && (<>
        <li>Comienza tu proceso sin comisión de apertura.</li>
        <li>Disponible para todas las personas con edades de 21 a 65 años.</li>
      </>)}
      {(creditoActivo === 1) && (<>
        <li>Puedes elegir tener integrantes adicionales o ser el único solicitante.</li>
        <li>Cumple tu meta de tener un automóvil con nuestro crédito diseñado especialmente para potenciar tu trabajo.</li>
        <li>Escoge entre plazos de 12 a 60 meses.</li>
        <li>Elige entre pagos semanales, catorcenales, quincenales o mensuales.</li>
      </>)}
      {(creditoActivo === 2) && (<>
        <li>Financia tus proyectos comerciales, consumo o vivienda.</li>
        <li>Escoge entre plazos de 6 a 60 meses.</li>
        <li>Elige entre pagos mensuales y semanales iguales y fijos.</li>
      </>)}
      {(creditoActivo === 3) && (<>
        <li>Disponible para todas las personas con edades de 21 a 65 años.</li>
        <li>Escoge entre crédito comercial revolvente o simple.</li>
        <li>Escoge entre plazos de 3, 6, 12, 18 y 24 meses según el destino dispuesto de los fondos.</li>
        <li>Contrato de 24 a 60 meses, ofreciéndote comodidad en tus plazos.</li>
        <li>Disponible para todas las personas con edades de 21 a 65 años.</li>
        <li>Realizamos visitas de inspección para entender tus necesidades en detalle.</li>
      </>)}
    </StyledUl>
    <StyledDiv>
      <StyledH3>¿Listo para tu Crédito? Estos son los requisitos:</StyledH3>
      {(creditoActivo === 3) && (
        <StyledH4>Personas físicas y/o representantes:</StyledH4>
      )}
      <StyledUl>
        {(creditoActivo === 1 || creditoActivo === 2) && (<>
          <li>Tener entre 21 y 65 años.</li>
          <li>Tener actividad económica lícita y verificada por nuestros asesores.</li>
          <li>Contar con un aval.</li>
        </>)}
        {(creditoActivo === 3) && (<>
          <li>Tener entre 21 y 65 años.</li>
          <li>Contar con un aval.</li>
          <li>Acta de nacimiento</li>
          <li>Acta de matrimonio</li>
          <li>Identificación vigente.</li>
          <li>Comprobante de domicilio (menor de tres meses).</li>
          <li>CURP</li>
          <li>Constancia de situación fiscal.</li>
          <li>Estados financieros.</li>
          <li>3 estados de cuenta bancaria.</li>
        </>)}
      </StyledUl>
    </StyledDiv>
    {(creditoActivo === 1 || creditoActivo === 2) && (
      <StyledDiv>
        <StyledH4>Requisitos del aval:</StyledH4>
        <StyledUl>
          <li>Tener entre 21 y 70 años.</li>
          <li>Tener actividad económica lícita y verificada por nuestros asesores.</li>
        </StyledUl>
      </StyledDiv>
    )}
    {(creditoActivo === 1 || creditoActivo === 2) && (<>
      <StyledDiv>
        <StyledH4>¿Qué documentos necesitas?</StyledH4>
        <StyledUl>
          <li>Acta de nacimiento.</li>
          <li>Identificación vigente.</li>
          <li>Comprobante de domicilio (menor de tres meses).</li>
          <li>CURP.</li>
        </StyledUl>
      </StyledDiv>
    </>)}
    {(creditoActivo === 1 || creditoActivo === 2) && (<>
      <StyledDiv>
        <StyledH4>¿Qué documentos necesita tu aval?</StyledH4>
        <StyledUl>       
          <li>Identificación vigente.</li>
          <li>Comprobante de domicilio (menor de tres meses).</li>
          <li>CURP.</li>
        </StyledUl>
      </StyledDiv>
    </>)}
    {(creditoActivo === 3) && (<>
      <StyledDiv>
        <StyledH4>Aval:</StyledH4>
        <StyledUl>       
          <li>Tener entre 21 y 65 años.</li>
          <li>Acta de nacimiento</li>
          <li>Acta de matrimonio</li>
          <li>Identificación vigente.</li>
          <li>Comprobante de domicilio (menor de tres meses).</li>
          <li>CURP</li>
        </StyledUl>
      </StyledDiv>
    </>)}
    {(creditoActivo === 3) && (<>
      <StyledDiv>
        <StyledH4>Persona moral:</StyledH4>
        <StyledUl>       
          <li>Acta constitutiva con inscripción al registro público.</li>
          <li>Poderes de los representantes.</li>
          <li>Estructura Accionaria.</li>
          <li>Documentos representante legal: INE, CURP y comprobante.</li>
          <li>Comprobante de domicilio de la empresa.</li>
          <li>Consulta en SIC de la empresa, accionistas y representantes.</li>
          <li>Organigrama con nombre completo de cargos hasta jerarquía de nivel 3.</li>
          <li>Últimos 3 estados de cuentas bancario.</li>
          <li>Balance y estado de resultados de el último año y mes.</li>
        </StyledUl>
      </StyledDiv>
    </>)}
  </>);
};

export default DatosCreditosIndividuales;

const Parrafo = styled.p`
  color: #000000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
  text-align: justify;
  width: 100%;
`;

const StyledUl = styled.ul`
  color: #000;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 0.875em;
  list-style: none;
  padding: 0 15px;
  text-align: justify;
  width: 100%;

  li::before {
    color: #F5A200;
    content: "»";
    font-size: 1.75em;
    margin-right: 3px;
  };
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: #257140;
  font-family: 'Presidencia Firme', sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  text-align: center;
`;

const StyledH4 = styled.h4`
  color: #257140;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1em;
  text-align: center;
`;