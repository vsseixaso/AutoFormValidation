import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "./InputNumber";

export const InputNumberDecimal = (props) => {
  return <InputNumber step={0.01} {...props}></InputNumber>;
};

InputNumberDecimal.propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  entity: PropTypes.object.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func,
  rules: PropTypes.array,
};

InputNumberDecimal.defaultProps = {
  step: 0.01,
};
