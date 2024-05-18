import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { login } from "../Redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const toast = useToast();

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const url = isLogin ? "/api/login" : "/api/signup";

    const data = isLogin ? { email, password } : { email, password };

    try {
      const res = await axios.post(url, data);

      if (isLogin) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        dispatch(login(email, password));

        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        navigate("/dashboard");
      } else {
        toast({
          title: "Signup Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        toggleForm();
      }
    } catch (error) {
      toast({
        title: "Invalid creadentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={6} rounded="md" shadow="md">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormControl>
      {!isLogin && (
        <FormControl mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormControl>
      )}
      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
        {isLogin ? "Login" : "Signup"}
      </Button>
      <Switch mt={4} onChange={toggleForm}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </Switch>
    </Box>
  );
};

export default AuthForm;
