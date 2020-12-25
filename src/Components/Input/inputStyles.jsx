import styled from "styled-components";
import { LIGHT_GRAY_COLOR, OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const InputTag = styled.input`
  border: unset;
  border-bottom: 2px solid ${OCEAN_BLUE_COLOR};
  padding: 10px 0;
  ::placeholder {
    color: ${LIGHT_GRAY_COLOR};
    font-size: 20px;
  }
`;
