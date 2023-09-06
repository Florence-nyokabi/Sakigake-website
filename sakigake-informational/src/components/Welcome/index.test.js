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

  test('renders assignment tracking message', () => {
    render(<Welcome />);
    const assignmentMessage = screen.getByText(
      /Our app simplifies assignment tracking and provides information[\s\S]*child's studies./
    );
    expect(assignmentMessage).toBeInTheDocument();
  });
  
  test('renders playstore image', () => {
    render(<Welcome />);
    const playstoreImage = screen.getByAltText('playstore');
    expect(playstoreImage).toBeInTheDocument();
  });
  
  test('renders child background div', () => {
    render(<Welcome />);
    const childBackgroundDiv = screen.getByTestId('child-background');
    expect(childBackgroundDiv).toBeInTheDocument();
  });  
});