import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";

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
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-black/20">
            <img
              src={data?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}` : ''}
              sizes="(max-width: 768px) 100vw, 600px"
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div>
            <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
              {title}
            </h1>
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
        <h2 className="text-gray-700 dark:text-white/80 text-sm mb-2">Gallery</h2>
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
    </div>
  );
});



