import { render, screen } from "@testing-library/react";
import Exercise3 from "../src/components/Exercise3";
import { expect } from "vitest";
import fs from "fs";
import path from "path";

describe("React-Props : Exercise 3", () => {
  it("ยังไม่นำ component ตัวแรกมา render", () => {
    render(<Exercise3 />);
    const title = screen.getByText(/Title:\s?My Lovely Dog/i);
    const images = screen.getAllByRole("img");
    const contents = screen.getAllByText(
      /Content:\s?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin elit. Sed justo leo, consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem/i
    );
    const author = screen.getByText(/Author:\s?John/i);

    expect(title).toBeInTheDocument();
    expect(images[0]).toHaveAttribute("src", "https://placedog.net/500");
    expect(contents.length).toBe(2);
    expect(author).toBeInTheDocument();
  });

  it("ยังไม่นำ component ตัวที่สองมา render", () => {
    render(<Exercise3 />);
    const title = screen.getByText(/Title:\s?Hello Hoomannnn :D/i);
    const images = screen.getAllByRole("img");
    const contents = screen.getAllByText(
      /Content:\s?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin elit. Sed justo leo, consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem/i
    );
    const author = screen.getByText(/Author:\s?James/i);

    expect(title).toBeInTheDocument();
    expect(images[1]).toHaveAttribute("src", "https://placedog.net/500/300");
    expect(contents.length).toBe(2);
    expect(author).toBeInTheDocument();
  });

  it("ยังไม่ได้ส่ง props.children เข้าไปใน component", async () => {
    const exercisePath = path.join(
      process.cwd(),
      "src/components/Exercise3.jsx"
    );
    const data = await fs.readFileSync(exercisePath, "utf8");
    const regex = /props.children/g;
    const found = data.match(regex);

    expect(found.length).toBeGreaterThan(0);
  });
});
