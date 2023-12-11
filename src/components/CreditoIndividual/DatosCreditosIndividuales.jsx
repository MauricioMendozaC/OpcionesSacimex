import styled from 'styled-components';
import { yellowSacimex, text, label, smaLength1, smaLength2, smaFont, medFont } from '../../utils/stylesRules';

const DatosCreditosIndividuales = ({ creditoActivo }) => {
  return(<>
    {creditoActivo === 1 && (<>
      <div>
        <Parrafo>Con <MotorSpan>Saci-Motor</MotorSpan> inicia una etapa, es un crédito refaccionario, destinado a la compra de automotores que ponen 
        en marcha tu actividad económica segmentado en:</Parrafo>
        <StyledUl>
          <li>Moto taxis.</li>
          <li>Resto de automotores.</li>
        </StyledUl>
      </div>
      <StyledDiv>
        <StyledH3>Moto taxis</StyledH3>
        <StyledH4>Características básicas:</StyledH4>
        <StyledUl>
          <li>Sin comisiones.</li>
          <li>Edad de 21 a 65 años.</li>
          <li>Del 20% al 100% de la unidad.</li>
          <li>Garantía líquida del 10% del crédito.</li>
          <li>Saldo deudor y apoyo funerario básico.</li>
          <li>Pagos fijos semanales con plazos de 12 a 36 meses.</li>
          <li>Tasa mensual de 2.5% a 3.5% según riesgo e historial.</li>
          <li>(Aplican restricciones o condiciones por historial de crédito).</li>
        </StyledUl>
        <StyledH4>Requisitos:</StyledH4>
        <StyledUl>
          <li>Endoso de factura, aval y resguardo de copia de llaves.</li>
          <li>Aval de 21 a 70 años (en grupo de 3 o más no se requiere aval).</li>
          <li>Seguro, coberturas y accesorios de la unidad a cuenta del cliente.</li>
          <li>Comprobante de domicilio menor a 3 meses (cliente y aval).</li>
          <li>Verificación de actividad y visita (cliente y aval).</li>
          <li>INE vigente (cliente y aval).</li>
          <li>Acta de nacimiento.</li>
        </StyledUl>
      </StyledDiv>
      <StyledDiv>
        <StyledH3>Otros automotores</StyledH3>
        <StyledH4>Características básicas:</StyledH4>
        <StyledUl>
          <li>Sin comisiones.</li>
          <li>Edad de 21 a 65 años.</li>
          <li>Del 20% al 100% de la unidad.</li>
          <li>Garantía líquida del 10% del crédito.</li>
          <li>Saldo deudor y apoyo funerario básico.</li>
          <li>Pagos fijos mensuales con plazos de 12 a 60 meses.</li>
          <li>Tasa mensual de 2.10% a 2.25% según riesgo e historial.</li>
          <li>(Aplican restricciones o condiciones por historial de crédito).</li>
        </StyledUl>
        <StyledH4>Requisitos:</StyledH4>
        <StyledUl>
          <li>Endoso de factura, aval y resguardo de copia de llaves.</li>
          <li>Aval de 21 a 70 años (en grupo de 3 o más no se requiere aval).</li>
          <li>Seguro, coberturas y accesorios de la unidad a cuenta del cliente.</li>
          <li>Comprobante de domicilio menor a 3 meses (cliente y aval).</li>
          <li>Verificación de actividad y visita (cliente y aval).</li>
          <li>INE vigente (cliente y aval).</li>
          <li>Acta de nacimiento.</li>
        </StyledUl>
      </StyledDiv>
    </>)}
    {creditoActivo === 2 && (<>
      <Parrafo><CreceSpan>Saci-Crece</CreceSpan> es para ti si exiges un crédito que se adapte a tu proyecto y personalidad única, ya que es un crédito 
      flexible para cualquier destino sea comercial, personal o vivienda.</Parrafo>
      <StyledH3>Características básicas:</StyledH3>
      <StyledUl>
        <li>Sin comisiones.</li>
        <li>Hasta 1,000,000.</li>
        <li>Garantía del 10% del crédito.</li>
        <li>Saldo deudor y apoyo funerario por muerte.</li>
        <li>Pagos fijos mensuales con plazos de 12 a 60 meses.</li>
        <li>Tasa mensual del 2% al 3.5% según riesgo, monto y garantía.</li>
          <li>(Aplican restricciones o condiciones por historial de crédito).</li>
      </StyledUl>
      <StyledH3>Requisitos:</StyledH3>
        <StyledUl>
          <li>Edad de 21 a 65 años.</li>
          <li>Garantía líquida, mueble y/o inmueble.</li>
          <li>Historial y puntuación de crédito aceptable.</li>
          <li>Seguro, coberturas y accesorios a cuenta del cliente.</li>
          <li>Comprobante de domicilio menor a 3 meses (cliente y aval).</li>
          <li>Verificación de actividad y visita (cliente y aval).</li>
          <li>INE vigente (cliente y aval).</li>
          <li>Acta de nacimiento.</li>
        </StyledUl>
    </>)}
    {creditoActivo === 3 && (<>
      <Parrafo><LineaSpan>Línea Sacimex</LineaSpan> es el crédito revolvente que desbloquea nuevas oportunidades para tu empresa o negocio, destina estos recursos a capital de trabajo o capital de inversión según necesidades o proyectos, con este contrato adicionalmente tendrás opciones a créditos simples.</Parrafo>
      <StyledH3>Características básicas:</StyledH3>
      <StyledUl>
        <li>Monto hasta 3.5 millones.</li>
        <li>Contrato de 24 a 60 meses.</li>
        <li>Comisión por apertura: 0.5% + IVA</li>
        <li>Comisión por disposición: 0.5% + IVA.</li>
        <li>Disposiciones de 3, 6, 12, 18 y 24 meses.</li>
        <li>Aplican restricciones o condiciones por historial de crédito.</li>
        <li>Tasa mensual del 2.25% al 2.75% según riesgo, monto y garantía.</li>
      </StyledUl>
      <StyledH3>Requisitos generales:</StyledH3>
      <StyledUl>
        <li>Edad de 21 a 65 años.</li>
        <li>Antigüedad comercial 1 año.</li>
        <li>Garantía del 10% de la disposición.</li>
        <li>Garantía personal cuando apliquen.</li>
        <li>Garantías reales mueble y/o inmueble.</li>
        <li>Historial y puntuación de crédito aceptable.</li>
        <li>Verificación de actividad y formato de visita.</li>
        <li>Comprobante de domicilio menor a 3 meses.</li>
        <li>Seguro, coberturas y accesorios a cuenta del cliente.</li>
      </StyledUl>
      <StyledH3>Requisitos Persona Física:</StyledH3>
      <StyledUl>
        <li>Acta de nacimiento.</li>
        <li>Acta de matrimonio.</li>
        <li>Identificación vigente.</li>
        <li>Constancia de Situación Fiscal y 32-D.</li>
        <li>Últimos 3 estados de cuenta bancarios.</li>
        <li>Balance y estado de resultados del último año y mes.</li>
      </StyledUl>
      <StyledH3>Requisitos Persona Moral:</StyledH3>
      <StyledUl>
        <li>Acta constitutiva con inscripción al registro público.</li>
        <li>Poderes de los representantes.</li>
        <li>Estructura Accionaria.</li>
        <li>Documentos del representante legal: INE y comprobante.</li>
        <li>Consulta en SIC de la empresa, accionistas y representantes.</li>
        <li>Organigrama con nombre completo de cargos hasta jerarquía de nivel 3.</li>
        <li>Últimos 3 estados de cuenta bancarios.</li>
        <li>Balance y estado de resultados del último año y mes.</li>
        <li>Formato 32 -D de la empresa y representante legal.</li>
      </StyledUl>
    </>)}
  </>);
};

export default DatosCreditosIndividuales;

const Parrafo = styled.p`
  color: ${label};
  font-size: ${smaFont};
  text-align: justify;
  width: 100%;
`;

const MotorSpan = styled.span`
  color: #EE0000;
  font-family: 'Pacifico', cursive;
  font-size: 1em;
`;

const LineaSpan = styled.span`
  color: #3975b7;
  font-family: 'Marck Script', cursive;
  font-size: 1.428em;
`;

const CreceSpan = styled.span`
  color: #24840C;
  font-family: 'Kalam', cursive;
  font-size: 1.142em;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0 ${smaLength2};
  text-align: justify;
  width: 100%;

  li {
    color: ${label};
    font-size: ${smaFont};
    padding-bottom: ${smaLength1};
  };

  li::before {
    color: ${yellowSacimex};
    content: "»";
    font-size: ${medFont};
    margin-right: ${smaLength1};
  };
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: ${text};
  font-size: ${smaFont};
  text-align: center;
`;

const StyledH4 = styled.h4`
  color: ${label};
  font-size: ${smaFont};
  font-weight: 800;
  text-align: center;
`;