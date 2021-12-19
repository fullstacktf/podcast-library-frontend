import React, { FC } from "react";
import { Helmet } from "react-helmet";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  AspectRatio,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";
import { User } from "phosphor-react";
import Show from "animations/Show";
import { Link } from "react-router-dom";

interface PlayerProps {
  image: string;
  title: string;
  genre: string;
  description: string;
  provider: string;
  author: string;
  language: string;
  url: string;
}

const Player: FC<PlayerProps> = (props) => {
  const border = useColorModeValue("gray.300", "#616161");
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Box>
          <AspectRatio ratio={21 / 9}>
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              url={`${props.url}`}
            />
          </AspectRatio>
        </Box>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, lg: 16 }}
          py={5}
        >
          <Show delay={0.2}>
            <Stack direction="row" mb="4">
              <Badge fontWeight="light">{props.provider}</Badge>
              <Badge fontWeight="light">{props.genre}</Badge>
              <Badge fontWeight="light">{props.language}</Badge>
            </Stack>
          </Show>
          <Show delay={0}>
            <chakra.h1
              mb={2}
              fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
            >
              {props.title}
            </chakra.h1>
          </Show>
          <chakra.p pr={{ base: 0, lg: 16 }} mt="4" mb="4" fontSize="sm">
            {props.description}
          </chakra.p>
          <Flex>
            <Show delay={0.2}>
              <Link to={`/author/${props.author}`}>
                <Button
                  leftIcon={<User />}
                  borderLeft="1px"
                  borderRadius="0"
                  borderColor={border}
                  variant="ghost"
                  fontWeight="light"
                  w="100%"
                >
                  {props.author}
                </Button>
              </Link>
            </Show>
          </Flex>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Player;
