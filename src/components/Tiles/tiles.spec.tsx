/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";

import Tiles from ".";

describe("Tiles Component", () => {
  test("renders tile with correct text content and button click works", () => {
    const mockHandleTileClick = jest.fn();
    const tileContent = 2;
    const { getByRole } = render(
      <Tiles
        emptyIndex={0}
        handleTileClick={mockHandleTileClick}
        index={1}
        tile={tileContent}
      />
    );

    const tileButton = getByRole("button", { hidden: true });
    expect(tileButton).toHaveTextContent(tileContent.toString());

    fireEvent.click(tileButton);
    expect(mockHandleTileClick).toHaveBeenCalled();
  });
});
