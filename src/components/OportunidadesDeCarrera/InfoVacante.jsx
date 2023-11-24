import styled from 'styled-components';
import Boton from '../Boton';

const InfoVacante = ({ vacanteSeleccionada, jobVacancies, profiles }) => {
  const vacancie = jobVacancies.find(vacante => vacante.idVacante === vacanteSeleccionada);
  const selectedProfile = profiles.find(profile => profile.idPerfil === vacancie.idPerfil);

  return(
    <ContenedorTexto>
      <Titulo>{vacancie.nombreVacante}</Titulo>
      <Textos>
        <SubTitulo>Requisitos:</SubTitulo>
        <Lista>
          {selectedProfile.requisitos.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Funciones:</SubTitulo>
        <Lista>
          {selectedProfile.funciones.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Ofrecemos:</SubTitulo>
        <Lista>
          {selectedProfile.ofrecemos.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </Lista>
      </Textos>
      <Boton
        texto='¡Postúlate!'
        referencia={vacancie.formularioVacantes}
        amarillo
        newBlank/>
    </ContenedorTexto>
  );
};

export default InfoVacante;

const Titulo = styled.h5`
  color: #005520;
  font-size: 1.25em;
  padding-bottom: 10px;
  text-align: center;
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitulo = styled.h6`
  color: #005520;
  font-size: 1em;
  font-weight: 400;
  padding-bottom: 10px;
`;

const Lista = styled.ul`
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