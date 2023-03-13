import styles from "./App.module.css";
import { Board, Button, Input, Title } from "./components";
import useHelper from "./useHelper";

export default function App() {
  const {
    size,
    setSize,
    swapTile,
    shuffle,
    tiles,
    emptyIndex,
    setGameStarted,
    gameStarted,
  } = useHelper();

  return (
    <main className={styles.main}>
      <Title content="sliding puzzle app" />
      <Input
        label="Set the grid size of board:"
        value={size}
        disabled={gameStarted}
        onChange={e => setSize(Number(e.target.value))}
      />
      {gameStarted ? (
        <Button content={"Give up"} onClick={() => setGameStarted(false)} />
      ) : (
        <Button content={"Start Game"} onClick={() => shuffle()} />
      )}

      <Board
        tiles={tiles}
        handleTileClick={swapTile}
        emptyIndex={emptyIndex}
        size={size}
      />
    </main>
  );
}
