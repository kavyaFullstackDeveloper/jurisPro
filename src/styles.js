// src/styles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: #F5F5F5;
    color: #333;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #2C3E50;
  }

  p {
    line-height: 1.6;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #2980B9;
  }
`;

export const theme = {
  primaryColor: '#2C3E50',
  secondaryColor: '#2980B9',
  accentColor: '#ECF0F1',
  backgroundColor: '#F5F5F5',
  textColor: '#333333',
};
