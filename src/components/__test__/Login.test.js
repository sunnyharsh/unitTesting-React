import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../login/Login";

describe("Test the Login Component", () => {
    test("render the login form with two buttons", async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2)
    });
    test("check email is valid or not", () => {
        const testEmail = "sunny.kr@gmail.com"
        expect(validateEmail(testEmail)).toBe(true)
    })
    test("email input field should be accept only email", () => {
        render(<Login />);
        const email = screen.getByPlaceholderText("Email");
        userEvent.type(email, "sunny@gmail.com");
        expect(email.value).toMatch("sunny@gmail.com")
    });
    test("password should be password", () => {
        render(<Login />);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password")
    });
    test("field should be reset", () => {
        render(<Login />);
        const resetBtn = screen.getByTestId("reset");
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.click(resetBtn);
        expect(emailInput.value).toMatch("")
        expect(passwordInput.value).toMatch("")
    })
    test("should be able to form submit", () => {
        render(<Login />);
        const submittBtn = screen.getByTestId("submit");
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        userEvent.type(emailInput, "sunny.kr.hr@gmail.com");
        userEvent.type(passwordInput, "123456789")
        fireEvent.click(submittBtn);
        const userInfo = screen.getByText("sunny.kr.hr@gmail.com");
        expect(userInfo).toBeInTheDocument()
    })
})