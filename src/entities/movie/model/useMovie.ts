import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchMovieById, fetchMovieInfo } from "../api/fetchApi";
import type { ImovieParams } from "./types";

export const useMovie = () => {
  const getMovies = (params: ImovieParams) =>
    useQuery<any, any>({
      queryKey: [
        "movieKey",
        params.page,
        params.sort_by ?? "",
        params.release_date_from ?? "",
        params.release_date_to ?? "",
      ],
      queryFn: () =>
        fetchMovies(
          params.page,
          params.sort_by,
          params.release_date_from,
          params.release_date_to
        ),
      retry: 0,
      refetchOnWindowFocus: false,
      gcTime: 1000*60*10,
      staleTime: 1000*60
    });

    
  // // SuccessType, ErrorType, BodyType
  // useMutation<any, any,any>({
  //     mutationFn: (body)
  // })

  const getMovieById = (id: string) =>
    useQuery({
      queryKey: ["movieKey", id],
      queryFn: () => fetchMovieById(id),
    });

    const getMovieInfo = (id: string, path: string) =>
      useQuery({
        queryKey: ["movieKey", id, path],
        queryFn: () => fetchMovieInfo(id, path),
      });

  return { getMovies, getMovieById, getMovieInfo };
};
