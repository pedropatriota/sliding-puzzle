export type TCreateArraysOfKeys = {
  cols: number;
  rows: number;
};

export type TBoardProps = {
  tiles: number[];
  handleTileClick: (i: number) => void;
  emptyIndex: number;
  isEmptyIndex?: boolean;
};
