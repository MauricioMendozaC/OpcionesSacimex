import styled, { css } from 'styled-components';

const Section = ({id, children, background, presentacion}) => {
  return(
    <PrincipalContenedor
      id={id}
      $background={background}
      $presentacion={presentacion}>
        {children}
    </PrincipalContenedor>
  );
};

export default Section;

const PrincipalContenedor = styled.section`

  ${({ $presentacion }) => !$presentacion && css`
    align-items: center;
    ${({ $background }) => $background && (`background-color: ${$background};`)};
    display: flex;
    flex-direction: column;
    gap: 70px;
    justify-content: center;
    min-height: calc(100vh - 60px);
    padding: 30px 0 100px;
    position: relative;
    width: 100%;
    z-index: 20;

    @media (min-width: 768px) {
      min-height: 0;
    };
  `};

  ${({ $presentacion }) => $presentacion && css`
    height: calc(100vh - 60px);
    margin-top: 60px;
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      height: 576px;
    };
  `};
`;