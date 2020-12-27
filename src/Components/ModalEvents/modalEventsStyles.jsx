import styled from "styled-components";
import { OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const AddNewItemContainerTag = styled.div`
  margin-top: 30px;
  color: ${OCEAN_BLUE_COLOR};
  font-size: 20px;
  cursor: pointer;
`;

export const PlusCharTag = styled.span`
  border: 1px solid ${OCEAN_BLUE_COLOR};
  border-radius: 50%;
  padding: 0 5px;
  margin-right: 2px;
  ::after {
    content: "+";
  }
`;
