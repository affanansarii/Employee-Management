import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const EmployeeForm = ({ employee, onClose, onSave }) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
  });

  useEffect(() => {
    if (employee) {
      setFormState(employee);
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{employee ? "Edit Employee" : "Add Employee"}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Salary</FormLabel>
            <Input
              name="salary"
              value={formState.salary}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>

          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmployeeForm;
