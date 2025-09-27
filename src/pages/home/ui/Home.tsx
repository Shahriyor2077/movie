import { useMovie } from "@/entities/movie";
import { Hero } from "@/widgets/hero";
import { MovieList } from "@/widgets/movie-list";
import { Loading } from "@/shared/ui/Loading";
import { memo } from "react";

export const Home = memo(() => {
  const {getMovies} = useMovie()
  const {data, isLoading} = getMovies({ page: "1" })
  console.log(data);
  
  if (isLoading) return <Loading />;
  
  return <div>
    <Hero/>
    <MovieList movies={data?.results?.slice(0, 8)}/>
  </div>;
});


