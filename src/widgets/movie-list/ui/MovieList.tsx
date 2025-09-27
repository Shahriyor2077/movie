import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
  movies?: IMovie[];
}

export const MovieList: FC<Props> = memo((props) => {
  const { movies } = props;
  const navitgate=useNavigate()
  const {t}=useTranslation()

  return (
    <div className="container mx-auto max-w-[1200px] px-6">
      <div className="relative rounded-2xl p-5">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] uppercase tracking-wide font-medium text-red-700">
            {t("duringTheWeek")}
          </span>
          <span className=" text-[10px] cursor-pointer uppercase tracking-wide text-red-700 font-medium px-2 py-0.5 rounded"
          onClick={()=>navitgate("/movie")}
          >
            {t("seeMore")}›+
          </span>
        </div>
        <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {movies?.map((item: IMovie) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
});


