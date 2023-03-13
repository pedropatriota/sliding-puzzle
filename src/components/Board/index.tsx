import React from "react";

import { TBoardProps } from "../../contract";
import * as Style from "./styles";

const Board = ({ tiles }: TBoardProps) => {
  return (
    <Style.Board>
      {tiles.map(key => (
        <div
          key={key}
          style={{
            border: "1px solid",
            height: "100%",
            width: "100%",
            padding: "5px",
          }}
        >
          {key}
        </div>
      ))}
    </Style.Board>
  );
};

export default Board;
