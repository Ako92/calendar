import React from "react";
import PropTypes from "prop-types";
import {
  TimeBoxTag,
  TimeRendererContainer,
  TimeTypeTag,
} from "./timeRendererStyles";

/**
 * TimeRenderer:
 * Will use to render time boxes for upcoming event.
 * @component
 * @example
 *
 * return (
 *   <EventDetail
 *      Value={12}
 *      Type={"Hours"}
 * />
 * )
 */
const TimeRenderer = (props) => {
  const { Value, Type } = props;
  const ArrayToRender = Value.toString().split("");
  if (ArrayToRender.length === 1) {
    ArrayToRender.unshift("0");
  }
  return (
    <TimeRendererContainer>
      {ArrayToRender.map((item) => (
        <TimeBoxTag key={item}>{item}</TimeBoxTag>
      ))}
      <TimeTypeTag>{Type}</TimeTypeTag>
    </TimeRendererContainer>
  );
};
export default TimeRenderer;
TimeRenderer.defaultProps = {
  /** Value to Render in Time boxes */
  Value: PropTypes.number.isRequired,
  /** Type will render under rendered time box */
  Type: PropTypes.string.isRequired,
};
