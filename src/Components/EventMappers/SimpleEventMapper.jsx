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
 * />
 * )
 */
const SimpleEventMapper = (props) => {
  const { ItemsToRender, OnEdit, OnDelete } = props;

  const Items = ItemsToRender?.map((event) => {
    return (
      <EventCard
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
  ItemsToRender: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  OnEdit: PropTypes.func.isRequired,
  OnDelete: PropTypes.func.isRequired,
};
