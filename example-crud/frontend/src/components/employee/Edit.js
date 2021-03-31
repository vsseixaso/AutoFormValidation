import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';
import { FormEmployee } from './Form';

export const EditEmployee = route => {
  let history = useHistory();

  const { employees, editEmployee } = useContext(GlobalContext);

  const [selectedEmployee, setSelectedEmployee] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });

  const currentEmployeeId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentEmployeeId;
    const selectedEmployee = employees.find(
      currentEmployee => currentEmployee.id === parseInt(employeeId)
    );
    setSelectedEmployee(selectedEmployee);
  }, [currentEmployeeId, employees]);

  const onSubmit = e => {
    e.preventDefault();
    editEmployee(selectedEmployee);
    history.push("/");
  };

  const handleOnChange = (employeeKey, newValue) =>
    setSelectedEmployee({ ...selectedEmployee, [employeeKey]: newValue });

  if (!selectedEmployee || !selectedEmployee.id) {
    return <div>Invalid Employee ID.</div>;
  }

  return (
    <FormEmployee
      employee={selectedEmployee}
      handleOnChange={handleOnChange}
      onSubmit={onSubmit}
    />
  );
};