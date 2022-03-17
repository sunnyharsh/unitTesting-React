import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render posts if request succeds", async () => {
    render(<Async />);
    const listOfElements = await screen.findAllByRole("listitem");
    expect(listOfElements).not.toHaveLength(0);
  });
});
