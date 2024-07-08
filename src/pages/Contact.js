import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import contactImage from '../assets/images/contact.avif';

const ContactContainer = styled.div`
  padding: 40px 20px;
  background: #042f2e;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const ContactForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.accentColor};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const ContactImage = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Address = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 18px;
  color: white;
`;

const IFrameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const IFrame = styled.iframe`
  border: 0;
  width: 100%;
  max-width: 700px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6r79b7v', // Replace with your EmailJS service ID
      'template_2tgucj8', // Replace with your EmailJS template ID
      formData,
      'KbipJItAoCbsSyj2O' // Replace with your EmailJS public key (User ID)
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.error('Failed to send email:', error.text);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactContainer >
      <Title>Contact Us</Title>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </FormField>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>

      <ImageWrapper>
        <ContactImage src={contactImage} alt="Contact Us" />
      </ImageWrapper> 

      <Address>
        <p className="text-white">JurisPro Law Firm</p>
        <p className="text-white">123 Legal St, Suite 456</p>
        <p className="text-white">Law City, LC 12345</p>
        <p className="text-white">Email: info@jurispro.com</p>
        <p className="text-white">Phone: (123) 456-7890</p>
      </Address>

      <IFrameWrapper>
        <IFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363156805!3d-37.817209742021515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2f2f6f3f1f0!2s123%20Legal%20St%2C%20Suite%20456%2C%20Law%20City%2C%20LC%2012345!5e0!3m2!1sen!2sus!4v1602539992020!5m2!1sen!2sus"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </IFrameWrapper>
    </ContactContainer>
  );
};

export default Contact;
