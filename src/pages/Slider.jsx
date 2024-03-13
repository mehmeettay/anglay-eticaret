import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../assets/img/hongkong.jpg';
import foto2 from '../assets/img/new_york.jpg';
import foto3 from '../assets/img/newyorkcity.jpg';
import './Slider.css';
const Slider = () => { 
  return (
    <Carousel  controls={false} className="slider-container" data-bs-theme="dark">
      <Carousel.Item interval={2000} className="slider-item">
        <img
          className="d-block "
          src={foto1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="slider-item">
        <img
          className="d-block "
          src={foto2}
          alt="Second slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="slider-item">
        <img
          className="d-block "
          src={foto3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;
