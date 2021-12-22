import React from "react";
import RegisterForm from "components/Auth/register";
import { Box, Stack, Text } from "@chakra-ui/react";
import Show from "animations/Show";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Box py={10} px={6}>
        <Stack spacing={2} mx={"auto"} maxW={"lg"}>
          <RegisterForm />
        </Stack>
      </Box>
    </>
  );
};

export default Login;
