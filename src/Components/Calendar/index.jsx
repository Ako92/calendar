import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  DaysUlTag,
  WeekDaysUlTag,
  CalendarContainerTag,
} from "./calendarStyles";
import CalendarHeader from "./CalendarHeader";
const ACTIVE_CLASS_NAME = "active";


/**
 * Calendar component
 *
 * @component
 * @example
 * No Props needed
 * return (
 *   <Calendar/>
 * )
 */

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(+moment().format("DD"));
  const [selectedMonth, setSelectedMonth] = useState(+moment().format("MM"));
  const [selectedYear, setSelectedYear] = useState(+moment().format("YYYY"));
  const [daysSpotsToRender, setDaysSpotsToRender] = useState();

  useEffect(() => {
    setDaysSpotsToRender(
      (() => {
        /** find days count in selected month */
        const daysCount = +moment(
          `${selectedYear}-${selectedMonth}`,
          "YYYY-MM"
        ).daysInMonth();
        const daysTempArray = [];
        /** to find out which week day is the first day of selected month */
        const startWeekDayNumberOfMonth = new Date(
          selectedYear,
          selectedMonth - 1,
          1
        ).getDay();
        for (let i = 1; i <= startWeekDayNumberOfMonth; i++) {
          /** this iteration will handle blank spots in week days. */
          daysTempArray.push("");
        }
        for (let i = 1; i <= daysCount; i++) {
          /**  to render days in calendar */
          daysTempArray.push(i);
        }
        return daysTempArray;
      })()
    );
  }, [selectedMonth, selectedYear]);

  const daysToRender = daysSpotsToRender?.map((item) => (
    <li
      className={`${item && selectedDay === item ? ACTIVE_CLASS_NAME : ""}`}
      onClick={() => {
        if (item) {
          setSelectedDay(item);
        }
      }}
    >
      {item}
    </li>
  ));

  const goToPrevMonth = () => {
    /**  on month change I select first day of next month */
    setSelectedDay(1);
    if (selectedMonth > 1) {
      /** this means we have months in current selectedYear to go back */
      return setSelectedMonth(selectedMonth - 1);
    }
    /**  if current selectedMonth number is 1 it means we should go to prev selectedYear! */
    setSelectedYear(selectedYear - 1);
    return setSelectedMonth(12);
  };

  const goToNextMonth = () => {
    /**  on month change I select first day of next month */
    setSelectedDay(1);
    if (selectedMonth < 12) {
      /**  if current selectedMonth number is less than 12 it means we can go to next selectedMonth! */
      return setSelectedMonth(selectedMonth + 1);
    }
    /**  if current selectedMonth number is 12 it means we should go to next selectedYear! */
    setSelectedYear(selectedYear + 1);
    setSelectedMonth(1);
  };

  const renderWeekdaysName = moment
    .weekdaysShort()
    .map((day) => <li>{day}</li>);
  if (daysSpotsToRender) {
    return (
      <CalendarContainerTag>
        <CalendarHeader
          GoToNextMonth={goToNextMonth}
          GoToPrevMonth={goToPrevMonth}
          SelectedMonth={selectedMonth}
          SelectedYear={selectedYear}
        />
        <WeekDaysUlTag>{renderWeekdaysName}</WeekDaysUlTag>
        <DaysUlTag>{daysToRender}</DaysUlTag>
      </CalendarContainerTag>
    );
    /** Maybe we should handle some loading handler here to prevent flash on first render of component. */
  } else return <></>;
};
export default Calendar;