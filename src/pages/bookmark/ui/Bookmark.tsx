import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { MovieCard } from "@/entities/movie/ui/MovieCard";
import { Empty } from "antd";

export const Bookmark = memo(() => {
  const movies = useSelector((state: RootState) => state.bookmark.movies);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white mb-5">Bookmarks</h2>

      {movies.length === 0 ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
});