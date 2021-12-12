import React from "react";
import { Helmet } from "react-helmet";
import { Box, Divider } from "@chakra-ui/react";
import ShowSinglePodcast from "components/Podcasts/showSinglePodcast";
import { useParams } from "react-router-dom";

const Index: React.FC = (): JSX.Element => {
  const params = useParams();
  return (
    <>
      <Helmet>
        <title>Podcasts - Podbuster</title>
      </Helmet>
      <Box p="3">
        <ShowSinglePodcast id={`${params.id}`} />
        <Divider mt="3"/>
      </Box>
    </>
  );
};

export default Index;
