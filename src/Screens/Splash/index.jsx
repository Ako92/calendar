import React from "react";
import logo from "./../../logo.png";
import {
  H1Tag,
  LogoImgTag,
  SplashScreenRowTag,
  SplashScreenContainerTag
} from "./../../Styles/splashScreenStyles";
const SplashScreen = () => {
  return (
    <SplashScreenContainerTag>
      <SplashScreenRowTag>
        <LogoImgTag src={logo} alt="calendar-logo" />
        <H1Tag>Awesome Calendar</H1Tag>
      </SplashScreenRowTag>
    </SplashScreenContainerTag>
  );
};
export default SplashScreen;
