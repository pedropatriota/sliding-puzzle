/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";

import Button from ".";

describe("Button component", () => {
  const props = {
    content: "Click me",
    onClick: jest.fn(),
    disabled: false,
  };

  it("should render button with correct content", () => {
    const { getByRole } = render(<Button {...props} />);
    expect(getByRole("button")).toHaveTextContent(props.content);
  });

  it("should call onClick prop when clicked", () => {
    const { getByRole } = render(<Button {...props} />);
    fireEvent.click(getByRole("button"));
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should disable the button when disabled prop is true", () => {
    const { getByRole } = render(<Button {...props} disabled={true} />);
    expect(getByRole("button")).toBeDisabled();
  });
});
