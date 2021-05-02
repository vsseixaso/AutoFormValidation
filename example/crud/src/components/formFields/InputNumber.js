import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";

export const InputNumber = (props) => {
  return <Input inputType={"number"} {...props}></Input>;
};

InputNumber.propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  entity: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
