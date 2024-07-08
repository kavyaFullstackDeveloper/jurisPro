import React from 'react';
import styled from 'styled-components';
import teamImage from '../assets/images/service.jpg';  

const AboutContainer = styled.div`
  padding: 40px 20px;
  background: #083344;
`;

const Section = styled.section`
  margin-bottom: 60px;
  margin-top: 30px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #ccfbf1;
  text-align: center;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccfbf1;
  max-width: 800px;
  margin: 0 auto 20px auto;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const TeamImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>About JurisPro</Title>
        <Content>
          JurisPro is a leading law firm dedicated to providing exceptional legal services. Our team of experienced lawyers specializes in various fields of law, ensuring that we can meet the diverse needs of our clients. Our commitment to excellence and our passion for justice drive us to deliver the best possible outcomes for those we serve.
        </Content>
      </Section>

      <Section>
        <Title>Our Mission</Title>
        <Content>
          Our mission is to provide top-notch legal services with integrity, professionalism, and respect for our clients. We strive to make a positive impact in the community by advocating for justice and providing legal solutions that are both effective and ethical.
        </Content>
      </Section>

      <ImageWrapper>
        <TeamImage src={teamImage} alt="Our Team" />
      </ImageWrapper>
    </AboutContainer>
  );
};

export default About;
