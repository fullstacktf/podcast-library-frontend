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
import Dark from "components/Layout/Dark";
import Github from "components/Layout/Github";
import Lang from "components/Layout/Lang";

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
          <PopoverHeader>Settings</PopoverHeader>
          <PopoverBody>
            <Dark />
            <Github />
            <Lang />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Index;
