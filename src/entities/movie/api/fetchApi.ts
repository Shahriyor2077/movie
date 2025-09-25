import { api } from "@/shared/api";
import type { ImovieParams } from "../model/types";

export const fetchMovies = async (
  page: ImovieParams["page"],
  sort_by?: ImovieParams["sort_by"],
  release_date_from? : ImovieParams["release_date_from"],
  release_date_to? : ImovieParams["release_date_to"],
) => {
  const response = api.get("discover/movie", {
    params: {
      without_genres: "18,36,27,10402,10749",
      with_genres: "16",
      page,
      sort_by,
      release_date_from,
      release_date_to,
    },
  });
  return (await response).data;
  
};


export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieInfo = async (id: string, path: string) => {
  const response = await api.get(`/movie/${id}/${path}`);
  return response.data;
};