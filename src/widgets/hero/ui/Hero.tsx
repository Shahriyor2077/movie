import { memo } from "react";
import { Swipers } from "@/entities/swiper";
import { useMovie } from "../../../entities/movie";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies({ page: "1" });
  return (
    <div className="container mb-14 ">
      <Swipers data={data?.results?.slice(0, 6)} />
    </div>
  );
});