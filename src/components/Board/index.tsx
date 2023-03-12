import React from "react";

import * as Style from "./styles";

const Board: React.FC = () => {
  const length = 16; // the amount of tiles on the Board
  const createdTiles = Array.from({ length }, (_, i) => i + 1);

  return (
    <Style.Board>
      {createdTiles.map(key => (
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
