import React from "react";

import styles from "./App.module.css";
import Board from "./components/Board";
import Input from "./components/Input";
import Title from "./components/Title";
import { createArrayOfTiles, handleTileClick, shuffleTiles } from "./utils";

export default function App() {
  const SIZE = 4;
  const [size, setSize] = React.useState(SIZE);

  const createdTiles = createArrayOfTiles({ cols: size, rows: size });

  const [tiles, setTiles] = React.useState<number[]>(createdTiles);
  const [emptyIndex, setEmptyIndex] = React.useState<number>(size * size - 1);

  const shuffle = () => {
    const shuffledTiles = shuffleTiles(tiles);

    const findEmptyIndex = shuffledTiles.indexOf(size ** 2);
    setEmptyIndex(findEmptyIndex);

    setTiles([...shuffledTiles]);
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

  return (
    <main className={styles.main}>
      <Title content="sliding puzzle app" />
      <Input
        label="Set the grid size of board:"
        value={size}
        onChange={e => setSize(Number(e.target.value))}
      />

      <Board
        tiles={tiles}
        handleTileClick={swapTile}
        emptyIndex={emptyIndex}
        size={size}
      />
      <button onClick={() => shuffle()}> shuffle</button>
    </main>
  );
}
