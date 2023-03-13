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
    imgUrl,
    setImgUrl,
  } = useHelper();

  return (
    <main className={styles.main}>
      <Title content="sliding puzzle app" />

      <Input
        label="Add an image url:"
        type="text"
        value={imgUrl}
        disabled={gameStarted}
        onChange={e => setImgUrl(e.target.value)}
      />

      <Input
        label="Set the grid size of board:"
        type="number"
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
        imgUrl={imgUrl ?? ""}
      />
    </main>
  );
}
