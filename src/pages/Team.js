import React from 'react';
import styled from 'styled-components';
import teamMember1 from '../assets/images/rel.jpg'; // Ensure you have appropriate images
import teamMember2 from '../assets/images/rel.jpg';
import teamMember3 from '../assets/images/rel.jpg';

const TeamContainer = styled.div`
  padding: 40px 20px;
  background: #1c1917;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
`;

const Title = styled.h1`
  font-size: 36px;
  color: #a3a3a3;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const TeamMember = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const MemberName = styled.h2`
  font-size: 24px;
  color: #a3a3a3;
  margin-bottom: 10px;
`;

const MemberRole = styled.h3`
  font-size: 18px;
  color: #a3a3a3;
  margin-bottom: 15px;
`;

const MemberBio = styled.p`
  font-size: 16px;
  color: #333;
`;

const Footer = styled.footer`
  height: 100px;
  background: linear-gradient(to right, #1c1917, #042f2e); /* Example gradient */
`;

const Team = () => {
  return (
    <>
      <TeamContainer>
        <Title>Meet Our Team</Title>
        <TeamGrid>
          <TeamMember>
            <TeamImage src={teamMember1} alt="Team Member 1" />
            <MemberName>John Doe</MemberName>
            <MemberRole>Senior Partner</MemberRole>
            <MemberBio>John has over 20 years of experience in corporate law and has successfully handled numerous high-profile cases.</MemberBio>
          </TeamMember>

          <TeamMember>
            <TeamImage src={teamMember2} alt="Team Member 2" />
            <MemberName>Jane Smith</MemberName>
            <MemberRole>Lead Counsel</MemberRole>
            <MemberBio>Jane specializes in intellectual property law and has a passion for protecting clients' innovations and creativity.</MemberBio>
          </TeamMember>

          <TeamMember>
            <TeamImage src={teamMember3} alt="Team Member 3" />
            <MemberName>Emily Johnson</MemberName>
            <MemberRole>Associate Attorney</MemberRole>
            <MemberBio>Emily is dedicated to family law and has helped many families navigate complex legal matters with compassion and expertise.</MemberBio>
          </TeamMember>
        </TeamGrid>
      </TeamContainer>
      <Footer />
    </>
  );
};

export default Team;
