import React from "react";
import { Helmet } from "react-helmet";
import { Box, Divider } from "@chakra-ui/react";
import ShowSinglePodcast from "components/Podcasts/showSinglePodcast";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Index: React.FC = (): JSX.Element => {
  const params = useParams();
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Box p={{ base: 0, md: "3" }}>
        <ShowSinglePodcast id={`${params.id}`} />
        <Divider mt="3"/>
      </Box>
    </>
  );
};

export default Index;
