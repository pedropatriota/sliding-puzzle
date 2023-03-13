import type { TTitleProps } from "../../contracts";
import * as Style from "./styles";

export const Title = ({ content }: TTitleProps) => (
  <Style.Heading>{content}</Style.Heading>
);

export default Title;
