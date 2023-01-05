import { render, screen } from '@testing-library/react';
import App from './App';

describe("Test the App Component", () => {


  test('render App component in the document', () => {
    render(<App />);
    const linkElement = screen.getByText(/React-testing-Library/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render login component in the document", () => {
    const { getByText } = render(<App />);
    //1st way to varify the text
    // expect(getByText('Email')).toBeInTheDocument();

    //2nd way to varify the text
    // expect(getByText('Email')).toBeTruthy()

    //3rd way to varify the text if Document containing multiple time Email text
  })

})