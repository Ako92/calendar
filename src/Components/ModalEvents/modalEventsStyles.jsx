import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../Styles/globalStyles";

export const AddCharacterButtonTag = styled.button`
  font-size: 120px;
  padding: 0px 50px;
  border: 2px solid ${LIGHT_GRAY_COLOR};
  border-radius: 50%;
  color: ${LIGHT_GRAY_COLOR};
  text-decoration: none;
  background-color: transparent;
`;

export const NoEventContainer = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AddEventTag = styled.span`
  margin-top: 20px;
  color: ${LIGHT_GRAY_COLOR};
  font-size: 20px;
`;
