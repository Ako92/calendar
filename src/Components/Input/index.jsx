import React from "react";
import PropTypes from "prop-types";
import { InputTag } from "./inputStyles";
/**
 * Simple Input component
 *
 * @component
 * @example
 *
 * return (
 *   <Input  Placeholder= ""
 *       OnChange={ () => {}}
 *       OnBlur{ () => {}} />
 * )
 */
const Input = (props) => {
  const { Placeholder, OnChange, OnBlur, DefaultValue, Type } = props;
  return (
    <InputTag
      type={Type}
      placeholder={Placeholder}
      onChange={OnChange}
      onBlur={OnBlur}
      defaultValue={DefaultValue}
    />
  );
};
export default Input;
Input.propTypes = {
  /** placeholder inside text input */
  Placeholder: PropTypes.string.isRequired,
  /** onChange handler of input */
  OnChange: PropTypes.func,
  /** onBlur handler of input */
  OnBlur: PropTypes.func,
  /** value in case of need for instance init value */
  Value: PropTypes.string,
  /** type of input default is text*/
  Type: PropTypes.string,
};
Input.defaultProps = {
  Placeholder: "",
  OnChange: () => {},
  OnBlur: () => {},
  DefaultValue: "",
  type: "text",
};
