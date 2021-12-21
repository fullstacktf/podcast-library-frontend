import React, { FC, useState, useEffect } from "react";
import { Container, SimpleGrid } from '@chakra-ui/react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import Card from "components/Card/Large";

interface PodcastProp {
  genre?: string;
}

type PlayerResponse = {
  _id: number;
  title: string;
  image: string;
  provider: string;
  author: string;
  description: string;
};

const ShowPodcastByCategory: FC<PodcastProp> = (props) => {
  const apiURL = `${API_URL}/podcasts/genre/${props.genre}`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;
  if (error) return <Navigate to={`/404`} />;
  console.log(data);

  return data ? (
    <>
      <Container maxW="100%">
        <SimpleGrid minChildWidth="300px" columns={4} spacing={5}>
          {data.map((data) => (
            <Card
              title={data.title}
              image={data.image}
              provider={data.provider}
              description={data.description}
              author={data.author}
              key={data._id}
              link={`/play/${data._id}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  ) : (
    <Loader />
  );
};

export default ShowPodcastByCategory;
