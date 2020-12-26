import React from "react";
import EventCard from "../EventCard";
import PropTypes from "prop-types";
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
