import { CrewView, useCrew } from "@/entities/crew";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useParams } from "react-router-dom";

export const CrewDetail = memo(() => {
  const { id } = useParams();
  const { getCrewsMoviesById } = useCrew();
  const { data: movies } = getCrewsMoviesById(id as string);
  console.log(movies?.cast);
  return (
    <div>
      <CrewView />
      <MovieList movies={movies?.cast}/>
    </div>
  );
});
