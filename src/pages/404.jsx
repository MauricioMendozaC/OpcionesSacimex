import styled from 'styled-components';
import Boton from '../components/Boton';
import Animation from '../components/404/Animation';

const ErrorPage = () => {
  return(
    <MainContainer>
      <ContentContainer>
        <AnimationContainer><Animation/></AnimationContainer>
        <TextsContainer>
          <StyledH3>Error 404: Página no encontrada</StyledH3>
          <StyledP>Lamentablemente, la página que intentas acceder no se encuentra en nuestro dominio en este momento. Nos 
            disculpamos por cualquier inconveniente que esto pueda causarte.</StyledP>
          <Boton
            referencia='/Inicio'
            texto='Ir al inicio'/>
        </TextsContainer>
      </ContentContainer>      
    </MainContainer>
  );
};

export default ErrorPage;

const MainContainer = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const AnimationContainer = styled.div`
  width: 250px;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
  width: 90%;
`;

const StyledH3 = styled.h3`
  color: #00632F;
  font-size: 28px;
  text-align: center;
`;

const StyledP = styled.p`
  text-align: center;
`;