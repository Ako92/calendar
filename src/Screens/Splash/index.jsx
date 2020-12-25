import React from "react";
import {
  H1Tag,
  LogoImgTag,
  SplashScreenRowTag,
  SplashScreenContainerTag,
} from "./splashScreenStyles";
const CALENDAR_NAME = "Awesome Calendar";

const SplashScreen = () => {
  return (
    <SplashScreenContainerTag>
      <SplashScreenRowTag>
        <LogoImgTag src="/icons/logo.png" alt="calendar logo" />
        <H1Tag>{CALENDAR_NAME}</H1Tag>
      </SplashScreenRowTag>
    </SplashScreenContainerTag>
  );
};
export default SplashScreen;
