import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "@/entities/movie";
import { createImageUrl } from "@/shared/utils/index";

export const Other = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data, isLoading } = getMovieInfo(id as string, "credits");

  if (isLoading) return <div>Loading...</div>;
  if (!data?.crew?.length) return <div>No crew info</div>;

  return (
    <div className="container">
      <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
        {data.crew.map((crew: any) => (
          <div key={crew.credit_id} className="min-w-[150px] w-full">
            <img
              src={createImageUrl(crew.profile_path)}
              className="w-full rounded-xl cursor-pointer "
              alt={crew.name}
            />
            <h3 className="font-medium">{crew.name}</h3>
            <p className="text-gray-500">{crew.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
