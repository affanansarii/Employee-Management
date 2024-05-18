import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk' 
import authReducer from "./reducers/authReducer";
import employeeReducer from "./reducers/employeeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
