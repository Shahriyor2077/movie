import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();

  return (
    <div
      className="bg-black/70 rounded-xl overflow-hidden shadow-lg border border-black/40 hover:shadow-red-500/20 transition duration-200 hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/movie-detail/${movie.id}`)}
    >
      <div className="relative aspect-[3/4] w-full bg-slate-800">
        <img
          src={createImageUrl(movie.poster_path)}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3
          className="text-white text-sm font-semibold line-clamp-1"
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className="text-[10px] uppercase tracking-wide text-white/60 mt-1">
          {movie.original_language}
        </p>
      </div>
    </div>
  );
});
