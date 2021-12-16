import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "services/settings";
import { setUserSession } from "services/authService";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const navigate = useNavigate();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post(`${API_URL}/user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.date.token);
        toast("Welcome", {
          icon: "✅",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          console.log("Error.");
        }
      });
  };

  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>{t("authPage.title")}</Heading>
          </Stack>
          <Box rounded={"lg"} p={8} border="1px" borderColor={borderColor}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>{t("authPage.Email")}</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>{t("authPage.Password")}</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={5}>
                {loading ? (
                  <Button
                    isLoading
                    loadingText="Loading"
                    spinnerPlacement="start"
                    border="1px"
                    borderColor={borderColor}
                    fontWeight="light"
                  >
                    Loading...
                  </Button>
                ) : (
                  <Button
                    border="1px"
                    borderColor={borderColor}
                    fontWeight="light"
                    onClick={handleLogin}
                  >
                    {t("buttons.SignIn")}
                  </Button>
                )}
                {error && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle mr={2} fontWeight="light">
                    {error}
                  </AlertTitle>
                </Alert>
              )}
              </Stack>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
