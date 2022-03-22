import { UsernameField } from "./UsernameField";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Username Field tests", () => {
  test("Check Username", () => {
    const onChange = jest.fn();
    render(
      <UsernameField value="" handleChange={onChange} variant="primary" />
    );
    const usernameField = screen.getByPlaceholderText("Username");
    expect(usernameField).toHaveDisplayValue("");
  });
  test("Change Username", () => {
    const onChange = jest.fn();
    render(
      <UsernameField value="" handleChange={onChange} variant="primary" />
    );
    const usernameField = screen.getByPlaceholderText("Username");
    fireEvent.change(usernameField, { target: { value: "sudhikshaMalla" } });
    expect(usernameField).toHaveValue("sudhikshaMalla");
  });
});
