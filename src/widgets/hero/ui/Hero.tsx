import { memo } from "react";
import { Swipers } from "@/entities/swiper";
import { useMovie } from "../../../entities/movie";
import { Loading } from "@/shared/ui/Loading";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data, isLoading } = getMovies({ page: "1" });
  
  if (isLoading) return <Loading />;
  
  return (
    <div className="container mb-14 ">
      <Swipers data={data?.results?.slice(0, 6)} />
    </div>
  );
});