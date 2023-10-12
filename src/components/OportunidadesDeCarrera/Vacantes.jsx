import styled from 'styled-components';

const Vacantes = ({ vacantes, setInfoVacantes, setVacanteActiva }) => {

  const displayInformation = index => {
    setInfoVacantes(true);
    setVacanteActiva(index);
  };

  return(<>
    {vacantes && vacantes.map((item, index) => (
      (<Vacante key={index}>
        <h5>{item.vacante}</h5>
        <ul>
          {item.requisitos.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <VerMas>
          <button onClick={() => displayInformation(index)}>Ver más...</button>
        </VerMas>
      </Vacante>)
    ))}
  </>)
};

export default Vacantes;

const Vacante = styled.div`
  background-color: #fef5e5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 40px;
  position: relative;
  text-decoration: none;
  width: 100%;

  h5 {
    color: #005520;
    font-family: 'Presidencia Firme', sans-serif;
    font-size: 1.25em;
    letter-spacing: 1px;
    padding-bottom: 10px;
  };

  ul {
    margin-left: 10px;
  };

  li {
    color: #000000;
    font-family: 'Presidencia Fina', sans-serif;
    font-size: 1em;
  };
`;

const VerMas = styled.div`
  bottom: 0;
  display: grid;
  height: 35px;
  left: 0;
  place-items: center;
  position: absolute;
  width: 100%;

  button {
    background: none;
    border: none;
    color: #005520;
    cursor: pointer;
    font-family: 'Presidencia Firme', sans-serif;
    font-size: 1em;
    letter-spacing: 1px;
    transition: transform .3s;

    &:hover {
      transform: scale(105%);
    };
  };
`;