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
import ShowCategories from "components/Podcasts/showCategories";
import Show from "animations/Show";
import { Link } from "react-router-dom";
import RegisterForm from "components/Auth/register";

const Index = () => {
  const color = useColorModeValue("black", "white");
  const bgHeader = useColorModeValue("#DCBF8E", "#1E1E1E");
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  return (
    <>
      <Helmet>
        <title>Podcasts - Podbuster</title>
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
            <chakra.h1
              mb={10}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              lineHeight={{ base: "shorter", md: "none" }}
              color={color}
            >
              Escucha podcasts dónde quieras, cuando quieras.
            </chakra.h1>
            <ShowCategories />
          </GridItem>
          <GridItem
            colSpan={{ base: "auto", md: 4 }}
            display={{ base: "none", md: "block" }}
          >
            <Box mb={6} p="2">
              <RegisterForm />
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
