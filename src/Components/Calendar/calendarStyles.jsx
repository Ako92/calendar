import styled from "styled-components";
export const CalendarContainerTag = styled.div`
  background-color: #fff;
  border-radius: 5px;
`;
export const WeekDaysUlTag = styled.ul`
  margin: 0;
  padding: 10px 0;
  background-color: #cd5853;

  li {
    text-transform: uppercase;
    display: inline-block;
    width: 13.6%;
    color: #fff;
    text-align: center;
    font-weight:bold;
  }
`;

export const DaysUlTag = styled.ul`
  padding: 10px 0;
  margin: 0;
  li {
    padding: 12px 0px;
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    font-size: 15px;
    color: #777;
  }
  .active {
    box-sizing: border-box;
    border-radius: 4px;
    background: #ede8e7;    
  }
`;

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
      font-size: 20px;
      text-transform: uppercase;
      list-style-type: none;
    }
  }
  .prev {
    float: left;
  }
  .next {
    float: right;
  }
`;
