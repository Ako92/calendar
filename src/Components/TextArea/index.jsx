import React from "react";
import PropTypes from "prop-types";
import { TextAreaTag } from "./textAreaStyles";
const TextArea = (props) => {
  const { Placeholder, OnChange, OnBlur } = props;
  return (
    <TextAreaTag placeholder={Placeholder} onChange={OnChange} onBlur={OnBlur} />
  );
};
export default TextArea;
TextArea.propTypes = {
  /** placeholder inside text input */
  Placeholder: PropTypes.string.isRequired,
  /** onChange handler of input */
  OnChange: PropTypes.func,
  /** onBlur handler of input */
  OnBlur: PropTypes.func,
};
TextArea.defaultProps = {
  Placeholder: "",
  OnChange: () => {},
  OnBlur: () => {},
};
