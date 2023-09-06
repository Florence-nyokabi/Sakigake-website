import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Testimonials from '.';
import { testimonials } from './Testimonial-data';

test('renders testimonials correctly', () => {
  render(<Testimonials />);
  
  // Assertions for the initial rendered state
  expect(screen.getByText('Here is what our clients say')).toBeInTheDocument();
  expect(screen.getByText(testimonials[0].name)).toBeInTheDocument();
  expect(screen.getByText(testimonials[0].job)).toBeInTheDocument();
//   expect(screen.getByText(testimonials[0].testimonial)).toBeInTheDocument();



});
