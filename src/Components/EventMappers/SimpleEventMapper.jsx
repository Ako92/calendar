import React from "react";
import EventCard from "../EventCard";
import PropTypes from "prop-types";

/**
 * Component for render events without any categorization
 * This will use to render list of event cards.

 * @component
 * @example
 *
 * return (
 *   <SimpleEventMapper
 *      ItemsToRender={[{
 *          description: "123123",
 *          id: 1609004507508,
 *          time: "12333",
 *          title: "ALI"
 *      }]}
 *      OnEdit={()=> // on edit function}
 *      OnDelete={()=> // on edit function}
 *      OnEventClick{()=> // on event click function}
 * />
 * )
 */
const SimpleEventMapper = (props) => {
  const { ItemsToRender, OnEdit, OnDelete, OnEventClick } = props;

  const Items = ItemsToRender?.map((event, index) => {
    return (
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

  return <>{Items}</>;
};
export default SimpleEventMapper;
SimpleEventMapper.propTypes = {
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
  OnEventClick:PropTypes.func.isRequired
};
