import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "services/settings";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
  Collapse,
  FormErrorMessage,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Show from "animations/Show";
import confetti from "canvas-confetti";

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleRegister = () => {
    setError(null);
    setLoading(true);
    axios
      .post(`${API_URL}/user/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        onOpen();
        confetti();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  };

  const onSubmit = () => {
    handleRegister();
  };

  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={2} mx={"auto"} maxW={"lg"} py={10} px={6}>
          <Show delay={0}>
            <Text fontSize={"4xl"}>{t("authPage.titleSignIn")}</Text>
          </Show>
          <Show delay={0.1}>
            <Box rounded={"lg"} p={8} border="1px" borderColor={borderColor}>
              <Stack spacing={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Collapse in={isOpen} animateOpacity>
                    <Box
                      p="20px"
                      color="black"
                      mb="5"
                      bg="#FFBD59"
                      rounded="md"
                    >
                      <Text fontSize="20px">🎉 ¡Bienvenido a Podbuster!</Text>
                      <Text mb="2">
                        Tu cuenta ha sido creada correctamente.
                      </Text>
                      <Link to="/auth">
                        <Button
                          variant="ghost"
                          fontWeight="light"
                          border="1px"
                          w="100%"
                          color="black"
                          borderColor="black"
                        >
                          {t("buttons.LogIn")}
                        </Button>
                      </Link>
                    </Box>
                  </Collapse>
                  <FormControl id="username" isInvalid={!!errors?.username}>
                    <FormLabel>{t("authPage.Username")}</FormLabel>
                    <Input
                      id="username"
                      {...register("username", {
                        required: `${t("validateRequired.Username")}`,
                      })}
                      type="text"
                      placeholder={t("authPage.Username")}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormErrorMessage>
                      {errors.username && errors.username.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl id="email" mt="16px" isInvalid={!!errors?.email}>
                    <FormLabel>{t("authPage.Email")}</FormLabel>
                    <Input
                      id="email"
                      {...register("email", {
                        required: `${t("validateRequired.Email")}`,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
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
                      id="password"
                      type="password"
                      {...register("password", {
                        required: `${t("validateRequired.Password")}`,
                        minLength: {
                          value: 6,
                          message: `${t("validateRequired.PasswordCharacters")}`,
                        },
                      })}
                      placeholder={t("authPage.PlacePassword")}
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
                        {t("buttons.SignIn")}
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
                <Text>{t("authPage.AlreadyAcc")}</Text>
                <Link to="/auth/login">
                  <Button
                    colorScheme="teal"
                    variant="link"
                    ml="2"
                    fontWeight="light"
                  >
                    {t("buttons.LogIn")}
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

export default Register;
