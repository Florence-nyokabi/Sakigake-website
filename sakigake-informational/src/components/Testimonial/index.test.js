import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Testimonials from '.';
import { testimonials } from './Testimonial-data';

test('renders testimonials correctly', () => {
  render(<Testimonials />);
  
  expect(screen.getByText('Here is what our clients say')).toBeInTheDocument();
  expect(screen.getByText(testimonials[0].name)).toBeInTheDocument();
  expect(screen.getByText(testimonials[0].job)).toBeInTheDocument();

  const nextButton = screen.getByTestId('next-button');
  const prevButton = screen.getByTestId('prev-button');

  fireEvent.click(nextButton);
  expect(screen.getByText(testimonials[1].name)).toBeInTheDocument();
  expect(screen.getByText(testimonials[1].job)).toBeInTheDocument();


  fireEvent.click(prevButton);
  expect(screen.getByText(testimonials[0].name)).toBeInTheDocument();
  expect(screen.getByText(testimonials[0].job)).toBeInTheDocument();


  
});