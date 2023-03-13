export type TCreateArraysOfKeys = {
  cols: number;
  rows: number;
};

export type TBoardProps = {
  tiles: number[];
  handleTileClick: (i: number) => void;
  emptyIndex: number;
  size: number;
};

export type TSwapProps = {
  index: number;
  emptyIndex: number;
  size: number;
  tiles: number[];
};

export type TSwapReturnProps = {
  newBoard: number[];
  newEmptyIndex: number;
};

export type TTilesProps = {
  index: number;
  tile: number;
  emptyIndex: number;
  handleTileClick: (i: number) => void;
  isEmptyIndex?: boolean;
};

export type TTitleProps = {
  content: string;
};

export type TInputProps = {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
