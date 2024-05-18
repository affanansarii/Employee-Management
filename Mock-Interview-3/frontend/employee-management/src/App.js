import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AuthForm from "./Components/AuthForm";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
