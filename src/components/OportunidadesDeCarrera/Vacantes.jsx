import { useState } from 'react';
import styled from 'styled-components';

const Vacantes = () => {
  const [vacantes, setVacantes] = useState(true);

  return(<>
    {!vacantes && (
      <StyledP>Lamentablemente, en este momento no tenemos vacantes disponibles. Sin embargo, te invitamos a seguir visitando 
      nuestro portal, ya que estamos constantemente en busca de talento excepcional.</StyledP>
    )}
    {vacantes && (<>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vQmO2z78J0fjh9FU6IGCjEMVChAtX3a3ErKLDye3-XtirdXd4EJRyrBwKMOn3LvsSNaJdblNv-inQYZ/pub?embedded=true"></iframe>
    </>)}
  </>)
};

export default Vacantes;

const StyledP = styled.p`
  color: #00632F;
  font-size: 1em;
  letter-spacing: 1px;
  text-align: center;
  width: 100%;
`;