/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from ".";

describe("Navbar component", () => {
  it("renders the component without errors", () => {
    render(<Navbar />);
  });

  it("opens and closes the navigation menu when the toggle button is clicked", () => {
    const { getByTestId } = render(<Navbar />);
    const toggleButton = getByTestId("nav-toggle");

    fireEvent.click(toggleButton);
    expect(getByTestId("nav-items").classList.contains("open")).toBe(true);

    fireEvent.click(toggleButton);
    expect(getByTestId("nav-items").classList.contains("open")).toBe(false);
  });

  it("navigates to the correct URL when a navigation item is clicked", () => {
    const { getByText } = render(<Navbar />);
    const homeLink = getByText("Home");
    const aboutLink = getByText("About");
    const serviceLink = getByText("Our Services");
    const contactLink = getByText("Contact Us");

    expect(homeLink.getAttribute("href")).toBe("/home");
    expect(aboutLink.getAttribute("href")).toBe("#mission-section");
    expect(serviceLink.getAttribute("href")).toBe("#our-services");
    expect(contactLink.getAttribute("href")).toBe("#footer-container");
  });
});