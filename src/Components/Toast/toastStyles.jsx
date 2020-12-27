import styled from "styled-components";
import { TOAST_ORANGE_COLOR } from "../../Styles/globalStyles";

export const ToastContainerTag = styled.div`
  right: 0;
  position: absolute;
  color:white;

`;

export const ToastTextTag = styled.span`
  padding: 12px 15px;
  margin: 0px 25px;
  background-color: ${TOAST_ORANGE_COLOR};
  box-shadow: 0px 0px 10px rgba(136, 136, 136, 0.8)
`;
