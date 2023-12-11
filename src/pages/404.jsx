import styled from 'styled-components';
import Boton from '../components/Boton';
import Animation from '../components/404/Animation';
import {text, label, smaLength3,larLength3, smaFont, larFont} from '../utils/stylesRules';

const ErrorPage = () => {
  return(
    <MainContainer>
      <ContentContainer>
        <AnimationContainer><Animation/></AnimationContainer>
        <TextsContainer>
          <StyledH3>Error 404: Página no encontrada</StyledH3>
          <StyledP>Lamentablemente, la página que intentas acceder no se encuentra en nuestro dominio en este momento. Nos 
            disculpamos por cualquier inconveniente que esto pueda causarte.</StyledP>
        </TextsContainer>
      </ContentContainer>   
      <Boton
        referencia='/Inicio'
        texto='Ir al inicio'/>   
    </MainContainer>
  );
};

export default ErrorPage;

const MainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${smaLength3};
  justify-content: center;
`;

const AnimationContainer = styled.div`
  width: ${larLength3};
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  max-width: 350px;
  width: 90%;
`;

const StyledH3 = styled.h3`
  color: ${text};
  font-size: ${larFont};
  text-align: center;
`;

const StyledP = styled.p`
  color: ${label};
  font-size: ${smaFont};
  text-align: center;
`;