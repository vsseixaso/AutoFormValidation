import { getRules } from "../services/rules";

export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "EDIT_EMPLOYEE":
      const updatedEmployee = action.payload;

      const updatedEmployees = state.employees.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });

      return {
        ...state,
        employees: updatedEmployees,
      };

    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "EMPLOYEE_RULES":
      return {
        ...state,
        rules: getRules(action.payload),
      };

    default:
      return state;
  }
}
