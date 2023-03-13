import styled from "styled-components";

import { TBoardProps } from "../../contracts";

export const Board = styled.div<Partial<TBoardProps>>`
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size}, 1fr)`};
  grid-template-rows: ${({ size }) => `repeat(${size}, 1fr)`};
  align-items: center;
  justify-content: center;
  margin: 100px 0 20px 0;
  background: #000;
  width: 600px;
  height: 600px;
`;
