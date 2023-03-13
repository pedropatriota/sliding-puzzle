import type { TInputProps } from "../../contracts";
import * as Style from "./styles";

const Input = ({ label, value, onChange, disabled }: TInputProps) => (
  <Style.InputContainer>
    <label htmlFor="input-id">{label}</label>
    <input
      id="input-id"
      type="number"
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  </Style.InputContainer>
);

export default Input;
