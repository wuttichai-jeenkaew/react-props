import { render, screen } from "@testing-library/react";
import Exercise4 from "../src/components/Exercise4";
import { expect } from "vitest";

describe("React-Props : Exercise 4", () => {
  it("ยังไม่ได้ส่ง props เข้าไปใน Component 'DisplayName' หรือ 'UserProfile'", () => {
    render(<Exercise4 />);
    const DisplayName = screen.getByText("Name: John");
    expect(DisplayName).toBeInTheDocument();
  });
});
