// Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #042f2e;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} JurisPro Law Firm. All rights reserved. | Designed by{' '}
        <FooterLink href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          JurisPro
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
