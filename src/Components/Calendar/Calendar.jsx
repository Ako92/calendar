import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  DaysUlTag,
  WeekDaysUlTag,
  MonthDivTag,
  CalendarContainerTag,
} from "./calendarStyles";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(+moment().format("MM"));
  const [selectedYear, setSelectedYear] = useState(+moment().format("YYYY"));
  const [daysCount] = useState(+moment().daysInMonth());
  const [daysSpotsToRender, setDaysSpotsToRender] = useState();
  useEffect(() => {
    setDaysSpotsToRender(
      (() => {
        const daysTempArray = [];
        const startWeekDayNumberOfMonth = new Date(
          selectedYear,
          selectedMonth - 1,
          1
        ).getDay();
        for (let i = 1; i <= startWeekDayNumberOfMonth; i++) {
          // this iteration will handle blank spots in week days.
          daysTempArray.push("");
        }
        for (let i = 1; i <= daysCount; i++) {
          //  to render days in calendar
          daysTempArray.push(i);
        }
        return daysTempArray;
      })()
    );
  }, [selectedMonth, selectedYear, daysCount]);

  const daysToRender =
    daysSpotsToRender &&
    daysSpotsToRender.map((item) => (
      <li
        className={`${item && selectedDay === item ? "active" : ""}`}
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
    if (selectedMonth > 1) {
      // this means we have months in current selectedYear to go back
      return setSelectedMonth(selectedMonth - 1);
    }
    //  if current selectedMonth number is 1 it means we should go to prev selectedYear!
    setSelectedYear(selectedYear - 1);
    return setSelectedMonth(12);
  };
  const goToNextMonth = () => {
    if (selectedMonth < 12) {
      //  if current selectedMonth number is less than 12 it means we can go to next selectedMonth!
      return setSelectedMonth(selectedMonth + 1);
    }
    //  if current selectedMonth number is 12 it means we should go to next selectedYear!
    setSelectedYear(selectedYear + 1);
    setSelectedMonth(1);
  };
  const renderWeekdaysName = moment
    .weekdaysShort()
    .map((day) => <li>{day}</li>);
  if (daysSpotsToRender) {
    return (
      <CalendarContainerTag>
        <MonthDivTag>
          <ul>
            <li className="prev" onClick={goToPrevMonth}>
              &#10094;
            </li>
            <li className="next" onClick={goToNextMonth}>
              &#10095;
            </li>
            <li>
              <span>{moment(selectedMonth, "M").format("MMMM")}</span>&nbsp;
              <span>{selectedYear}</span>
            </li>
          </ul>
        </MonthDivTag>
        <WeekDaysUlTag>{renderWeekdaysName}</WeekDaysUlTag>
        <DaysUlTag>{daysToRender}</DaysUlTag>
      </CalendarContainerTag>
    );
  } else return <></>;
};
export default Calendar;
