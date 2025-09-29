import { memo } from "react";
import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { MoviePagination } from "../../../features/movie-pagination/ui/MoviePagination";
import { useSearchParams } from "react-router-dom";
import { MovieSort } from "@/features/movie-sort/ui/MovieSort";
import { MovieFilter } from "@/features/movie-sort/ui/MovieFilter";
import { MovieGenre } from "@/features/movie-sort/ui/MovieGenre";

import { useTranslation } from "react-i18next";
import { Loading } from "@/shared/ui/Loading";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort_by") ?? "popularity.desc";
  const release_date_from = searchParams.get("release_date_from") ?? undefined;
  const release_date_to = searchParams.get("release_date_to") ?? undefined;
  const with_genres = searchParams.get("with_genres") ?? undefined;
  const { data, isLoading } = getMovies({
    page,
    sort_by,
    release_date_from,
    release_date_to,
    with_genres,
  });

  if (isLoading) return <Loading />;

  return (
    <div className=" container my-5">
      <div className="container" >
        <h2 className="container" >
          {t("total")} : {data?.total_results?.toLocaleString()}
        </h2>
      </div>
      <MovieSort />
      <MovieFilter />
      <MovieGenre />
      <MovieList movies={data?.results} />
      <MoviePagination page={page} total_pages={data?.total_pages ?? 0} />
    </div>
  );
});
