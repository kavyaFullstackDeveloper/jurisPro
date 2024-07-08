import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.jpg'; 

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0); 
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: absolute; 
  width: 100%;
  z-index: 1000;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
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
`;

const NavLink = styled(Link)`
color: #fff;
 /*  color: ${(props) => props.theme.primaryColor}; */
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
  /*   background: ${(props) => props.theme.accentColor}; */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <Logo src={logo} alt="JurisPro Logo" />
        <NavHeading>JurisPro</NavHeading>
      </NavLeft>
      <NavRight>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/insights">Our Insights</NavLink>
        <NavLink to="/team">Our Team</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
