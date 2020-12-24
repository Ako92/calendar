import React from "react";
import PropTypes from "prop-types";

const ACTIVE_CLASS_NAME = "active";

/**
 * DayRenderer component
 * this will use to render day spots in calendar components
 *
 * @component
 * @example
 * return (
 *   <DayRenderer
 *    CurrentDaySpot={item}
 *    SelectedDay={selectedDay}
 *    SetSelectedDay={setSelectedDay}
 *    SetShowModal={setShowModal}
 *  />
 * )
 */
const DayRenderer = (props) => {
  const { CurrentDaySpot, SelectedDay, SetSelectedDay, SetIsOpenModal } = props;
  return (
    <li
      className={`${
        CurrentDaySpot && SelectedDay === CurrentDaySpot
          ? ACTIVE_CLASS_NAME
          : ""
      }`}
      onClick={() => {
        if (CurrentDaySpot) {
          SetSelectedDay(CurrentDaySpot);
          SetIsOpenModal(true);
        }
      }}
    >
      {CurrentDaySpot}
    </li>
  );
};
export default DayRenderer;
DayRenderer.propTypes = {
  /**
   * Current day to render
   */
  CurrentDaySpot: PropTypes.number.isRequired,
  /**
   * User Selected Day
   * this will use to compare with rendering item,
   * to do the preferred logic base on it.
   */
  SelectedDay: PropTypes.number.isRequired,
  /**
   * on click of any day in Calendar we should select it
   */
  SetSelectedDay: PropTypes.func.isRequired,
  /**
   * this will call on click of any day
   */
  SetIsOpenModal: PropTypes.func.isRequired,
};
