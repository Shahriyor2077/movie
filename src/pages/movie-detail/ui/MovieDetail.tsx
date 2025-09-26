import {  useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { MovieInfo } from "../../../entities/movie/ui/detail/MovieInfo";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data } = getMovieInfo(id as string, "similar");

  return (
    <div>
      <MovieInfo id={id as string} />
      <Outlet/>
      <MovieList movies={data?.results?.slice(0, 4)} />
    </div>
  );
});
