import React from "react";

import moment from "moment";
import { PropTypes } from "prop-types";
import { MonthDivTag } from "./calendarHeaderStyles";

/**
 * Component for render header of calendar.
 *
 * @component
 * @example
 * const goToNextMonth = ()=> // handler function to go to next month in calendar component
 * const goToPrevMonth = ()=> // handler function to go to prev month in calendar component
 * const selectedMonth = 0 // this will be january
 * const selectedYear = 2020
 * return (
 *   <CalendarHeader GoToNextMonth={goToNextMonth} GoToPrevMonth={goToPrevMonth} SelectedMonth={selectedMonth} SelectedYear={selectedYear} />
 * )
 */
const CalendarHeader = (props) => {
  const { GoToPrevMonth, GoToNextMonth, SelectedMonth, SelectedYear } = props;

  return (
    <MonthDivTag>
      <ul>
        <li className="prev" onClick={GoToPrevMonth}>
          <img src="/icons/arrow.png" alt="prev month" />
        </li>
        <li className="next" onClick={GoToNextMonth}>
          <img src="/icons/arrow.png" alt="prev month" />
        </li>
        <li>
          <span>{moment(SelectedMonth, "M").format("MMMM")}</span>&nbsp;
          <span>{SelectedYear}</span>
        </li>
      </ul>
    </MonthDivTag>
  );
};
export default CalendarHeader;
CalendarHeader.propTypes = {
  /**
   * To handle go to next month
   */
  GoToNextMonth: PropTypes.func.isRequired,
  /**
   * To handle go to prev month
   */
  GoToPrevMonth: PropTypes.func.isRequired,
  /**
   * To render currently selected month
   */
  SelectedMonth: PropTypes.number.isRequired,
  /**
   * To render currently selected year
   */
  SelectedYear: PropTypes.number.isRequired,
};
