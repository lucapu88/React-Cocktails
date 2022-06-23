import React from 'react';
import { FaBlackberry } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <strong>Footer</strong>{' '}
        <a href="https://github.com/lucapu88" target="_blank">
          <small>Luca Caputo </small>
        </a>
        <a href="https://github.com/lucapu88/React-Cocktails" target="_blank">
          <strong> Link alla repo del progetto</strong>
        </a>
      </footer>
    </Wrapper>
  );
};

//giusto per provare qualcosa di diverso:
const Wrapper = styled.article`
  background-color: #427bbb;
  color: #ffff;
  text-align: center;
  height: 50px;
  padding: 10px;
`;

export default Footer;
