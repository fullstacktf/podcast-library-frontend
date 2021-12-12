import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";
import ShowPodcasts from "components/Podcasts/showPodcasts";
import Show from "components/Animate/show";
const index = () => {
  return (
    <>
      <Helmet>
        <title>Podcasts - Podbuster</title>
      </Helmet>
      <Box p="3">
        <Show delay={0.1}>
          <ShowPodcasts />
        </Show>
      </Box>
    </>
  );
};

export default index;
