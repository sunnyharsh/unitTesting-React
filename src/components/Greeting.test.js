import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting components test suite", () => {
  test("render Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('render "good to see you" if the button was not clicked', () => {
    render(<Greeting />);
    const outputElem = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElem).toBeInTheDocument();
  });
  test('render "changed" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);
    //Action
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElem = screen.getByText("Changed", { exact: false });
    expect(outputElem).toBeInTheDocument();
  });
  test("does not render 'good to see you' if the button was clicked", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //assert
    //we use queryByText because given text is not available on screen
    const outputElem = screen.queryByText("It's good to see you", {
      exact: false,
    });
    // expect(outputElem).not.toBeInTheDocument();
    expect(outputElem).toBeNull();
  });
});
