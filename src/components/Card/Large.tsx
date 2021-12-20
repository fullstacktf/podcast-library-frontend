import React, { FC } from "react";
import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { Broadcast } from "phosphor-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CardProps {
  link: string;
  key: number;
  image: string;
  title: string;
  description: string;
  provider: string;
  author: string;
}

const Large: FC<CardProps> = (props) => {
  return (
    <>
      <Link to={props.link}>
        <motion.div whileHover={{ scale: 1.020 }} whileTap={{ scale: 1 }}>
          <Box
            maxW="sm"
            borderWidth="1px"
            overflow="hidden"
            _hover={{ borderColor: "#e2a851" }}
            cursor="pointer"
          >
            <Box p="6">
              <Box mb="2">
                <Broadcast size="25" />
              </Box>
              <Text
                fontSize="2xl"
                lineHeight="tight"
                isTruncated
                title={props.title}
              >
                {props.title}
              </Text>
              <Box>{props.author}</Box>
            </Box>
          </Box>
        </motion.div>
      </Link>
    </>
  );
};

export default Large;
