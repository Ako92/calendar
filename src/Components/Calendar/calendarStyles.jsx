import styled from "styled-components";
export const CalendarContainerTag = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 80%;
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
    font-weight: bold;
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
