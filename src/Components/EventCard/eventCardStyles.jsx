import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../Styles/globalStyles";

export const EventCardContainerTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${LIGHT_GRAY_COLOR};
  padding-bottom:15px;
`;

export const EventCardTitleTag = styled.span`
  font-size: 20px;
  color: ${LIGHT_GRAY_COLOR};
`;

export const ButtonsContainerTag = styled.div`
  justify-content: space-evenly;
`;
export const EventCardButtonTag = styled.button`
  background-color: transparent;
  border: none;
`;

export const EventCardImgTag = styled.img`
  height: 25px;
`;
