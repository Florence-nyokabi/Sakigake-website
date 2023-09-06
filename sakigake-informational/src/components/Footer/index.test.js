/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render , screen} from '@testing-library/react';
import Footer from '.'; 

describe('Footer component', () => {
  it('renders without errors', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  it('has the correct background color', () => {
    const { container } = render(<Footer />);
    const footerContainer = container.querySelector('.footer-container');
    expect(footerContainer).toHaveStyle('background-image: linear-gradient(#2195f3dc, #2195f3dc)');
  });

  it('uses the correct font family', () => {
    const { container } = render(<Footer />);  
   
    const textElements = container.querySelectorAll('span'); 
    console.log(textElements);
    console.log(textElements.length)

    const journeyHeading = screen.getByText("VISIT US");
  expect(journeyHeading).toBeInTheDocument();


  });

  it('displays the correct image', () => {
    render(<Footer />);
   
  });

  it('displays the correct icons', () => {
    const { getByTestId } = render(<Footer />);
    const facebookIcon = getByTestId('facebook-icon');
    const twitterIcon = getByTestId('twitter-icon');
    const instagramIcon = getByTestId('instagram-icon');
    const linkedinIcon = getByTestId('linkedin-icon');

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it('has the correct text content', () => {
    const { container } = render(<Footer />);
    const visitUsText = container.querySelector('.information span');
    const contactUsText = container.querySelector('.CONTACT span');
    const copyRightText = container.querySelector('.footer-p p');

    expect(visitUsText.textContent).toBe('VISIT US');
    expect(contactUsText.textContent).toBe('CONTACT US');
    expect(copyRightText.textContent).toBe('© 2023 MzaziConnect');
  });

  it('applies responsive styles for smaller screens', () => {
   
    global.innerWidth = 600; 
    render(<Footer />);
   
  });
});


