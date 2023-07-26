import React from "react";
import Section from "@/app/Section";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/image");
describe("Section Component", () => {
  it("should render newsletter section correctly", () => {
    const section = {
      type: "newsletter",
      text: "Newsletter text",
    };

    render(<Section section={section} />);

    expect(screen.getByPlaceholderText("Type your email")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should render hero section correctly", () => {
    const section = {
      type: "hero",
      text: "Hero text",
      img: "https://www.example.com/image",
    };

    render(<Section section={section} />);

    expect(screen.getByText("Hero text")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render testimonial section correctly", () => {
    const section = {
      type: "testimonial",
      text: "Testimonial text",
      author: "John Doe",
    };

    render(<Section section={section} />);

    expect(screen.getByText("Testimonial text")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
