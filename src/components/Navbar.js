// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.jpg'; 

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0); 
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: absolute; 
  width: 100%;
  z-index: 1000;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavHeading = styled.h1`
  font-size: 24px;
  color: #fff;
  transform: scale(1.2);
  margin: 10px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background 0.3s;
  &:hover {
    border: 1px;
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0);
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLeft>
        <Logo src={logo} alt="JurisPro Logo" />
        <NavHeading>JurisPro</NavHeading>
      </NavLeft>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavRight isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/insights" onClick={() => setIsOpen(false)}>Our Insights</NavLink>
        <NavLink to="/team" onClick={() => setIsOpen(false)}>Our Team</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
