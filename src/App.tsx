import React from "react";

import styles from "./App.module.css";
import Board from "./components/Board";
import { createArrayOfTiles, shuffleTiles } from "./utils";

export default function App() {
  const SIZE = 4;

  const createdTiles = createArrayOfTiles({ cols: SIZE, rows: SIZE });

  const [tiles, setTiles] = React.useState<number[]>(createdTiles);
  const [emptyIndex, setEmptyIndex] = React.useState<number>(SIZE * SIZE - 1);

  const shuffle = () => {
    const shuffledTiles = shuffleTiles(tiles);

    const findEmptyIndex = shuffledTiles.indexOf(SIZE ** 2);
    setEmptyIndex(findEmptyIndex);

    setTiles([...shuffledTiles]);
  };

  const handleTileClick = (index: number) => {
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const emptyRow = Math.floor(emptyIndex / SIZE);
    const emptyCol = emptyIndex % SIZE;
    const distance = Math.abs(row - emptyRow) + Math.abs(col - emptyCol);
    if (distance === 1) {
      const newBoard = [...tiles];
      [newBoard[index], newBoard[emptyIndex]] = [
        newBoard[emptyIndex],
        newBoard[index],
      ];
      setTiles(newBoard);
      setEmptyIndex(index);
    }
  };

  return (
    <main className={styles.main}>
      <Board
        tiles={tiles}
        handleTileClick={handleTileClick}
        emptyIndex={emptyIndex}
      />
      <button onClick={() => shuffle()}> shuffle</button>
    </main>
  );
}
