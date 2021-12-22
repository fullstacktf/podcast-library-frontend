import React from "react";
import { Button, Stack } from '@chakra-ui/react';

const UserAuthenticated = () => {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
      </Stack>
    </>
  );
};

export default UserAuthenticated;
