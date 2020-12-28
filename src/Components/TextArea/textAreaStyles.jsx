import styled from "styled-components";
import { LIGHT_GRAY_COLOR, OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const TextAreaTag = styled.textarea`
  border: unset;
  border-bottom: 3px solid ${OCEAN_BLUE_COLOR};
  margin: 15px 0;
  padding: 10px 0;
  height:250px;
  color: ${LIGHT_GRAY_COLOR};
  font-size: 20px;
  ::placeholder {
    color: ${LIGHT_GRAY_COLOR};
    font-size: 20px;
  }
`;
