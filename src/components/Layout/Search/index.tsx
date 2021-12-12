import React from "react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
const Index = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="Search"
            icon={<MagnifyingGlass size="24" />}
            bg="transparent"
            border="0"
            variant="outline"
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Search</PopoverHeader>
          <PopoverBody>
            Soon
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Index;
