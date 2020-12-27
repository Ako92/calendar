import styled from "styled-components";
import { BLOODY_RED_COLOR } from "../../Styles/globalStyles";

export const SplashScreenContainerTag = styled.div`
  height: 100%;
`;

export const SplashScreenRowTag = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const H1Tag = styled.h2`
  color: ${BLOODY_RED_COLOR};
  padding-top: 30px;
`;
export const LogoImgTag = styled.img`
  max-width: 35%;
`;
