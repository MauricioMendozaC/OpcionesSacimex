import styled from 'styled-components';
import Boton from '../Boton';

const InfoVacante = ({ vacantes, vacanteSeleccionada }) => {

  return(<ContenedorTexto>
      <Titulo>{vacantes[vacanteSeleccionada] && (vacantes[vacanteSeleccionada].vacante)}</Titulo>
      <Textos>
        <SubTitulo>Requisitos:</SubTitulo>
        <Lista>
          {vacantes[vacanteSeleccionada] && vacantes[vacanteSeleccionada].requisitos.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Funciones:</SubTitulo>
        <Lista>
          {vacantes[vacanteSeleccionada] && vacantes[vacanteSeleccionada].funciones.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Ofrecemos:</SubTitulo>
        <Lista>
          {vacantes[vacanteSeleccionada] && vacantes[vacanteSeleccionada].ofrecemos.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Lista>
      </Textos>
      <Boton
        texto='¡Postúlate!'
        referencia='https://forms.gle/CgsbcKBVwgvM79wh6'
        amarillo
        newBlank/>
  </ContenedorTexto>);
};

export default InfoVacante;

const Titulo = styled.h5`
  color: #005520;
  font-family: 'Presidencia Firme',sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  padding-bottom: 10px;
  text-align: center;
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitulo = styled.h6`
  color: #005520;
  font-family: 'Presidencia Fina',sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  padding-bottom: 10px;
`;

const Lista = styled.ul`
  font-family: 'Presidencia Fina',sans-serif;
  font-size: 1em;
  text-align: justify;
  width: 100%;
`;

const ContenedorTexto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  width: 100%;
`;