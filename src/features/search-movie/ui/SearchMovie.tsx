import { memo, useState } from "react";
import { useSearchMovie } from "../model/useSearchMovie";
import { MovieList } from "../../../widgets/movie-list";
import { Empty, Input } from "antd";
import useDebounce from "../../../shared/hooks/useDebounce";
import { useTranslation } from "react-i18next";

export const SearchMovie = memo(() => {
  const [value, setValue] = useState("");
  const { t } = useTranslation(); 
  const { getMovieBySearch } = useSearchMovie();
  const debounceValue = useDebounce(value, 800);
  const { data, isFetching } = getMovieBySearch({ query: debounceValue });

  return (
    <div>
      <div className="container mt-5 ">
        <Input
          placeholder={t("search")} 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <br />
      </div>

      <MovieList movies={data?.results} />

      {!data?.results?.length && debounceValue && !isFetching && <Empty />}
    </div>
  );
});
