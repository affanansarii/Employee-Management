import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const EmployeeTable = ({ employees, onEditClick, onDeleteClick }) => {
  return (
    <Table varient="simple" mt={4}>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Salary</Th>
          <Th>Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>

      <Tbody>
        {employees.map((employee) => (
          <Tr key={employee.id}>
            <Td>{employee.id}</Td>
            <Td>{employee.firstName}</Td>
            <Td>{employee.lastName}</Td>
            <Td>{employee.email}</Td>
            <Td>{employee.salary}</Td>
            <Td>{employee.date}</Td>
            <Td>
              <Button
                colorScheme="blue"
                size="sm"
                onClick={() => onEditClick(employee)}
              >
                Edit
              </Button>

              <Button
                colorScheme="red"
                size="sm"
                ml={2}
                onClick={() => onDeleteClick(employee.id)}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EmployeeTable;
