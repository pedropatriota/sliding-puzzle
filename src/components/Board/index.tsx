import { TBoardProps } from "../../contracts";
import Tiles from "../Tiles";
import * as Style from "./styles";

const Board = ({
  tiles,
  handleTileClick,
  emptyIndex,
  size,
  imgUrl,
}: TBoardProps) => {
  return (
    <Style.Board size={size} role="contentinfo">
      {tiles.map((tile, i) => (
        <Tiles
          key={tile}
          index={i}
          handleTileClick={handleTileClick}
          tile={tile}
          emptyIndex={emptyIndex}
          imgUrl={imgUrl}
          size={size}
        />
      ))}
    </Style.Board>
  );
};

export default Board;
