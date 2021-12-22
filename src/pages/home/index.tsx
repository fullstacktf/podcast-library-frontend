import React from "react";
import {
  chakra,
  Box,
  GridItem,
  useColorModeValue,
  Button,
  Stack,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  VisuallyHidden,
  Input,
  Divider,
  Image,
  HStack,
} from "@chakra-ui/react";

import { Helmet } from "react-helmet";
import ShowPodcasts from "components/Podcasts/showPodcasts";
import UserAuthenticated from "components/Auth/userAuthenticated";
import ShowCategories from "components/Podcasts/showCategories";
import RegisterForm from "components/Auth/register";
import Show from "animations/Show";
import { useTranslation } from "react-i18next";
import { getToken } from "services/authService";

const Index = () => {
  const color = useColorModeValue("black", "white");
  const bgHeader = useColorModeValue("#DCBF8E", "#1E1E1E");
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Helmet>
        <title>Inicio - Podbuster</title>
      </Helmet>
      <Box
        px={8}
        py={5}
        mx="auto"
        bg={bgHeader}
        borderBottom="1px"
        borderColor={borderColor}
      >
        <SimpleGrid
          alignItems="center"
          w={{ base: "full", xl: 11 / 12 }}
          columns={{ base: 1, lg: 11 }}
          mx="auto"
        >
          <GridItem
            colSpan={{ base: "auto", lg: 7 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Show delay={0}>
              <chakra.h1
                mb={10}
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                lineHeight={{ base: "shorter", md: "none" }}
                color={color}
              >
                {t("homePage.title")}
              </chakra.h1>
            </Show>
            <ShowCategories />
          </GridItem>
          <GridItem
            colSpan={{ base: "auto", md: 4 }}
            display={{ base: "none", md: "none", lg: "block" }}
          >
            <Box mb={6} p="2">
              {getToken() ? <UserAuthenticated /> : <RegisterForm />}
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box p="3">
        <ShowPodcasts />
      </Box>
    </>
  );
};

export default Index;
