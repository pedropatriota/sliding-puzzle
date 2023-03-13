/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";

import Board from ".";

describe("Board component", () => {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleTileClick = jest.fn();
  const emptyIndex = 8;
  const size = 3;

  it("renders a board with tiles", () => {
    const { getAllByRole } = render(
      <Board
        tiles={tiles}
        handleTileClick={handleTileClick}
        emptyIndex={emptyIndex}
        size={size}
      />
    );

    const renderedTiles = getAllByRole("button", { hidden: true });

    expect(renderedTiles).toHaveLength(9); // Check if all tiles are rendered
  });
});
