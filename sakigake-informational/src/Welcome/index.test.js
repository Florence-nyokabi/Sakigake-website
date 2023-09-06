import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '.';

describe('Welcome component', () => {
  test('renders welcome text', () => {
    render(<Welcome />);
    const welcomeText = screen.getByText('Welcome to MzaziConnect');
    expect(welcomeText).toBeInTheDocument();
  });

  test('renders journey text', () => {
    render(<Welcome />);
    const journeyText = screen.getByText(
      /A new way to stay engaged in your[\s\S]*child's education journey./
    );
    expect(journeyText).toBeInTheDocument();
  });

  test('renders play store image', () => {
    render(<Welcome />);
    const playStoreImage = screen.getByAltText('');
    expect(playStoreImage).toBeInTheDocument();
    expect(playStoreImage).toHaveAttribute(
      'src',
      './images/playstore.png'
    );
  });
});




