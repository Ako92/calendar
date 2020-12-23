import styled, { createGlobalStyle } from "styled-components";

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
     }
     }
     }
   
 }
  
`;
export default GlobalStyles;

export const RowTag = styled.div`
  /* width: auto; */
`;
