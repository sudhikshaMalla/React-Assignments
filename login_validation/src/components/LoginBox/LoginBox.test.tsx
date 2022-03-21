import { LoginBox } from "./LoginBox";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login Box tests", () => {
  const credentials = [
    {
      username: "sudhikshaMalla",
      password: "admin",
    },
    {
      username: "sudhi7",
      password: "123456",
    },
    {
      username: "sudhikshamalla28",
      password: "root",
    },
  ];
  test("Before Click", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Enter your Credentials and click on submit"
    );
  });
  test("Empty Username and Password", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Please enter both Username and Password"
    );
  });
  test("Empty Username", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const PasswordField = screen.getByPlaceholderText("Password");
    fireEvent.change(PasswordField, { target: { value: "12345" } });
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Click on Submit button if you finish entering your credentials"
    );
  });
  test("Submit Empty Username", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const PasswordField = screen.getByPlaceholderText("Password");
    fireEvent.change(PasswordField, { target: { value: "12345" } });
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Please enter both Username and Password"
    );
  });
  test("Empty Password", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const UsernameField = screen.getByPlaceholderText("Username");
    fireEvent.change(UsernameField, { target: { value: "sudhikshaMalla" } });
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Click on Submit button if you finish entering your credentials"
    );
  });
  test("Submit Empty Password", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const UsernameField = screen.getByPlaceholderText("Username");
    fireEvent.change(UsernameField, { target: { value: "sudhikshaMalla" } });
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Please enter both Username and Password"
    );
  });
  test("Filled Credentials", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const UsernameField = screen.getByPlaceholderText("Username");
    fireEvent.change(UsernameField, { target: { value: "sudhi7" } });
    const PasswordField = screen.getByPlaceholderText("Password");
    fireEvent.change(PasswordField, { target: { value: "123456" } });
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent(
      "Click on Submit button if you finish entering your credentials"
    );
  });
  test("Valid Credentials", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const UsernameField = screen.getByPlaceholderText("Username");
    fireEvent.change(UsernameField, { target: { value: "sudhi7" } });
    const PasswordField = screen.getByPlaceholderText("Password");
    fireEvent.change(PasswordField, { target: { value: "123456" } });
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent("Valid Credentials");
  });
  test("Invalid Credentials", () => {
    render(<LoginBox AccountCredentials={credentials} />);
    const UsernameField = screen.getByPlaceholderText("Username");
    fireEvent.change(UsernameField, { target: { value: "sudhikshamalla28" } });
    const PasswordField = screen.getByPlaceholderText("Password");
    fireEvent.change(PasswordField, { target: { value: "admin" } });
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    const containerElement = screen.getByRole("contentinfo");
    expect(containerElement).toHaveTextContent("Invalid Credentials");
  });
});
