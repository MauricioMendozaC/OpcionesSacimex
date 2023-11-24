import styled from 'styled-components';

const Vacantes = ({ vacantes, setWindowState, setVacanteSeleccionada }) => {

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
          <button onClick={() => {setWindowState(4); setVacanteSeleccionada(index)}}>Ver más...</button>
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
    font-size: 1.25em;
    padding-bottom: 10px;
  };

  ul {
    margin-left: 10px;
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
    font-size: 1em;
    font-weight: 700;
    transition: transform .3s;

    &:hover {
      transform: scale(105%);
    };
  };
`;