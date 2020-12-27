import styled from "styled-components";
import { OCEAN_BLUE_COLOR } from "../../Styles/globalStyles";

export const TimeRendererContainer = styled.div`
  height: 50px;
  padding-right: 10px;
  flex-direction: column;
`;
export const TimeBoxTag = styled.span`
  color: white;
  font-size: 40px;
  background-color: ${OCEAN_BLUE_COLOR};
  border-radius: 6px;
  padding: 8px;
  margin: 2px;
`;

export const TimeTypeTag = styled.div`
  align-self: center;
  display: block;
  margin: auto;
  text-align: center;
  font-size: 20px;
  color: ${OCEAN_BLUE_COLOR};
`;
