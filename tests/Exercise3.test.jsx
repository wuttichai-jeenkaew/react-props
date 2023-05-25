import { render, screen } from "@testing-library/react";
import Exercise3 from "../src/components/Exercise3";
import { expect } from "vitest";
import fs from "fs";
import path from "path";

describe("React-Props : Exercise 3", () => {
  it("ยังไม่นำ component ตัวแรกมา render", () => {
    render(<Exercise3 />);
    const title = screen.getByText("Title: My Lovely Dog");
    const images = screen.getAllByRole("img");
    const contents = screen.getAllByText(
      "Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin elit. Sed justo leo, consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem"
    );
    const author = screen.getByText("Author: John");

    expect(title).toBeInTheDocument();
    expect(images[0]).toHaveAttribute("src", "https://placedog.net/500");
    expect(contents.length).toBe(2);
    expect(author).toBeInTheDocument();
  });

  it("ยังไม่นำ component ตัวที่สองมา render", () => {
    render(<Exercise3 />);
    const title = screen.getByText("Title: Hello Hoomannnn :D");
    const images = screen.getAllByRole("img");
    const contents = screen.getAllByText(
      "Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin elit. Sed justo leo, consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem"
    );
    const author = screen.getByText("Author: James");

    expect(title).toBeInTheDocument();
    expect(images[1]).toHaveAttribute("src", "https://placedog.net/500/300");
    expect(contents.length).toBe(2);
    expect(author).toBeInTheDocument();
  });

  it("ยังไม่ได้ส่ง props.children เข้าไปใน component ตัวแรก", async () => {
    const exercisePath = path.join(
      process.cwd(),
      "src/components/Exercise3.jsx"
    );
    const data = await fs.readFileSync(exercisePath, "utf8");

    const regex =
      /Title: {article1\.title}|src={article1\.image}|Content: {article1\.content}|Author: {article1\.author}/g;
    const found = data.match(regex);

    expect(found.length).toBe(4);
  });

  it("ยังไม่ได้ส่ง props.children เข้าไปใน component ตัวที่สอง", async () => {
    const exercisePath = path.join(
      process.cwd(),
      "src/components/Exercise3.jsx"
    );
    const data = await fs.readFileSync(exercisePath, "utf8");

    const regex =
      /Title: {article2\.title}|src={article2\.image}|Content: {article2\.content}|Author: {article2\.author}/g;
    const found = data.match(regex);

    expect(found.length).toBe(4);
  });
});
