import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("/api/login", { email, password });
    const token = res.data.token;
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN_SUCCESS", payload: token });
  } catch (error) {
    alert("Invalid credentials");
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
