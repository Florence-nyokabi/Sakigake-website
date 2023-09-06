import React, { useState } from 'react';
import { testimonials } from './Testimonial-data';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import './style.css'


const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
    <div className="testimonials">
    <div className="textimonial-h1">
      <h1>Here is what our clients say</h1>
    </div>
    <div className="wrapper">
      <div className="testimonial-container" id="testimonial-container">
        <img src={testimonials[currentSlide].img} alt={testimonials[currentSlide].name}/>
        <h3>{testimonials[currentSlide].name}</h3>
        <h6>{testimonials[currentSlide].job}</h6>
        <p>" {testimonials[currentSlide].testimonial} "</p>
      </div>
      <button id="prev" onClick={prevSlide} data-testid="prev-button"><IoIosArrowBack/></button>
      <button id="next" onClick={nextSlide} data-testid="next-button"><IoIosArrowForward/></button>
    </div>
    </div>

    </>

  );
};

export default Testimonials;