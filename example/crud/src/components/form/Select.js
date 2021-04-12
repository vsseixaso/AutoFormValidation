import React from "react";
import PropTypes from "prop-types";

export const Select = (props) => {
  return (
    <React.Fragment>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.fieldId}
      >
        {props.label}
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        id={props.fieldId}
        value={props.entity[props.fieldId]}
        onChange={(e) => props.onChange(props.fieldId, e.target.value)}
      >
        {Object.keys(props.options).map((key) => (
          <option id={key} value={key}>
            {props.options[key]}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

Select.propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  entity: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  rules: PropTypes.array,
};
