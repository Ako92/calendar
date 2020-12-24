import React from "react";
import Calendar from "../../Components/Calendar";

import {
  CalendarTitleTag,
  CalendarContainerTag,
  CalendarRowTag,
} from "./calendarScreenStyles";
const PICK_A_DAY = "Pick a day";

const CalendarScreen = () => {
  return (
    <CalendarContainerTag>
      <CalendarRowTag>
        <CalendarTitleTag>{PICK_A_DAY}</CalendarTitleTag>
        <Calendar />
      </CalendarRowTag>
    </CalendarContainerTag>
  );
};
export default CalendarScreen;
