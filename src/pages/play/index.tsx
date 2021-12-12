import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";
import ShowSinglePodcast from "components/Podcasts/showSinglePodcast";
import { useParams } from "react-router-dom";

const Index: React.FC = (): JSX.Element => {
  const params = useParams();
  return (
    <>
      <Helmet>
        <title>Podcasts - Podbuster</title>
      </Helmet>
      <ShowSinglePodcast id={`${params.id}`} />
    </>
  );
};

export default Index;
