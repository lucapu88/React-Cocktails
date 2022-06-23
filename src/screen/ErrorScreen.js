import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/not-found.json';
import { Link } from 'react-router-dom';
import useTitle from '../custom-hooks/useTitle';

const ErrorScreen = () => {
  useTitle('Error :(');

  return (
    <Wrapper>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width={500}
        height={500}
      />
      <h2>Pagina non trovata</h2>
      <Link to="/" className="btn">
        torna in home{' '}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
