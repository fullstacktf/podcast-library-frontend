import React, { FC, useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import Card from "components/Card/withSettings";

interface PodcastProp {
  author?: string;
}

type PlayerResponse = {
  _id: string;
  title: string;
  image: string;
  provider: string;
  author: string;
  description: string;
};

const ShowPodcastByUser: FC<PodcastProp> = (props) => {
  const apiURL = `${API_URL}/podcasts/author/${props.author}`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;
  if (error) return <Navigate to={`/404`} />;

  return data ? (
    <>
      {data.map((data) => (
        <Card
          id={data._id}
          title={data.title}
          description={data.description}
          image={data.image}
          provider={data.provider}
          author={data.author}
          link={`/play/${data._id}`}
        />
      ))}
    </>
  ) : (
    <Loader />
  );
};

export default ShowPodcastByUser;
