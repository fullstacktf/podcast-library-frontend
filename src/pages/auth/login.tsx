import React from "react";
import LoginForm from "components/Auth/login";
import { Box } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Box py={10} px={6}>
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
