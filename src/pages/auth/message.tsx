import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface MessageProps {
  title: string;
}

const Message = (data: MessageProps) => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle mr={2} fontWeight="light">
          {data}
        </AlertTitle>
      </Alert>
    </>
  );
};

export default Message;
