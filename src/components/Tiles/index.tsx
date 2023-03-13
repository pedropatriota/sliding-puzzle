import type { TTilesProps } from "../../contracts";
import * as Style from "./styles";

const Tiles = ({
  emptyIndex,
  handleTileClick,
  index,
  tile,
  imgUrl,
  size,
}: TTilesProps) => {
  const indexShuffled = tile - 1;
  const row = Math.floor(indexShuffled / size);
  const col = indexShuffled % size;
  const BOARD_WIDTH = 600;

  return (
    <Style.Tiles
      role="button"
      aria-hidden="true"
      isEmptyIndex={emptyIndex === index}
      imgUrl={imgUrl}
      colPos={col * (BOARD_WIDTH / size) * -1}
      rowPos={row * (BOARD_WIDTH / size) * -1}
      onClick={() => handleTileClick(index)}
    >
      {tile}
    </Style.Tiles>
  );
};

export default Tiles;
