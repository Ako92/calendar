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
const IS_TODAY = "isToday";
function sortDate(a, b) {
  var dateA = a.currentDate.getTime();
  var dateB = b.currentDate.getTime();
  return dateA < dateB ? 1 : -1;
}

function sameDay(d1, d2) {
    /** date comparator */
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}



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
 *  />
 * )
 */
const CategorizedEventMapper = (props) => {
  const { ItemsToRender, OnEdit, OnDelete } = props;
  const today = new Date();

  /** to sort items By date */
  const SortedItems = ItemsToRender.sort(sortDate);

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
  Object.keys(groups).forEach((key) => {
    if (groups[key][IS_TODAY]) {
      ArrayToRender.push(
        <TitleContainerTag>
          <TodayTitleTag key={key}>Today Events</TodayTitleTag>
        </TitleContainerTag>
      );
    } else {
      ArrayToRender.push(
        <TitleContainerTag>
          <DateTitleTag key={key}>{key}</DateTitleTag>
        </TitleContainerTag>
      );
    }
    groups[key]?.events.forEach((event) => {
      ArrayToRender.push(
        <EventCard
          key={event.currentDate + event.title}
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
      {ArrayToRender}
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
};
