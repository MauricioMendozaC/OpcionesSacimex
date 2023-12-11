import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import animationData from '../../assets/animations/404Animation.json';
 
const Animation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <Container ref={containerRef}/>
  );
};
 
export default Animation;

const Container = styled.div`
  object-fit: cover;
  width: 100%;
`;