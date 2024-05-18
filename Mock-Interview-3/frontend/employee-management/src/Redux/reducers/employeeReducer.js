const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES-SUCCESS":
      return { ...state, employees: action.payload, loading: false };
    case "ADD_EMPLOYEE_SUCCESS":
      return { ...state, employees: [...state.employees, action.payload] };
    case "UPDATE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    case "DELETE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;
