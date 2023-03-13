import type { TTilesProps } from "../../contracts";
import * as Style from "./styles";

const Tiles = ({ emptyIndex, handleTileClick, index, tile }: TTilesProps) => {
  return (
    <Style.Tiles
      role="button"
      aria-hidden="true"
      isEmptyIndex={emptyIndex === index}
      onClick={() => handleTileClick(index)}
    >
      {tile}
    </Style.Tiles>
  );
};

export default Tiles;
