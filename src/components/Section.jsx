import styled from 'styled-components';
import { medLength1, medLength3, larLength1, } from '../utils/stylesRules';

const Section = ({id, children, background, presentation}) => {
  return(
    <PrincipalContenedor
      id={id}
      $background={background}
      $presentation={presentation}>
        {children}
    </PrincipalContenedor>
  );
};

export default Section;

const PrincipalContenedor = styled.section`
  align-items: center;
  ${({ $background }) => $background && (`background-color: ${$background};`)};
  display: flex;
  flex-direction: column;
  gap: ${medLength3};
  justify-content: center;
  ${({ $presentation }) => !$presentation && 'min-height: calc(100vh - ${medLength3});'}
  padding-bottom: ${larLength1};
  position: relative;
  width: 100%;
  z-index: 20;

  @media (min-width: 768px) {
    min-height: 0;
  };
`;