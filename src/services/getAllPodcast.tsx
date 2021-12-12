import { API_URL } from "./settings";

export function getAllPodcast() {
  const apiURL = `${API_URL}/podcasts/all`;
  return fetch(apiURL).then((data) => data.json());
}
