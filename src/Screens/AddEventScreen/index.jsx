import React, { useState } from "react";
import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import { AddEventContainerTag, ButtonContainerTag } from "./addEventStyles";
import PropTypes from "prop-types";
import Button from "../../Components/Button";
/**
 * On click on add event button this screen will show.
 *
 * @component
 * @example
 * 
 *  const InitialValues={
    currentDate: new Date(),
    time: '10 am',
    title: "Daily meeting",
    description: "Don't Forget to mention yu works",
  }
 * return (
 *   <AddEventScreen InitialValues={InitialValues} OnSubmit={()=>{// submit logic should go here}} OnCancel={()=>{// to cancel to event.}}/>
 * )
 */

const AddEventScreen = (props) => {
  const { OnSubmit, OnCancel, InitialValues } = props;
  const [time, setTime] = useState(InitialValues?.time);
  const [title, setTitle] = useState(InitialValues?.title);
  const [description, setDescription] = useState(InitialValues?.description);
  return (
    <AddEventContainerTag>
      <Input
        Placeholder="Time"
        OnBlur={(event) => {
          setTime(event?.target?.value);
        }}
        DefaultValue={time}
      />
      <Input
        Placeholder="Title"
        OnBlur={(event) => {
          setTitle(event?.target?.value);
        }}
        DefaultValue={title}
      />
      <TextArea
        Placeholder="Description"
        OnBlur={(event) => {
          setDescription(event?.target?.value);
        }}
        DefaultValue={description}
      />
      <ButtonContainerTag>
        <Button
          Variant="blue"
          Text="Submit"
          Action={() => OnSubmit(time, title, description)}
        />
        <Button Variant="white" Text="Cancel" Action={OnCancel} />
      </ButtonContainerTag>
    </AddEventContainerTag>
  );
};
export default AddEventScreen;
AddEventScreen.propTypes = {
  /** on submit of event */
  OnSubmit: PropTypes.func.isRequired,
  /** on  add event cancel */
  OnCancel: PropTypes.func.isRequired,
  /** initial values if we are in edit mode */
  InitialValues: PropTypes.shape({
    currentDate: PropTypes.instanceOf(Date),
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
