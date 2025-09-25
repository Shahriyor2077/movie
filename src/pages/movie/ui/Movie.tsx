import { memo } from "react";
import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { MoviePagination } from "../../../features/movie-pagination/ui/MoviePagination";
import { useSearchParams } from "react-router-dom";
import { MovieSort } from "@/features/movie-sort/ui/MovieSort";
import { MovieFilter } from "@/features/movie-sort/ui/MovieFilter";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort_by") ?? "popularity.desc";
  const release_date_from = searchParams.get("release_date_from") ?? undefined;
  const release_date_to = searchParams.get("release_date_to") ?? undefined;
  const { data } = getMovies({ page, sort_by, release_date_from, release_date_to });
  return (
    <div className="About">
      <h2>Total: {data?.total_results?.toLocaleString()}</h2>
      <MovieSort />
      <MovieFilter />
      <MovieList movies={data?.results} />
      <MoviePagination page={page} total_pages={data?.total_pages ?? 0} />
    </div>
  );
});
