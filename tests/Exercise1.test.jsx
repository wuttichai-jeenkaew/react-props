import { render, screen } from "@testing-library/react";
import Exercise1 from "../src/components/Exercise1";
import { expect } from "vitest";

describe("React-Props : Exercise 1", () => {
  it("should pass props to Link components", () => {
    render(<Exercise1 />);
    const link1 = screen.getByText(/Go to Google.com/i);
    const link2 = screen.getByText(/Go to Techupth.com/i);
    const link3 = screen.getByText(/Go to Facebook.com/i);
    expect(link1).toHaveAttribute("href", "https://www.google.com");
    expect(link2).toHaveAttribute("href", "https://www.techupth.com");
    expect(link3).toHaveAttribute("href", "https://www.facebook.com");
  });
});
