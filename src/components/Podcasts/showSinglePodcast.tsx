import React, { FC, useState, useEffect } from "react";
import { getSinglePodcast } from "services/getSinglePodcast";
import Player from "components/Player";

interface PodcastProp {
  id: string;
}

interface Provider {
  _id: number;
  author: string;
  description: string;
  episode: number;
  genre: string;
  image: string;
  language: string;
  provider: string;
  title: string;
  url: string;
}

const ShowSinglePodcast: FC<PodcastProp> = (props) => {
  const [singlePodcasts, setsinglePodcasts] = useState<Provider[]>([]);

  useEffect(function () {
    const controller = new AbortController();
    getSinglePodcast(props.id)
      .then(setsinglePodcasts)
      .catch((err) => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      {singlePodcasts.map(
        ({ _id, language, title, genre, image, provider, description, author, url }) => (
          <Player
            key={_id}
            link={`play/${_id}`}
            title={title}
            image={image}
            genre={genre}
            provider={provider}
            description={description}
            author={author}
            url={url}
            language={language}
          />
        )
      )}
    </>
  );
};

export default ShowSinglePodcast;
