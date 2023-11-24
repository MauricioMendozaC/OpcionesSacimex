import styled, { createGlobalStyle } from 'styled-components';

export const EstilosGlobales = createGlobalStyle`
  body {
    background-color: ${({ $fondoGris }) => $fondoGris ? '#DDDDDD' : '#FFFFFF'};
  };
`;

export const BloquearScroll = createGlobalStyle`
  body {
    ${({ $evitarScroll }) => $evitarScroll && ('overflow: hidden;overscroll-behavior: none;')}
  };
`;

export const CentrarPrincipalContenedor = styled.section`
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
`;