import React from "react";
import PropTypes from "prop-types";
import { TextAreaTag } from "./textAreaStyles";

/**
 * Text Area component
 *
 * @component
 * @example
 *
 * return (
 *   <TextArea  Placeholder= ""
 *       OnChange={ () => {}}
 *       OnBlur{ () => {}} />
 * )
 */
const TextArea = (props) => {
  const { Placeholder, OnChange, OnBlur, DefaultValue } = props;
  return (
    <TextAreaTag
      placeholder={Placeholder}
      onChange={OnChange}
      onBlur={OnBlur}
      defaultValue={DefaultValue}
    />
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
  /**
   * default value of text area. if needed
   */
  DefaultValue: PropTypes.string,
};
TextArea.defaultProps = {
  Placeholder: "",
  OnChange: () => {},
  OnBlur: () => {},
  DefaultValue: "",
};
