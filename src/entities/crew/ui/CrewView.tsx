import { memo } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "@/shared/utils";
import { Loading } from "@/shared/ui/Loading";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data, isLoading } = getCrewById(id as string);

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <section className=" relative grid grid-cols-2">
        <div>
          <img
            className="sticky top-4 rounded-2xl mt-5"
            src={createImageUrl(data?.profile_path)}
            width={400}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl mt-5 mb-5">{data?.name}</h1>
          <h1 className="text-xl mb-2">{data?.birthday}</h1>
          <p>{data?.biography}</p>
        </div>
      </section>
    </div>
  );
});
