import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { PlayCircle } from "phosphor-react";

interface CardProps {
  link: string;
  key: number;
  image: string;
  title: string;
  provider: string;
  author: string;
}

const Index: FC<CardProps> = (props) => {
  const muted = useColorModeValue("gray.600", "gray.600");
  const color = useColorModeValue("black", "white");
  const border = useColorModeValue("gray.100", "#1A202C");
  return (
    <>
      <Link to={props.link}>
        <Box
          key={props.key}
          color={color}
          mb="3"
          cursor="pointer"
          _hover={{ backgroundColor: border }}
        >
          <Flex alignItems="center" px={6} py={3}>
            <Icon as={PlayCircle} h={6} w={6} />
            <chakra.h1 mx={3} fontWeight="light" fontSize="lg">
              {props.title}
            </chakra.h1>
          </Flex>
          <Box px={6} pb="3">
            <chakra.h1 fontSize="sm" fontWeight="light" color={muted}>
              by {props.author} | Uploaded to {props.provider}
            </chakra.h1>
          </Box>
        </Box>
      </Link>
    </>
  );
}

export default Index;
