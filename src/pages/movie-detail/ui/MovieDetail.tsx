import {  useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { Loading } from "@/shared/ui/Loading";
import { memo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { MovieInfo } from "../../../entities/movie/ui/detail/MovieInfo";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data, isLoading } = getMovieInfo(id as string, "similar");

  if (isLoading) return <Loading />;

  return (
    <div>
      <MovieInfo id={id as string} />
      <Outlet/>
      <MovieList movies={data?.results?.slice(0, 4)} />
    </div>
  );
});
