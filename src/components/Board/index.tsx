import { TBoardProps } from "../../contracts";
import Tiles from "../Tiles";
import * as Style from "./styles";

const Board = ({ tiles, handleTileClick, emptyIndex, size }: TBoardProps) => {
  return (
    <Style.Board size={size} role="contentinfo">
      {tiles.map((tile, i) => (
        <Tiles
          key={tile}
          index={i}
          handleTileClick={handleTileClick}
          tile={tile}
          emptyIndex={emptyIndex}
        />
      ))}
    </Style.Board>
  );
};

export default Board;
