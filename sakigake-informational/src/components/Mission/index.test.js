import React from 'react';
import {getByText,  render } from '@testing-library/react';
import Mission from '.';

describe('Mission Component', () => {
  it('renders without crashing', () => {
    render(<Mission />);
  });

  it('renders the mission header correctly', () => {
    const { getByText } = render(<Mission />);
    const header = getByText("MzaziConnect is your partner in ensuring every child's success");
    expect(header).toBeInTheDocument();
  });

  it('renders MzaziConnect mission correctly', () => {
    const { getByText } = render(<Mission />);
    const missionContent = getByText(
      "Our mission is to create an inclusive education system where schools,teachers and parents collaborate for students' success."
    );
    expect(missionContent).toBeInTheDocument();
  });

  it('should ensure info array has 3 items', () => {
    const { container } = render(<Mission/>);
    expect(container.querySelectorAll('#blueContainer')).toHaveLength(3);
  });
});
