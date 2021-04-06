import React from "react";
import { Link } from 'react-router-dom';

import Gender from '../../constants/gender';

export const FormEmployee = props => {
	const { employee, handleOnChange } = props;
  
  const onSubmit = e => {
    console.log(employee)
    props.onSubmit(e)
  }

	return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-10 mb-10 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              id="name"
              value={employee.name}
              onChange={e => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="birthday"
            >
              Birthday
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              id="birthday"
              value={employee.birthday}
              onChange={e => handleOnChange("birthday", e.target.value)}
              type="date"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              id="gender"
              value={employee.gender}
              onChange={e => handleOnChange("gender", e.target.value)}
            >
              {Object.keys(Gender).map(key => <option id={key} value={key}>{Gender[key]}</option>)}
            </select>
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="height"
            >
              Height (cm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              id="height"
              value={employee.height}
              onChange={e => handleOnChange("height", e.target.value)}
              type="number"
              placeholder="Enter height"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="weight"
            >
              Weight (Kg)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              id="weight"
              value={employee.weight}
              onChange={e => handleOnChange("weight", e.target.value)}
              type="number"
              step="0.01"
              placeholder="Enter weight"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="has_children"
            >
              Has Children?
            </label>
            <input
              className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              id="has_children"
              defaultChecked={employee.has_children}
              onChange={e => handleOnChange("has_children", !employee.has_children)}
              type="checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Submit
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};