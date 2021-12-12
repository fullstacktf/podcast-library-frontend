import { API_URL } from "./settings";

export function getSinglePodcast(id: string) {
  const apiURL = `${API_URL}/podcasts/${id}`;
  return fetch(apiURL).then((data) => data.json());
}
