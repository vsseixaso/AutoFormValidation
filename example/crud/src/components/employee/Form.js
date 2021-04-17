import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Gender from "../../constants/gender";
import { getRules } from "../../services/rules";
import validateField from "../../utils/validateField";
import { Checkbox } from "../form/Checkbox";
import { Input } from "../form/Input";
import { InputNumber } from "../form/InputNumber";
import { InputNumberDecimal } from "../form/InputNumberDecimal";
import { Select } from "../form/Select";

export const FormEmployee = (props) => {
  const { employee, handleOnChange, onSubmit } = props;

  const [rules, setRules] = useState({});

  useEffect(() => {
    async function invokeRules() {
      setRules(await getRules("employees"));
    }
    invokeRules();
  }, []);

  const handleOnChangeWithValidate = async (field, value) => {
    validateField(rules[field], value);

    handleOnChange(field, value);
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-10 mb-10 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <Input
              label={"Name"}
              fieldId={"name"}
              onChange={handleOnChangeWithValidate}
              entity={employee}
              inputType={"text"}
            ></Input>
          </div>
          <div className="w-full  mb-5">
            <Input
              label={"Birthday"}
              fieldId={"birthday"}
              onChange={handleOnChange}
              entity={employee}
              inputType={"date"}
            ></Input>
          </div>
          <div className="w-full mb-5">
            <Select
              label={"Gender"}
              fieldId={"gender"}
              onChange={handleOnChange}
              entity={employee}
              options={Gender}
            />
          </div>
          <div className="w-full mb-5">
            <InputNumber
              label={"Height (cm)"}
              fieldId={"height"}
              onChange={handleOnChange}
              entity={employee}
            ></InputNumber>
          </div>
          <div className="w-full mb-5">
            <InputNumberDecimal
              label={"Weight (KG)"}
              fieldId={"weight"}
              onChange={handleOnChange}
              entity={employee}
              step={0.05}
            ></InputNumberDecimal>
          </div>
          <div className="w-full mb-5">
            <Checkbox
              className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              label={"Has Children?"}
              fieldId={"has_children"}
              onChange={handleOnChange}
              entity={employee}
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
