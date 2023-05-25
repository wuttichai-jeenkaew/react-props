import { render, screen } from "@testing-library/react";
import Exercise4 from "../src/components/Exercise4";
import { expect } from "vitest";

describe("React-Props : Exercise 4", () => {
  it("should pass props to DisplayName component", () => {
    render(<Exercise4 />);
    const DisplayName = screen.getByText("Name: John");
    expect(DisplayName).toBeInTheDocument();
  });

  it("should pass props to UserProfile component", () => {
    render(<Exercise4 />);
    const UserProfile = screen.getByText("User Profile");
    expect(UserProfile).toBeInTheDocument();
  });
});
