import React from "react";
import Calendar from "../../Components/Calendar";
import Toast from "../../Components/Toast";

import {
  CalendarTitleTag,
  CalendarContainerTag,
  CalendarRowTag,
} from "./calendarScreenStyles";
const PICK_A_DAY = "Pick a day";
/**
 * Component to render calendar tab content
 * @component
 * @example
 *
 * return (
 *   <CalendarScreen
 * />
 * )
 */
const CalendarScreen = () => {
  return (
    <CalendarContainerTag>
      <CalendarRowTag>
        <CalendarTitleTag>{PICK_A_DAY}</CalendarTitleTag>
        <Calendar />
      </CalendarRowTag>
      <Toast />
    </CalendarContainerTag>
  );
};
export default CalendarScreen;
