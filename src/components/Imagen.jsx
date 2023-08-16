import styled from 'styled-components';

const Imagen = ({ tamano, imagen, alt, extras, extrasImg }) => {
  return(
    <PrincipalContenedor
      $tamano={tamano}
      $extras={extras}
      $extrasImg={extrasImg}>
        <img
          src={imagen}
          alt={alt}
          loading='lazy'/>
    </PrincipalContenedor>
  );
};

export default Imagen;

const PrincipalContenedor = styled.div`
  ${({ $tamano }) => $tamano && (`width: ${$tamano};`)};
  ${({ $extras }) => $extras && ($extras)};

  img {
    ${({ $extrasImg }) => $extrasImg && ($extrasImg)};
    object-fit: cover;
    width: 100%;
  };
`;