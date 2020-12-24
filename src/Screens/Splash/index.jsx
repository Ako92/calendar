import React from "react";
import logo from "./../../logo.png";
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
        <LogoImgTag src={logo} alt="calendar logo" />
        <H1Tag>{CALENDAR_NAME}</H1Tag>
      </SplashScreenRowTag>
    </SplashScreenContainerTag>
  );
};
export default SplashScreen;
