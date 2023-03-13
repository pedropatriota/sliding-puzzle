/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";

import Title from ".";

describe("Title component", () => {
  it("renders the content prop correctly", () => {
    const content = "Hello, world!";
    const { getByText } = render(<Title content={content} />);
    expect(getByText(content)).toBeInTheDocument();
  });
});
