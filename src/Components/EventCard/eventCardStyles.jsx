import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../Styles/globalStyles";

export const EventCardContainerTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* converted to rgba to apply opacity in this border, this is the rgba code of our current light gray */
  border-bottom: 3px solid rgba(163, 163, 163, 0.5);
  padding-bottom: 15px;
  margin-bottom: 15px;
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

export const DeleteEventImgTag = styled.img`
  padding-bottom: 10px;
`;
