import type {
  TCreateArraysOfKeys,
  TSwapProps,
  TSwapReturnProps,
} from "./contracts";

export const createArrayOfTiles = ({
  cols,
  rows,
}: TCreateArraysOfKeys): number[] => {
  const length = cols * rows;

  return Array.from({ length }, (_, i) => i + 1);
};

// Fisher-Yates algorithm
export const shuffleTiles = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const handleTileClick = ({
  index,
  emptyIndex,
  size,
  tiles,
}: TSwapProps): TSwapReturnProps | undefined => {
  const row = Math.floor(index / size);
  const col = index % size;
  const emptyRow = Math.floor(emptyIndex / size);
  const emptyCol = emptyIndex % size;
  const distance = Math.abs(row - emptyRow) + Math.abs(col - emptyCol);
  if (distance === 1) {
    const newBoard = [...tiles];
    [newBoard[index], newBoard[emptyIndex]] = [
      newBoard[emptyIndex],
      newBoard[index],
    ];

    return { newBoard, newEmptyIndex: index };
  }
};

export function isPuzzleSolved(tiles: number[]) {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

export const isPuzzleSolvable = (tiles: number[]) => {
  let inversionCount = 0;
  const size = Math.sqrt(tiles.length);
  const blankRow = Math.floor(tiles.indexOf(tiles.length - 1) / size);

  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] === 0) continue;
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[j] === 0) continue;
      if (tiles[i] > tiles[j]) inversionCount++;
    }
  }

  if (size % 2 !== 0) {
    return inversionCount % 2 === 0;
  } else {
    return (inversionCount + blankRow) % 2 !== 0;
  }
};
