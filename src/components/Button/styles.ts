import styled from "styled-components";

export const Button = styled.button`
  width: 185px;
  height: 40px;
  border: none;
  background-color: #a83434;
  border-radius: 3px;
  margin: 20px 0;
  color: #fff;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: #8d2525;
  }

  &:disabled {
    background-color: #8d2525;
    cursor: not-allowed;
  }
`;
