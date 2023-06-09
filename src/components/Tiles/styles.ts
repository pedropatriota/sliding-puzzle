import styled from "styled-components";

import type { TTilesProps } from "../../contracts";

export const Tiles = styled.div<Partial<TTilesProps>>`
  opacity: ${({ isEmptyIndex }) => (isEmptyIndex ? 0 : 1)};
  background: salmon;
  border: 1px solid;
  height: 100%;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  background-image: ${({ imgUrl }) => (imgUrl ? `url(${imgUrl})` : undefined)};
  background-position: ${({ colPos, rowPos, imgUrl }) =>
    imgUrl ? `${colPos}px ${rowPos}px` : undefined};
  background-size: 600px;
  background-repeat: no-repeat;
`;
