import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "../Redux/actions/employeeActions";
import { logout } from "../Redux/actions/authActions";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleAddEmployee = (employee) => {
    dispatch(addEmployee(employee));
  };

  const handleUpdateEmployee = (employee) => {
    dispatch(updateEmployee(employee));
    onClose();
  };

  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    onOpen();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box p={6}>
      <Button colorScheme="teal" onClick={onOpen}>
        Add Employee
      </Button>
      <Button ml={4} colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
      <EmployeeTable
        employees={employees}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteEmployee}
      />
      {isOpen && (
        <EmployeeForm
          employee={selectedEmployee}
          onClose={onClose}
          onSave={selectedEmployee ? handleUpdateEmployee : handleAddEmployee}
        />
      )}
    </Box>
  );
};

export default Dashboard;
