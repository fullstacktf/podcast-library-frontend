import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";

import { Helmet } from "react-helmet";
import ShowPodcasts from "components/Podcasts/showPodcasts";
import Show from "animations/Show";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Podcasts - Podbuster</title>
      </Helmet>
      <Box px={8} py={16}>
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: "center", md: "center" }}
        >
          <Show delay={0}>
            <chakra.h1
              mb={6}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
            >
              Escucha{" "}
              <Text
                display={{ base: "block", lg: "inline" }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, orange.400,#FFBD59)"
                fontWeight="extrabold"
              >
                podcasts
              </Text>{" "}
              dónde quieras, cuando quieras.
            </chakra.h1>
          </Show>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: "left", md: "center" }}
          >
            <Button
              as="a"
              variant="solid"
              colorScheme="brand"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
            <Button
              as="a"
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Book a Demo
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box p="3">
        <ShowPodcasts />
      </Box>
    </>
  );
};

export default Index;
