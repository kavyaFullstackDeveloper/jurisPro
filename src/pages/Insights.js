import React from 'react';
import styled from 'styled-components';
import insightsImage1 from '../assets/images/lawbal.jpg'; // Ensure you have appropriate images
import insightsImage2 from '../assets/images/justice.jpg';

const InsightsContainer = styled.div`
  padding: 40px 20px;
  background: #042f2e;
`;

const Section = styled.section`
  margin-bottom: 60px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #ccfbf1;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: #ccfbf1;
  margin-bottom: 15px;
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
  margin-top: 20px;
`;

const InsightImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Insights = () => {
  return (
    <InsightsContainer>
      <Section>
        <Title>Our Insights</Title>
        <Content>
          Stay updated with the latest insights and articles from JurisPro. Our experts provide valuable information and analysis on various legal topics to help you stay informed and make better decisions.
        </Content>
      </Section>

      <Section>
        <Subtitle>Legal Trends in 2024</Subtitle>
        <Content>
          The legal landscape is constantly evolving. In 2024, we expect significant changes in data privacy laws, cybersecurity regulations, and more. Our experts break down what these changes mean for businesses and individuals.
        </Content>
        <ImageWrapper>
          <InsightImage src={insightsImage1} alt="Legal Trends" />
        </ImageWrapper>
      </Section>

      <Section>
        <Subtitle>Case Studies and Success Stories</Subtitle>
        <Content>
          At JurisPro, we pride ourselves on our successful track record. Read about our recent case studies and success stories to understand how we’ve helped clients achieve favorable outcomes in complex legal matters.
        </Content>
        {/* <ImageWrapper>
          <InsightImage src={insightsImage2} alt="Case Studies" />
        </ImageWrapper> */}
      </Section>
    </InsightsContainer>
  );
};

export default Insights;
