import styled from "styled-components";

import { TBoardProps } from "../../contract";

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  grid-template-rows: repeat(4, minmax(150px, 1fr));
  align-items: center;
  justify-content: center;
  margin: 100px 0 20px 0;
  background: #000;
`;

export const Tiles = styled.div<Partial<TBoardProps>>`
  opacity: ${({ isEmptyIndex }) => (isEmptyIndex ? 0 : 1)};
  background: salmon;
`;
