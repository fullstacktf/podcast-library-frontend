import React, { FC, useState, useEffect } from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import Card from "components/Card";

interface PodcastProp {
  genre: string;
}

type PlayerResponse = {
  _id: number;
  title: string;
  image: string;
  provider: string;
  author: string;
};

const ShowPodcastByCategory: FC<PodcastProp> = (props) => {
  const apiURL = `${API_URL}/podcasts/genre/${props.genre}`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;
  if (error) return <Navigate to={`/404`} />;
  console.log(data);

  return data ? (
    <>
      {data.map((data) => (
        <Card
          title={data.title}
          image={data.image}
          provider={data.provider}
          author={data.author}
          key={data._id}
          link={`/play/${data._id}`}
        />
      ))}
    </>
  ) : (
    <Loader />
  );
};

export default ShowPodcastByCategory;
