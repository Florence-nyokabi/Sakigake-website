import React from "react";
import { render } from "@testing-library/react";
import Download from ".";


  it("displays the child's assignments text", () => {
    const { getByText } = render(<Download />);
    const assignmentsText = getByText("child's assignments");
    expect(assignmentsText).toBeInTheDocument();
  });

  it("displays the nearest shops text", () => {
    const { getByText } = render(<Download />);
    const shopsText = getByText("nearest shops");
    expect(shopsText).toBeInTheDocument();
  });

  it("displays the playstore image", () => {
    const { getByAltText } = render(<Download />);
    const playstoreImage = getByAltText("download");
    expect(playstoreImage).toBeInTheDocument();
    expect(playstoreImage.getAttribute("src")).toEqual(
      "https://res.cloudinary.com/dtu8pkzkp/image/upload/v1693309240/image-removebg-preview_uq2sd5.png"
    );
  }); 

  it("displays the appvisual image", () => {
    const { getByAltText } = render(<Download />);
    const appvisualImage = getByAltText("appvisual");
    expect(appvisualImage).toBeInTheDocument();
    expect(appvisualImage.getAttribute("src")).toEqual(
      "https://res.cloudinary.com/dtu8pkzkp/image/upload/v1693309363/Screenshot_from_2023-08-26_12-11-36-removebg-preview_1_tn0b5o.png"
    );
  });

  
