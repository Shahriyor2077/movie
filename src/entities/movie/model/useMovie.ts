import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchMovieById, fetchMovieInfo } from "../api/fetchApi";

export const useMovie = () => {
  // SuccessType, ErrorType
  const getMovies = () =>
    useQuery<any, any>({
      queryKey: ["movieKey"], // deps
      queryFn: fetchMovies,
      retry: 0,
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
