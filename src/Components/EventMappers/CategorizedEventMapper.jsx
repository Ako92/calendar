import React from "react";
import EventCard from "../EventCard";
import PropTypes from "prop-types";
import moment from "moment";
import {
  CategorizedEventMapperContainerTag,
  DateTitleTag,
  TitleContainerTag,
  TodayTitleTag,
} from "./eventMappersStyles";
import { sortDateComparator } from "../../Functions/sortDate";
import { sameDay } from "../../Functions/sameDay";
const IS_TODAY = "isToday";

/**
 * To Render events in Events tab
 * this component will sort and categorize events by date
 *
 * @component
 * @example
 *
 * return (
 *   <CategorizedEventMapper
 *      ItemsToRender={[{
 *          description: "123123",
 *          id: 1609004507508,
 *          time: "12333",
 *          title: "ALI"
 *      }]}
 *      OnEdit={()=> // on edit function}
 *      OnDelete={()=> // on edit function}
 *      OnEventClick{()=> // on event click function}
 *  />
 * )
 */
const CategorizedEventMapper = (props) => {
  const { ItemsToRender, OnEdit, OnDelete, OnEventClick } = props;
  const today = new Date();

  /** to sort items By date */
  const SortedItems = ItemsToRender.sort(sortDateComparator);

  /**
   *  this gives an object with dates as keys,
   *  events array and isToday will be the values of mentioned key
   * */
  const groups = SortedItems.reduce((groups, event) => {
    const date = moment(event.currentDate).format("MMMM DD");
    if (!groups[date]) {
      groups[date] = {};
      groups[date].events = [];
      if (sameDay(today, event.currentDate)) {
        /** if event date is current day this flag will set to true to render Red Todays Events tag */
        groups[date][IS_TODAY] = true;
      }
    }
    groups[date].events.push(event);
    return groups;
  }, {});

  const ArrayToRender = [];
  Object.keys(groups).forEach((key, index) => {
    if (groups[key][IS_TODAY]) {
      ArrayToRender.push(
        <TitleContainerTag key={"Today_Events"}>
          <TodayTitleTag>Today Events</TodayTitleTag>
        </TitleContainerTag>
      );
    } else {
      ArrayToRender.push(
        <TitleContainerTag key={key.toString() + index}>
          <DateTitleTag>{key}</DateTitleTag>
        </TitleContainerTag>
      );
    }
    groups[key]?.events.forEach((event, index) => {
      ArrayToRender.push(
        <EventCard
          OnClick={() => {
            OnEventClick(event);
          }}
          key={event.currentDate + index}
          Title={event.title}
          OnEdit={() => {
            OnEdit(event);
          }}
          OnDelete={() => {
            OnDelete(event.id);
          }}
        />
      );
    });
  });

  return (
    <CategorizedEventMapperContainerTag>
      {ArrayToRender ? ArrayToRender : <span>No Events Added Yet!</span>}
    </CategorizedEventMapperContainerTag>
  );
};
export default CategorizedEventMapper;
CategorizedEventMapper.propTypes = {
  /** Array of event items to render */
  ItemsToRender: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  /** on edit button clicked */
  OnEdit: PropTypes.func.isRequired,
  /** on delete button clicked */
  OnDelete: PropTypes.func.isRequired,
  /** on event click handler */
  OnEventClick: PropTypes.func.isRequired,
};
