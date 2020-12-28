import styled, { createGlobalStyle } from "styled-components";
import MyriadArabicRegular from "./fonts/MyriadArabic/MyriadArabic-Regular.woff";
import MyriadArabicBold from "./fonts/MyriadArabic/MyriadArabic-Bold.woff";

export const OCEAN_BLUE_COLOR = "#00aeef";
export const LIGHT_GRAY_COLOR = "#a3a3a3";
export const BLOODY_RED_COLOR = "#d95141";
export const TOAST_ORANGE_COLOR = "#f5a647";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'MyriadArabic-Bold';
        src: local('MyriadArabic-Bold'),
        url(${MyriadArabicBold}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'MyriadArabic';
        src: local('MyriadArabic'),
        url(${MyriadArabicRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
  html{
    height: 100%;
  }

  body {    
    font-family: MyriadArabic, Helvetica, Sans-Serif;
    background-color: #ededed;
    min-height: 100%;
    height:100%
  }
  #root{
    min-height: 100%;
    height: 100%;
  }
  .tabs{
    
    max-height: 55px;
    background-color:#fff;
    .nav-item{ 
      color: ${BLOODY_RED_COLOR};
      font-size:2rem;
      height:55px;
    
    &.active{
      border-width:0 0 4px 0 ;
      border-color: ${BLOODY_RED_COLOR};
      border-style: solid;
      background-color:transparent;
      color:${BLOODY_RED_COLOR};
     }
     &:hover{
       border-left: unset;
       border-right: unset;
       border-top: unset;
     }
     }
  }
  .tab-content{
    height: calc(100% - 60px);
  }
  .modal-header, .modal-footer{
    border: none;
  }
  .modal-title{
    color:${LIGHT_GRAY_COLOR};
    font-size:2rem;
  }
  .modal-content{
    height:80vh;
    border-radius:unset;
  }
  .modal-footer{
    flex-wrap:nowrap;
  }
  .close{
    font-weight: 400;
    font-size:2rem;
    color:rgba(136, 136, 136, 0.8)
  }
  textarea:focus, input:focus,button:focus{
    outline: none;
}
`;
export default GlobalStyles;

export const CircularButtonTag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border: 2px solid ${LIGHT_GRAY_COLOR};
  border-radius: 50%;
  color: ${LIGHT_GRAY_COLOR};
  text-decoration: none;
  background-color: transparent;
`;

export const CircularScreenContainerTag = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CircularScreenDescriptionTag = styled.span`
  margin-top: 20px;
  color: ${LIGHT_GRAY_COLOR};
  font-size: 2.5rem;
`;
