import React from "react";

import { TBoardProps } from "../../contract";
import * as Style from "./styles";

const Board = ({ tiles, handleTileClick, emptyIndex }: TBoardProps) => {
  return (
    <Style.Board>
      {tiles.map((key, i) => (
        <Style.Tiles
          key={key}
          role="button"
          aria-hidden="true"
          isEmptyIndex={emptyIndex === i}
          style={{
            border: "1px solid",
            height: "100%",
            width: "100%",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleTileClick(i)}
        >
          {key}
        </Style.Tiles>
      ))}
    </Style.Board>
  );
};

export default Board;
