import React from 'react';
import {Link} from 'react-router-dom';
import Imagelogo from '../../assets/img/Logo.png';
import Button from '../Button';
import Logo from './components/Logo';
import styled from 'styled-components';
// import ButtonLink from './components/ButtonLink';

const Nav = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);
  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

function Menu() {
  return (
    <Nav>
      <Link to="/">
        <Logo as="img" src={Imagelogo} alt="edinhoflix logo"/>
      </Link>
      <Button to="/cadastro/video" >
        Novo vídeo
      </Button>
    </Nav>
  );
}

export default Menu;