import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ShowPodcastByAuthor from "components/Podcasts/showPodcastByAuthor";
import { Headphones, UserCircle } from "phosphor-react";
import Show from "animations/Show";

const Index = () => {
  const params = useParams();
  return (
    <>
      <Box mx="auto" overflow="hidden">
        <Flex alignItems="center" px={6} py={3} bg="#DCBF8E" color="black">
          <Icon as={UserCircle} h={9} w={9} />
          <Show delay={0}>
            <chakra.h1 mx={3} fontWeight="light" fontSize="4xl">
              {params.id}
            </chakra.h1>
          </Show>
        </Flex>
        <Box py={4} px={6}>
          <ShowPodcastByAuthor author={params.id} />
        </Box>
      </Box>
    </>
  );
};

export default Index;
