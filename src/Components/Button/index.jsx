import React from "react";
import { ButtonTag } from "./buttonStyles";
import PropTypes from "prop-types";

/**
 * Button component
 * this will use to render Button
 *
 * @component
 * @example
 * const  Variant = "blue", Text = "my button", Action = () => { //button action should handle here }
 * return (
 *   <Button
 *      Variant={Variant}
 *      Color={Color}
 *      Text={Text}
 *      Action={Action}
 *  />
 * )
 */
const Button = (props) => {
  const { Variant, Text, Action } = props;
  return (
    <ButtonTag Variant={Variant} onClick={Action}>
      {Text}
    </ButtonTag>
  );
};
export default Button;
Button.propTypes = {
  /**
   * variant of button could be blue or white
   */
  Variant: PropTypes.string.isRequired,
  /**
   * action of button
   */
  Action: PropTypes.func.isRequired,
  /**
   * inner text  of button
   */
  Text: PropTypes.string.isRequired,
};
Button.defaultProps = {
  Variant: "blue",
};
