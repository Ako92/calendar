import styled from "styled-components";
import { OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const ButtonTag = styled.button`
  background: ${(props) =>
    props?.Variant === "blue" ? OCEAN_BLUE_COLOR : "#fff"};
  color: ${(props) => (props?.Variant === "blue" ? "#fff" : OCEAN_BLUE_COLOR)};
  font-size: 12px;
  margin: 10px;
  padding: 10px;
  border: 1px solid ${OCEAN_BLUE_COLOR};
`;
