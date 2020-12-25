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
  const { Placeholder, OnChange, OnBlur } = props;
  return (
    <InputTag placeholder={Placeholder} onChange={OnChange} onBlur={OnBlur} />
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
};
Input.defaultProps = {
  Placeholder: "",
  OnChange: () => {},
  OnBlur: () => {},
};
