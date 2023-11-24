import { useState, useEffect } from 'react';
import styled from 'styled-components';

const BranchesWithVacancies = ({ branches, jobVacancies, activeBranch, setActiveBranch, scrollToElement }) => {
  const [selectedBranches, setSelectedBranches] = useState(null);

  useEffect(() => {
    pickBranches();
  }, []);

  const pickBranches = () => {
    let tempArray = branches.filter(branch =>
      jobVacancies.some(vacante => vacante.idSucursal === branch.idSucursal)
    );

    setSelectedBranches(tempArray);
  };

  return(
    <PrincipalContainer>
      {selectedBranches && selectedBranches.map( ele => (
      <BranchContainer
        key={ele.idSucursal}
        $activeBranch={activeBranch === ele.idSucursal}
        onClick={() => {setActiveBranch(ele.idSucursal); scrollToElement()}}>
          <StyledP>{ele.nombreSucursal}</StyledP>
          <p>{ele.zonaSucursal}</p>
      </BranchContainer>
      ))}
    </PrincipalContainer>
  );
};

export default BranchesWithVacancies;

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BranchContainer = styled.button`
  background-color: ${({ $activeBranch }) => $activeBranch ? '#F7B432' : '#FFFFFF'};
  border: 1px solid #DDDDDD;
  color: #000000;
  cursor: pointer;
  font-size: 1em;
  padding: 10px;
  transition: background .3s;

  ${({ $activeBranch }) => !$activeBranch && (`
    &:hover {
      background-color: #EEEEEE;
    };
  `)}
`;

const StyledP = styled.p`
  color: #005520;
  font-weight: 700;
`;