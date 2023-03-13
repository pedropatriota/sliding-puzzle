import type { TButtonProps } from "../../contracts";
import * as Style from "./styles";

const Button = ({ content, onClick, disabled }: TButtonProps) => (
  <Style.Button type="button" disabled={disabled} onClick={onClick}>
    {content}
  </Style.Button>
);

export default Button;
