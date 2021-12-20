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
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Mis podcasts
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
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
