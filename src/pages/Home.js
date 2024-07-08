// src/pages/Home.js
import React, { useRef } from 'react';
import BannerSlider from '../components/Slider';
import styled from 'styled-components';
import color from '../assets/images/color.png';

const Content = styled.div`
  padding: 20px;
  text-align: center;
  background-image: url(${color});
  background-size: cover;
`;

const Section = styled.div`
  padding: 50px 20px;
  background-image: url(${color});
  background-size: cover;
  background-position: center;
  color: ${(props) => props.color || '#333'};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.4); 
    backdrop-filter: blur(10px);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Services = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  flex: 1 1 300px;
  margin: 10px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background: rgba(255, 255, 255, 0.6); 
    backdrop-filter: blur(10px);
  &:hover {
    transform: translateY(-10px);
  }
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  flex: 1 1 300px;
  margin: 10px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.6); 
    backdrop-filter: blur(10px);
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.primaryColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.secondaryColor};
  }
`;

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <BannerSlider />
      <Content>
        <h1>Welcome to JurisPro</h1>
        <p>We provide the best legal services.</p>
        <ContactButton onClick={scrollToContact}>Contact Us</ContactButton>
      </Content>
      <Section>
        <h2>Our Services</h2>
        <Services>
          <ServiceCard>
            <h3>Consultation</h3>
            <p>Expert legal advice tailored to your needs.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Litigation</h3>
            <p>Professional representation in court.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Document Review</h3>
            <p>Thorough review and preparation of legal documents.</p>
          </ServiceCard>
        </Services>
      </Section>
      <Section>
        <h2>Client Testimonials</h2>
        <Testimonials>
          <TestimonialCard>
            <p>"JurisPro provided exceptional service and expertise."</p>
            <p>- John Doe</p>
          </TestimonialCard>
          <TestimonialCard>
            <p>"Highly professional and reliable legal services."</p>
            <p>- Jane Smith</p>
          </TestimonialCard>
        </Testimonials>
      </Section>
      <Section ref={contactRef}>
        <h2>Contact Us</h2>
        <p>If you have any questions or need legal assistance, please contact us.</p>
      </Section>
    </div>
  );
};

export default Home;
