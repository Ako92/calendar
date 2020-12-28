import styled from "styled-components";
import { OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const AddNewItemContainerTag = styled.div`
  margin-top: 30px;
  color: ${OCEAN_BLUE_COLOR};
  font-size: 2rem;
  cursor: pointer;
`;

export const PlusCharTag = styled.span`
  border: 2px solid ${OCEAN_BLUE_COLOR};
  border-radius: 50%;
  padding: 0 9px;
  margin-right: 5px;
  ::after {
    content: "+";
  }
`;

export const AddNewItemSpanTag = styled.span`
  align-self: center;
  font-size: 8rem;
`;
