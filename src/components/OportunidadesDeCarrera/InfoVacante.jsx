import styled from 'styled-components';

const InfoVacante = ({ info, infoMostrada }) => {
  

  return(<>
    {infoMostrada === 1 && (<>
      <Titulo>{info && (info.vacante)}</Titulo>
      <Textos>
        <SubTitulo>Requisitos:</SubTitulo>
        <Lista>
          {info && info.requisitos.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Funciones:</SubTitulo>
        <Lista>
          {info && info.funciones.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Ofrecemos:</SubTitulo>
        <Lista>
          {info && info.ofrecemos.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Lista>
      </Textos>
      <Boton href='https://docs.google.com/forms/d/e/1FAIpQLScr2MtG6KyV6mxhM105QeAHCQO5bhrNoi6uwT2pmTuiia_itw/viewform?usp=sf_link'>¡Postúlate!</Boton>
    </>)}
  </>);
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

const Boton = styled.a`
  background-color: #F5A200;
  border: none;
  border-radius: 5px;
  color: #005520;
  cursor: pointer;
  font-family: 'Presidencia Firme',sans-serif;
  font-size: 1em;
  padding: 9px 18px;
  text-decoration: none;
`;