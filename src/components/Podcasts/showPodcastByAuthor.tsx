import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import Card from "components/Card";

interface PodcastProp {
  author?: string;
}

type PlayerResponse = {
  _id: number;
  title: string;
  image: string;
  provider: string;
  author: string;
};

const ShowPodcastByAuthor: FC<PodcastProp> = (props) => {
  const apiURL = `${API_URL}/podcasts/author/${props.author}`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;
  if (error) return <Navigate to={`/404`} />;

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

export default ShowPodcastByAuthor;