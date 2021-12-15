import { API_URL } from "./settings";

export function getPodcastByAuthor(author: string) {
  const apiURL = `${API_URL}/podcasts/author/${author}`;
  return fetch(apiURL).then((data) => data.json());
}