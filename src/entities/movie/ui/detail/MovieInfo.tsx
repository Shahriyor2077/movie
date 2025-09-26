import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  console.log(data);

  const title = data?.title || data?.original_title || "Movie Title";
  const year = data?.release_date ? data.release_date.slice(0, 4) : "—";
  const language = data?.original_language?.toUpperCase() || "EN";
  const rating =
    typeof data?.vote_average === "number" ? data.vote_average.toFixed(1) : "—";

  return (
    <div>
      <section className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-5 items-start">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              src={createImageUrl(data?.backdrop_path)}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bg-black/40" />
            <div className="container relative h-full flex items-end justify-center pb-6">
              <h1 className="text-white bg-black/30 p-6 rounded-xl text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg text-center">
                {title}
              </h1>
            </div>
          </div>

          <div>
            <p>{data?.budget?.toLocaleString()} USD</p>
            <p className="text-gray-600 dark:text-white/70 text-sm mt-1">
              {year} · {language} · ⭐ {rating}
            </p>
            {data?.overview && (
              <p className="text-gray-700 dark:text-white/80 mt-4  text-sm md:text-base">
                {data.overview}
              </p>
            )}
            {data?.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                className="inline-block mt-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded"
              >
                Official site
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-[1200px] px-6 mt-6">
        <h2 className="text-gray-700 dark:text-white/80 text-sm mb-2">
          Gallery
        </h2>
        <div className="flex overflow-x-auto gap-3 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {imageData?.backdrops?.slice(0, 12)?.map((item: any, inx: number) => (
            <Image
              key={inx}
              className="min-w-[150px] h-[88px] md:min-w-[200px] md:h-[112px] object-cover rounded-md !bg-black/30"
              src={createImageUrl(item.file_path)}
              alt={"image"}
              preview={true}
            />
          ))}
        </div>
      </section>
      <section className="container mt-10">
        <h2>Tabs</h2>
        <div className="flex gap-4">
          <Link to="review">Review</Link>
          <Link to="cast">Cast</Link>
          <Link to="other">Others</Link>
        </div>
      </section>
    </div>
  );
});
