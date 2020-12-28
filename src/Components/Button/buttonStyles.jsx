import styled from "styled-components";
import { OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const ButtonTag = styled.button`
  background: ${(props) =>
    props?.Variant === "blue" ? OCEAN_BLUE_COLOR : "#fff"};
  color: ${(props) => (props?.Variant === "blue" ? "#fff" : OCEAN_BLUE_COLOR)};
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border: 2px solid ${OCEAN_BLUE_COLOR};
  width:49%;
`;
