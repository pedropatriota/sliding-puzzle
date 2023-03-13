import type { TCreateArraysOfKeys } from "./contract";

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
