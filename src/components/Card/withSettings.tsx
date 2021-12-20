import React, { FC } from "react";
import { Box, Text, HStack, Button } from "@chakra-ui/react";
import { Broadcast } from "phosphor-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowSquareOut } from "phosphor-react";

interface CardProps {
  link: string;
  key: number;
  image: string;
  title: string;
  description: string;
  provider: string;
  author: string;
}

const WithSettings: FC<CardProps> = (props) => {
  return (
    <>
      <Box
        maxW="100%"
        mb="2"
        borderWidth="1px"
        overflow="hidden"
        _hover={{ borderColor: "#e2a851" }}
      >
        <Box p="6">
          <Box mb="2">
            <Broadcast size="25" />
          </Box>
          <Text
            fontSize="2xl"
            lineHeight="tight"
            mb="4"
            isTruncated
            title={props.title}
          >
            {props.title}
          </Text>
          <Box>
            <HStack>
              <Link to={props.link}>
                <Button fontWeight="light" rightIcon={<ArrowSquareOut />}>Ver podcast</Button>
              </Link>
              <Button fontWeight="light">Twitter</Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WithSettings;
