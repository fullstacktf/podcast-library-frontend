import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Index() {
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bg="#C59449"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={5}>
        The page you're looking for does not seem to exist
      </Text>
      <Link to="/">
        <Button
          variant="ghost"
          fontWeight="light"
          border="1px"
          borderColor={borderColor}
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
