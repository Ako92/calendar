import styled from "styled-components";

export const MonthDivTag = styled.div`
  border-radius: 5px 5px 0 0;
  padding: 10px 25px;
  width: 100%;
  background: #fff;
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
    li {
      color: #6f5b54;
      font-size: 2rem;
      text-transform: uppercase;
      list-style-type: none;
    }
  }
  img {
    width: 20px;
  }
  .prev {
    float: left;
    img {
      transform: rotate(180deg);
    }
  }
  .next {
    float: right;
  }
`;
