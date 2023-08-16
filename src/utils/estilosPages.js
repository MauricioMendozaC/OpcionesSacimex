import styled, { createGlobalStyle } from 'styled-components';

export const EstilosGlobales = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  };
  
  body {
    background-color: ${({ $fondoGris }) => $fondoGris ? '#DDDDDD' : '#FFFFFF'};
    font-size: 20px;
    ${({ $evitarScroll }) => $evitarScroll && ('overflow: hidden;overscroll-behavior: none;')}
  };

  @font-face {
    font-family: 'Presidencia Fina';
    src: url('/fonts/PresidenciaFina.otf') format('truetype');
  }

  @font-face {
    font-family: 'Presidencia Firme';
    src: url('/fonts/PresidenciaFirme.otf') format('truetype');
  }
`;

export const CentrarPrincipalContenedor = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;