import React from "react";
import PropTypes from "prop-types";
import {
  EventCardContainerTag,
  EventCardTitleTag,
  EventCardButtonTag,
  ButtonsContainerTag,
  EventCardImgTag,
} from "./eventCardStyles";

/**
 * Event Card
 * This will use to render cards in event lists.
 * Dumb Component
 * @component
 * @example
 *
 * return (
 *   <EventCard
 *      Title="Example Title"
 *      OnEdit={()=> handler of edit in card }
 *      OnDelete{()=> handler of delete in card } />
 * )
 */
const EventCard = (props) => {
  const { Title, OnEdit, OnDelete, OnClick, HasBorderBottom } = props;

  return (
    <EventCardContainerTag
      hasBorderBottom={HasBorderBottom}
      onClick={() => OnClick?.()}
    >
      <EventCardTitleTag>{Title}</EventCardTitleTag>
      <ButtonsContainerTag>
        <EventCardButtonTag onClick={OnEdit}>
          <EventCardImgTag src="/icons/edit.png" alt="edit event" />
        </EventCardButtonTag>
        <EventCardButtonTag onClick={OnDelete}>
          <EventCardImgTag src="/icons/delete.png" alt="delete event" />
        </EventCardButtonTag>
      </ButtonsContainerTag>
    </EventCardContainerTag>
  );
};
export default EventCard;
EventCard.propTypes = {
  /**
   * This handles click on card it self.
   */
  OnClick: PropTypes.string,
  /**
   *  title of event card
   */
  Title: PropTypes.string.isRequired,
  /**
   *  on edit button clicked handler function
   */
  OnEdit: PropTypes.func.isRequired,
  /**
   *  on delete button clicked handler function
   */
  OnDelete: PropTypes.func.isRequired,
  /** to removed border bottom of card you can pass this value false */
  HasBorderBottom: PropTypes.bool.isRequired,
};
EventCard.defaultProps = {
  HasBorderBottom: true,
};
