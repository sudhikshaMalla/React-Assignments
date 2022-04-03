import { SubmitField } from "./SubmitField";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Submit Field tests", () => {
  test("Button Clicked", () => {
    const onClick = jest.fn();
    render(<SubmitField variant="primary" handleClick={onClick} />);
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test("Button unclicked", () => {
    const onClick = jest.fn();
    render(<SubmitField variant="secondary" handleClick={onClick} />);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
