import styled from 'styled-components';

const Vacancies = ({ activeBranch, jobVacancies, branches, setWindowState, setVacanteSeleccionada }) => {
  const selectedBranch = branches.find(branch => branch.idSucursal === activeBranch);

  return(
    <VacanciesContainer>
      <StyledH5>{selectedBranch ? selectedBranch.nombreSucursal : 'Selecciona una sucursal.'}</StyledH5>
      {jobVacancies
        .filter(vacante => vacante.idSucursal === activeBranch)
          .map(vacancie => (
            <StyledButton
              key={vacancie.idVacante}
              onClick={() => {setWindowState(4); setVacanteSeleccionada(vacancie.idVacante);}}>
              <span>{vacancie.nombreVacante}</span>
            </StyledButton>
      ))}
    </VacanciesContainer>
  );
};

export default Vacancies;

const VacanciesContainer = styled.div`
  align-items: center;
  background-color: #DDDDDD;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StyledH5 = styled.h5`
  color: #005520;
  font-size: 1em;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: #FFFFFF;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  transition: transform .3s, box-shadow .3s;
  width: 100%;

  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    transform: translateY(-5px);
  };

  span {
    color: #00632F;
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
  };
`;