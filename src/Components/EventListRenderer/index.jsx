import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalRenderer from "../Modal";
import {
  CircularButtonTag,
  CircularScreenContainerTag,
  CircularScreenDescriptionTag,
} from "../../Styles/globalStyles";
import { DeleteEventImgTag } from "../EventCard/eventCardStyles";
import { useDispatch } from "react-redux";
import { deleteEventByID, editEventByID } from "../../Store/actions/events";
import AddEventScreen from "../../Screens/AddEventScreen";
import SimpleEventMapper from "../EventMappers/SimpleEventMapper";
import CategorizedEventMapper from "../EventMappers/CategorizedEventMapper";

/**
 * Event List
 * This will use to render list of event cards.
 * also it will handle edit and delete of content

 * @component
 * @example
 *
 * return (
 *   <EventListRenderer
 *      ItemsToRender={[{
 *          description: "123123",
 *          id: 1609004507508,
 *          time: "12333",
 *          title: "ALI"
 *      }]}
 *      IsCategorizedByDate={false}
 * />
 * )
 */
const EventListRenderer = (props) => {
  const { ItemsToRender, IsCategorizedByDate } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [eventToEdit, setEventToEdit] = useState();
  const [eventIDToDelete, setEventIDToDelete] = useState();
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    setEventIDToDelete(null);
    setEventToEdit(null);
    setIsOpenModal(false);
  };

  const onEditEventSubmit = (time, title, description) => {
    /**
     * on edit submit
     */
    if (eventToEdit) {
      dispatch(
        editEventByID({
          event: {
            time: time,
            title: title,
            description: description,
            id: eventToEdit.id,
          },
        })
      );
      setIsOpenModal(false);
      setEventToEdit(null);
    }
  };
  const onCancelEditEvent = () => {
    /**
     * on edit cancel
     */
    if (eventToEdit) {
      setIsOpenModal(false);
      return setEventToEdit(null);
    }
  };
  const EditEventModalContent = (
    <AddEventScreen
      InitialValues={eventToEdit && eventToEdit}
      OnSubmit={onEditEventSubmit}
      OnCancel={onCancelEditEvent}
    />
  );
  const DeleteItemModalContent = (
    <CircularScreenContainerTag>
      <CircularButtonTag TallContent={true}>
        <DeleteEventImgTag src="/icons/delete.png" alt="delete event" />
      </CircularButtonTag>
      <CircularScreenDescriptionTag>Are you sure?</CircularScreenDescriptionTag>
    </CircularScreenContainerTag>
  );

  const ModalPropsBasedOnEvent = (() => {
    /**
     * modal contents: can be delete or edit.
     */
    if (eventIDToDelete) {
      return {
        content: DeleteItemModalContent,
        title: "Delete Event",
        footer: [
          {
            variant: "blue",
            text: "Delete",
            action: () => {
              dispatch(deleteEventByID(eventIDToDelete));
              setIsOpenModal(false);
            },
          },
          {
            variant: "white",
            text: "Cancel",
            action: () => {
              setIsOpenModal(false);
            },
          },
        ],
      };
    } else if (eventToEdit) {
      return {
        content: EditEventModalContent,
        title: "Edit Event",
      };
    }
  })();
  const onEdit = (event) => {
    setIsOpenModal(true);
    setEventToEdit(event);
  };
  const onDelete = (id) => {
    setIsOpenModal(true);
    setEventIDToDelete(id);
  };
  console.log("ItemsToRender",ItemsToRender)
  return (
    <>
      {IsCategorizedByDate ? (
        <CategorizedEventMapper
          ItemsToRender={ItemsToRender}
          OnDelete={onDelete}
          OnEdit={onEdit}
        />
      ) : (
        <SimpleEventMapper
          ItemsToRender={ItemsToRender}
          OnDelete={onDelete}
          OnEdit={onEdit}
        />
      )}
      <ModalRenderer
        ModalProps={{
          Title: ModalPropsBasedOnEvent?.title,
          Content: ModalPropsBasedOnEvent?.content,
          Footer: ModalPropsBasedOnEvent?.footer,
        }}
        IsOpenModal={isOpenModal}
        HandleCloseModal={handleCloseModal}
      />
    </>
  );
};
export default EventListRenderer;
EventListRenderer.propTypes = {
  /**
   * list of event items to render
   */
  ItemsToRender: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  /**
   * if this will be true the component will render content categorized by month
   */
  IsCategorizedByDate: PropTypes.bool,
};
