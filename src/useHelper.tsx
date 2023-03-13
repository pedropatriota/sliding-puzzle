import React from "react";

import {
  createArrayOfTiles,
  handleTileClick,
  isPuzzleSolvable,
  isPuzzleSolved,
  shuffleTiles,
} from "./utils";

const useHelper = () => {
  const SIZE = 4;
  const [size, setSize] = React.useState(SIZE);

  const createdTiles = createArrayOfTiles({ cols: size, rows: size });

  const [tiles, setTiles] = React.useState<number[]>(createdTiles);
  const [emptyIndex, setEmptyIndex] = React.useState<number>(size * size - 1);
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);

  const shuffle = () => {
    const shuffledTiles = shuffleTiles(tiles);

    if (isPuzzleSolvable(shuffledTiles)) {
      const findEmptyIndex = shuffledTiles.indexOf(size ** 2);
      setEmptyIndex(findEmptyIndex);

      setTiles([...shuffledTiles]);
      setGameStarted(true);
    }
  };

  const swapTile = (index: number) => {
    const params = handleTileClick({
      index,
      emptyIndex,
      size,
      tiles,
    });

    if (params) {
      const { newBoard, newEmptyIndex } = params;
      setTiles(newBoard);
      setEmptyIndex(newEmptyIndex);
    }
  };

  React.useEffect(() => {
    if (typeof size === "number") {
      const newArray = createArrayOfTiles({ cols: size, rows: size });
      const findEmptyIndex = newArray.indexOf(size ** 2);
      setTiles(newArray);
      setEmptyIndex(findEmptyIndex);
    }
  }, [size]);

  React.useEffect(() => {
    if (gameStarted) {
      const isSolved = isPuzzleSolved(tiles);

      if (isSolved) {
        setGameStarted(false);
        alert("Kudos! You resolved the Puzzle!!!");
      }
    }
  }, [gameStarted, tiles]);

  return {
    size,
    setSize,
    swapTile,
    shuffle,

    tiles,
    emptyIndex,
    gameStarted,
    setGameStarted,
  };
};

export default useHelper;