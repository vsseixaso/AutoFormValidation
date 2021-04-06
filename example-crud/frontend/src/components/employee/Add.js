import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';
import { FormEmployee } from './Form';

export const AddEmployee = () => {
  let history = useHistory();

  const { addEmployee, employees } = useContext(GlobalContext);

  const [newEmployee, setNewEmployee] = useState({
    id: employees.length + 1,
    name: "",
    birthday: "",
    gender: "",
    height: "",
    weight: "",
    has_children: false,
  });

  const onSubmit = e => {
    e.preventDefault();
    addEmployee(newEmployee);
    history.push("/");
  };

  const handleOnChange = (employeeKey, newValue) =>
    setNewEmployee({ ...newEmployee, [employeeKey]: newValue });

  return (
    <FormEmployee
      employee={newEmployee}
      handleOnChange={handleOnChange}
      onSubmit={onSubmit}
    />
  );
};