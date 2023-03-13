/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";

import Input from ".";

describe("Input component", () => {
  it("renders label and input with correct props", () => {
    const label = "Number of items:";
    const value = 10;
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <Input label={label} value={value} onChange={onChange} />
    );

    const inputElement = getByLabelText(label) as HTMLInputElement;
    expect(inputElement.value).toBe(String(value));
    expect(inputElement.type).toBe("number");
    fireEvent.change(inputElement, { target: { value: "20" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
