import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import Card from "components/Card";

type PlayerResponse = {
  _id: number;
  title: string;
  image: string;
  provider: string;
  author: string;
};

const ShowPodcasts = () => {

  const apiURL = `${API_URL}/podcasts/all`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;
  if (error) return <Navigate to={`/404`} />;
 
  return (
    <>
      {data.map(({ _id, title, image, provider, author }) => (
        <Card
          key={_id}
          link={`/play/${_id}`}
          title={title}
          image={image}
          provider={provider}
          author={author}
        />
      ))}
    </>
  );
};

export default ShowPodcasts;
