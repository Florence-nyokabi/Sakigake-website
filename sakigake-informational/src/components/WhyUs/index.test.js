import React from 'react';
import { getByText, render } from '@testing-library/react';
import WhyMzaziConnect from '.';


describe("WhyMzaziConnect Component", () => {
    it("renders the main heading correctly", () => {
      const { getByText } = render(<WhyMzaziConnect />);
      const mainHeading = getByText("WHY MZAZICONNECT?");
      expect(mainHeading).toBeInTheDocument();
    });


    describe('WhyMzaziConnect Component', () => {
        it('should render without errors', () => {
          const { container } = render(<WhyMzaziConnect />);
          expect(container).toBeInTheDocument();
        });
      
        it('should render the main heading', () => {
          const { getByText } = render(<WhyMzaziConnect />);
          const headingElement = getByText(/WHY MZAZICONNECT/i);
          expect(headingElement).toBeInTheDocument();
          
        });
        
        it('should render assignment access content', () => {
          const { getByText } = render(<WhyMzaziConnect />);
          const assignmentAccessHeading = getByText("Assignment Access");
          const assignmentAccessParagraph = getByText(containsText, 
            "Gain instant access to your child's assignments, ensuring you're always in the loop about their studies.");
            expect(assignmentAccessHeading).toBeInTheDocument();
            expect(assignmentAccessParagraph).toBeInTheDocument();
        })
      

        it('should render material locations content', () => {
          const { getByText } = render(<WhyMzaziConnect />);
          const materialLocationsHeading = getByText('Material Locations');
          const materialLocationsParagraph = getByText(containsText,
            "Locate shops in your vicinity that provide the materials required for the CBC program, all through our app.");
            expect(materialLocationsHeading).toBeInTheDocument();
            expect(materialLocationsParagraph).toBeInTheDocument();
        })
        
        it('should render real-time updates content', () =>  {
          const { getByText } = render(<WhyMzaziConnect />);
          const realTimeUpdatesHeading = getByText('Real-time Updates');
          const realTimeUpdatesParagraph = getByText(containsText, 
            "Receive notifications about new assignments and resource availability to stay up-to-date.")
            expect(realTimeUpdatesHeading).toBeInTheDocument();
            expect(realTimeUpdatesParagraph).toBeInTheDocument();
        })





        it("renders images correctly", () => {
            render(<WhyMzaziConnect />);
            const images = screen.getAllByRole("img");
            expect(images.length).toBe(3);
            expect(images[0]).toHaveAttribute("src", `${process.env.PUBLIC_URL}/Group 14.jpg`);
            expect(images[1]).toHaveAttribute("src", `${process.env.PUBLIC_URL}/Group 15.jpg`);
            expect(images[2]).toHaveAttribute("src", `${process.env.PUBLIC_URL}/Group 16.jpg`);
        });
        
    });
});
