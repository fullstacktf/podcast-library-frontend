import React, { FC } from "react";
import { Box, Center, Divider, Text } from "@chakra-ui/react";
import Player from "components/Player";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSingleData";
import Loader from "animations/Loader";
import ShowPodcastByCategory from "components/Podcasts/showPodcastByCategory";

type PlayerResponse = {
  title: string;
  image: string;
  genre: string;
  provider: string;
  description: string;
  author: string;
  url: string;
  language: string;
};

const Index: FC = () => {
  const params = useParams();
  const apiURL = `${API_URL}/podcasts/${params.id}`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;

  if (error) return <Navigate to={`/404`} />;

  return data ? (
    <>
      <Box p={{ base: "0", md: "3" }}>
        <Player
          title={data?.title}
          image={data?.image}
          genre={data?.genre}
          provider={data?.provider}
          description={data?.description}
          author={data?.author}
          url={data?.url}
          language={data?.language}
        />
        <Divider mt="3" mb="4"/>
        <Center mb="3">
          <Text fontSize="4xl" mt="2">
            Más de {data?.genre}
          </Text>
        </Center>
        <ShowPodcastByCategory genre={data?.genre} />
      </Box>
    </>
  ) : (
    <Loader />
  );
};

export default Index;
