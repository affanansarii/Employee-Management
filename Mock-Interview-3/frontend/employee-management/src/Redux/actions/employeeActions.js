import axios from "axios";

export const fetchEmployees =
  (page = 1) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`/api/employees?page=${page}`);

      dispatch({ type: "FETCH_EMPLOYEES_SUCCESS", payload: res.data });
    } catch (error) {
      alert("Something went wrong");
    }
  };

export const addEmployee = (employee) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/employees`, employee);

    dispatch({ type: "ADD_EMPLOYEE_SUCCESS", payload: res.data });
  } catch (error) {
    alert("Something went wrong");
  }
};

export const updateEmployee = (employee) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/employees/${employee.id}`, employee);

    dispatch({ type: "UPDATE_EMPLOYEE_SUCCESS", payload: res.data });
  } catch (error) {
    alert("Something went wrong");
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/employees/${id}`);

    dispatch({ type: "DELETE_EMPLOYEE_SUCCESS", payload: id });
  } catch (error) {
    alert("Something went wrong");
  }
};
