// src/components/Slider.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/images/bridge.jpg';
import justice from '../assets/images/justice.jpg';
import geeks from '../assets/images/geeks.jpg';

const BannerSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Welcome to JurisPro"
          height="800"
        />
        <Carousel.Caption>
          <h3 className='text-white'>Welcome to JurisPro</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={justice}
          alt="Best Legal Services"
          height="800"
        />
        <Carousel.Caption>
          <h3 className='text-white'>Best Legal Services</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={geeks}
          alt="Your Legal Experts"
          height="800"
        />
        <Carousel.Caption>
          <h3 className='text-white'>Your Legal Experts</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerSlider;
