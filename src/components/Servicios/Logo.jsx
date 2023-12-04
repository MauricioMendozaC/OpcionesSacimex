import styled from 'styled-components';
import { larLength2 } from '../../utils/stylesRules';

const Logo = ({ href, enlaceImagen, nombre }) => {
  return(
    <StyledA
      href={href}
      target='_blank'
      rel='noopener noreferrer'>
        <img src={enlaceImagen} alt={`Logo de ${nombre}`} loading='lazy'/>
    </StyledA>
  );
};

export default Logo;

const StyledA = styled.a`
  cursor: pointer;
  transition: transform .3s;
  width: ${larLength2};

  img {
    object-fit: cover;
    width: 100%;
  };

  &:hover {
    transform: scale(105%);
  };
`;