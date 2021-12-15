import React, { FC, useState, useEffect } from "react";
import { getPodcastByAuthor } from "services/getPodcastByAuthor";
import Card from "components/Card";

interface PodcastProp {
  author: string;
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

const ShowAuthorPodcast: FC<PodcastProp> = (props) => {
  const [singlePodcasts, setsinglePodcasts] = useState<Provider[]>([]);

  useEffect(function () {
    const controller = new AbortController();
    getPodcastByAuthor(props.author)
      .then(setsinglePodcasts)
      .catch((err) => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      {singlePodcasts.map(
        ({ _id, title, image, provider, author}) => (
          <Card
          key={_id}
          link={`/play/${_id}`}
          title={title}
          image={image}
          provider={provider}
          author={author}
          />
        )
      )}
    </>
  );
};

export default ShowAuthorPodcast;
