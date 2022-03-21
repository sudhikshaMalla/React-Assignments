import { render, screen, fireEvent } from "@testing-library/react";
import { PasswordField } from "./PasswordField";

describe("Password Field tests", () => {
  test("Check Password", () => {
    const onChange = jest.fn();
    render(<PasswordField value="" handleChange={onChange} />);
    const passwordField = screen.getByPlaceholderText("Password");
    expect(passwordField).toHaveDisplayValue("");
  });
  test("Change Password", () => {
    const onChange = jest.fn();
    render(<PasswordField value="" handleChange={onChange} />);
    const passwordField = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordField, { target: { value: "12345" } });
    expect(passwordField).toHaveValue("12345");
  });
});
