import React from 'react';
import { getByText, render } from '@testing-library/react';
import WhyMzaziConnect from '.';

describe('WhyMzaziConnect Component', () => {
      it("renders the main heading correctly", () => {
        const { getByText } = render(<WhyMzaziConnect />);
        const mainHeading = getByText("WHY MZAZICONNECT?");
        expect(mainHeading).toBeInTheDocument();
      });
  
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
            expect(assignmentAccessHeading).toBeInTheDocument();
        })
      

        it('should render material locations content', () => {
          const { getByText } = render(<WhyMzaziConnect />);
          const materialLocationsHeading = getByText('Material Locations');
            expect(materialLocationsHeading).toBeInTheDocument();
        })
        
        it('should render real-time updates content', () =>  {
          const { getByText } = render(<WhyMzaziConnect />);
          const realTimeUpdatesHeading = getByText('Real-time Updates');
            expect(realTimeUpdatesHeading).toBeInTheDocument();
            
        })



    });