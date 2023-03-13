import type { TInputProps } from "../../contracts";
import * as Style from "./styles";

const Input = ({ label, value, onChange }: TInputProps) => (
  <Style.InputContainer>
    <label htmlFor="input-id">{label}</label>
    <input id="input-id" type="number" value={value} onChange={onChange} />
  </Style.InputContainer>
);

export default Input;
