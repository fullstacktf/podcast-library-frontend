import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ShowPodcastByCategory from "components/Podcasts/showPodcastByCategory";
import { Hash, Headphones } from "phosphor-react";
import Show from "animations/Show";

const Index = () => {
  const params = useParams();
  return (
    <>
      <Box mx="auto" overflow="hidden">
        <Flex alignItems="center" px={6} py={3} bg="#DCBF8E" color="black">
          <Icon as={Hash} h={9} w={9} />
          <Show delay={0}>
            <chakra.h1 mx={3} fontWeight="light" fontSize="4xl">
              {params.id}
            </chakra.h1>
          </Show>
        </Flex>
        <Box py={4} px={6}>
          <ShowPodcastByCategory genre={params.id} />
        </Box>
      </Box>
    </>
  );
};

export default Index;
