import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { addBookmark, removeBookmark } from "../../../features/wishlist/model/wishlistSlice";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const isBookmark=useSelector((state: RootState)=>state.bookmark.movies.some((m)=>m.id===movie.id))

  const handleClick=(e:React.MouseEvent)=>{
    e.stopPropagation();
    if(isBookmark){
      dispatch(removeBookmark(movie.id))
    }else{
      dispatch(addBookmark(movie))
    }
  }

  return (
    <div
      className="bg-black/70 rounded-xl overflow-hidden shadow-lg border border-black/40 hover:shadow-red-500/20 transition duration-200 hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/movie-detail/${movie.id}`)}
    >
      <div className="relative aspect-[3/4] w-full bg-slate-800">
        <img
          src={createImageUrl(movie.poster_path)}
          alt={"posterPath"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full text-white hover:text-red-500 transition-colors bg-black/60 dark:bg-white/20 backdrop-blur-sm ring-1 ring-white/20 dark:ring-white/30"
          onClick={handleClick}
        >
          <FiBookmark size={18}
          className={isBookmark ? "text-red-500" : "text-white dark:text-white"}
           />
        </button>
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
        <p className="text-[10px] uppercase tracking-wide text-white/60 mt-1">
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
});
