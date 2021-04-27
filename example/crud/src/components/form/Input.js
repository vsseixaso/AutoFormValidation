import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <React.Fragment>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.fieldId}
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id={props.fieldId}
        value={props.entity[props.fieldId]}
        onChange={(e) => props.onChange(props.fieldId, e.target.value)}
        type={props.inputType}
        placeholder={`Enter ${props.fieldId}`}
        step={props.inputType === 'number' ? props.step || 0.01 : undefined}
        // validate={true}
      ></input>
      <div
        id={`errors-${props.fieldId}`}
        className="text-xs text-red-500"
      ></div>
    </React.Fragment>
  );
};

Input.propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  entity: PropTypes.object.isRequired,
  inputType: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
