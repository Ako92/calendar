import React from "react";
import { ToastContainerTag, ToastTextTag } from "./toastStyles";
import { shallowEqual, useSelector } from "react-redux";
import { sortDateComparator } from "../../Functions/sortDate";
import { sameDay } from "../../Functions/sameDay";

const TODAY_STRING = " today!";
/**
 * Toast to render under calendar component
 * There's a design issue in this component,
 * and that is there's no design for more than one events for today;
 * because of that i decided to render just one of them,
 *
 * @component
 * @example
 *
 * return (
 *   <Toast />
 * )
 */
const Toast = () => {
  const today = new Date();
  const { events } = useSelector(
    (state) => ({
      events: state?.eventsReducer?.events,
    }),
    shallowEqual
  );
  const SortedItems = events.sort(sortDateComparator);
  const toastData = SortedItems.find((item) => {
    if (sameDay(item.currentDate, today)) {
      return item;
    }
    return null;
  });
  if (toastData)
    return (
      <ToastContainerTag>
        <ToastTextTag>
          {toastData.title}
          {TODAY_STRING}
        </ToastTextTag>
      </ToastContainerTag>
    );
  return <></>;
};
export default Toast;
