import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";
import ShowPodcasts from "components/Podcasts/showPodcasts";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Podcasts - Podbuster</title>
      </Helmet>
      <Box p="3">
          <ShowPodcasts />
      </Box>
    </>
  );
};

export default index;
