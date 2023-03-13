import React from "react";

import styles from "./App.module.css";
import Board from "./components/Board";
import { createArrayOfTiles, shuffleTiles } from "./utils";

export default function App() {
  const COLS = 4;
  const ROWS = 4;

  const createdTiles = createArrayOfTiles({ cols: COLS, rows: ROWS });

  const [tiles, setTiles] = React.useState<number[]>(createdTiles);

  const shuffle = () => {
    const shuffledTiles = setTiles(shuffleTiles(createdTiles));
    return shuffledTiles;
  };

  return (
    <main className={styles.main}>
      <Board tiles={tiles} />
      <button onClick={shuffle}> shuffle</button>
    </main>
  );
}
