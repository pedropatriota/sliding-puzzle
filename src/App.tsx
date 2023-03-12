import styles from "./App.module.css";
import Board from "./components/Board";

export default function App() {
  return (
    <main className={styles.main}>
      <Board />
    </main>
  );
}
