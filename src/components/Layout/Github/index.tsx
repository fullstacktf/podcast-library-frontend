import React from "react";
import { Link, IconButton } from "@chakra-ui/react";
import Github from "icons/github";

const Index = () => {
  return (
    <>
      <Link href="https://github.com/fullstacktf/podcast-library-frontend/" isExternal>
        <IconButton
          aria-label="Search"
          icon={<Github size="24" />}
          bg="transparent"
          border="0"
          variant="outline"
        />
      </Link>
    </>
  );
};

export default Index;
