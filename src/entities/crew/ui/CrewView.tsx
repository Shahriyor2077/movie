import { memo } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "@/shared/utils";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data } = getCrewById(id as string);

  return (
    <div className="container">
      <section className="grid grid-cols-2">
        <div>
          <img
            className="rounded-2xl"
            src={createImageUrl(data?.profile_path)}
            width={400}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl mb-2">{data?.name}</h1>
          <p>{data?.biography}</p>
        </div>
      </section>
    </div>
  );
});
