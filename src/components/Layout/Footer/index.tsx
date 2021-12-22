import React from "react";
import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <Box>
        <Container
          as={Stack}
          maxW="100%"
          borderRadius={1}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Center>
            <Text>&copy; Podbuster</Text>
          </Center>
        </Container>
      </Box>
    </>
  );
};

export default Index;
