import React from "react";
import PropTypes from "prop-types";

export const Checkbox = (props) => {
  return (
    <React.Fragment>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.fieldId}
      >
        {props.label}
      </label>
      <input
        className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        id={props.fieldId}
        defaultChecked={props.entity[props.fieldId]}
        onChange={(e) =>
          props.onChange(props.fieldId, !props.entity[props.fieldId])
        }
        type="checkbox"
      />
    </React.Fragment>
  );
};

Checkbox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  entity: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
