import { createGlobalStyle } from "styled-components";

export const OCEAN_BLUE_COLOR = "#00aeef";
export const LIGHT_GRAY_COLOR = "#a3a3a3";

const GlobalStyles = createGlobalStyle`
  html{
    height: 100%;
  }

  body {    
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #ededed;
    min-height: 100%;
    height:100%
  }
  #root{
    min-height: 100%;
    height: 100%;
  }
  .tabs{
    padding: 10px 0 0;
    height: 60px;
    background-color:#fff;
    .nav-item{ 
      color:#d95141;
      font-size:20px;

    
    &.active{
      border-width:0 0 4px 0 ;
      border-color: #d95141;
      border-style: solid;
      background-color:transparent;
      color:#d95141;
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
    color:${LIGHT_GRAY_COLOR}
  }
`;
export default GlobalStyles;
