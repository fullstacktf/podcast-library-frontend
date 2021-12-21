import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "services/settings";
import { setUserSession } from "services/authService";
import { useForm } from "react-hook-form";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Show from "animations/Show";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

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
        toast("Loading dashboard", {
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

  const onSubmit = () => {
    handleLogin();
  };

  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={2} mx={"auto"} maxW={"lg"}>
          <Show delay={0}>
            <Text fontSize={"4xl"}>{t("authPage.titleLogIn")}</Text>
          </Show>
          <Show delay={0.1}>
            <Box rounded={"lg"} p={8} border="1px" borderColor={borderColor}>
              <Stack spacing={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl id="email" isInvalid={!!errors?.email}>
                    <FormLabel>{t("authPage.Email")}</FormLabel>
                    <Input
                      {...register("email", {
                        required: `${t("validateRequired.Email")}`,
                      })}
                      type="email"
                      variant='filled'
                      borderColor={borderColor}
                      placeholder={t("authPage.Email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="password"
                    mt="16px"
                    isInvalid={!!errors?.password}
                  >
                    <FormLabel>{t("authPage.Password")}</FormLabel>
                    <Input
                      type="password"
                      {...register("password", {
                        required: `${t("validateRequired.Password")}`,
                      })}
                      variant='filled'
                      borderColor={borderColor}
                      placeholder={t("authPage.Password")}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Stack spacing={5} mt="16px">
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
                        type="submit"
                      >
                        {t("buttons.LogIn")}
                      </Button>
                    )}
                    {error && (
                      <Alert status="error" borderRadius={5}>
                        <AlertIcon />
                        <AlertTitle mr={2} fontWeight="light">
                          {error}
                        </AlertTitle>
                      </Alert>
                    )}
                  </Stack>
                </form>
              </Stack>
              <Flex mt="5">
                <Text>{t("authPage.NewAcc")}</Text>
                <Link to="/auth/register">
                  <Button
                    colorScheme="teal"
                    variant="link"
                    ml="2"
                    fontWeight="light"
                  >
                    {t("buttons.SignIn")}
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Show>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
