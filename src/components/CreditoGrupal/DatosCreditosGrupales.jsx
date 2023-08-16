import styled from 'styled-components';

const DatosCreditosGrupales = ({ creditoActivo }) => {
  return(<>
    <Parrafo>
      {creditoActivo === 1 && (`¡Descubre "Somos Crédito"! Un innovador préstamo grupal solidario mixto, diseñado para personas 
        auto seleccionables (hombres y mujeres) que valoran el apoyo mutuo. Aprende sobre finanzas mientras alcanzas tus metas 
        junto a tu comunidad. ¡Únete ahora y haz realidad tus sueños!`)}
      {creditoActivo === 2 && (`¡Descubre "Da-más Crédito"! Un préstamo grupal solidario mixto, diseñado para mujeres auto 
        seleccionables que valoran el apoyo mutuo. Aprende de forma cíclica y secuencial sobre finanzas mientras alcanzas tus 
        metas junto a otras mujeres con objetivos similares. ¡Únete ahora y construyamos juntas un futuro financiero próspero!`)}
      {creditoActivo === 3 && (`¡Descubre "Ella-Sabiduría"! Un producto financiero único, administrado por un centro 
        especializado, formado por grupos solidarios de mujeres auto seleccionables que se apoyan mutuamente. Comprometidas con 
        una metodología financiera de aprendizaje cíclico, educativo y secuencial, basada en principios solidarios.`)}
    </Parrafo>
    <StyledUl>
      {(creditoActivo === 1 || creditoActivo === 2) && (<>
        <li>Únete a un grupo solidario de 5 a 15 integrantes.</li>
        <li>Sin comisión de apertura.</li>
        <li>Alcancen juntos sus objetivos comerciales, de consumo o vivienda.</li>
        <li>Escoge entre plazos de 4, 5, 6 y 7 meses.</li>
        <li>Realiza pagos iguales semanales, catorcenales o quincenales.</li>
        <li>Te visitamos en tu domicilio para entender tus necesidades.</li>
      </>)}
      {creditoActivo === 1 && (<li>Disponible para todas las personas que tengan entre 19 y 75 años.</li>)}
      {(creditoActivo === 3) && (<>
        <li>Únete a un grupo de 15 o más integrantes</li>
        <li>Impulsa tu negocio con nuestro crédito diseñado para proyectos comerciales.</li>
        <li>Obtén financiamiento a una tasa global mensual del 5.68%.</li>
        <li>Plazo de 5 meses, ofreciéndote agilidad en tus metas.</li>
        <li>Realiza pagos fijos semanales iguales.</li>
        <li>Apertura tu crédito con únicamente $ 150.</li>
      </>)}
    </StyledUl>
    <StyledDiv>
      <StyledH3>¿Listo para tu Crédito? Estos son los requisitos:</StyledH3>
      <StyledUl>
        {(creditoActivo === 2 || creditoActivo === 3) && (<>
          <li>Ser una mujer emprendedora.</li>
        </>)}
        {(creditoActivo === 1 || creditoActivo === 2 || creditoActivo === 3) && (<>
          <li>Tener entre 19 y 75 años.</li>
          <li>Actividad económica lícita y verificada por nuestros asesores.</li>
        </>)}
        {(creditoActivo === 3) && (<>
          <li>Ingresos mensuales menores a $ 10,000.</li>
        </>)}
      </StyledUl>
    </StyledDiv>
    <StyledDiv>
      <StyledH4>¿Qué documentos necesitas?</StyledH4>
      <StyledUl>       
        <li>Acta de nacimiento.</li>
        <li>Identificación vigente.</li>
        <li>Comprobante de domicilio.</li>
        <li>CURP.</li>
      </StyledUl>
    </StyledDiv>
  </>);
};

export default DatosCreditosGrupales;

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

const StyledDiv = styled.div`
  width: 100%;
`;