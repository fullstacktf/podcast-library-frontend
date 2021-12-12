import React, { useState, useEffect } from "react";
import { getAllPodcast } from "services/getAllPodcast";
import Card from "components/Card";

const ShowPodcasts = () => {
  const [podcasts, setpodcasts] = useState([]);

  useEffect(function () {
    const controller = new AbortController();
    getAllPodcast()
      .then(setpodcasts)
      .catch((err) => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      {podcasts.map(({ _id, title, image, provider, author }) => (
        <Card
          key={_id}
          link={`play/${_id}`}
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
