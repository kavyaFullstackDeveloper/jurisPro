// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Insights from './pages/Insights';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Footer from './components/Footer';

const AppWrapper = styled.div`
   color: white;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
