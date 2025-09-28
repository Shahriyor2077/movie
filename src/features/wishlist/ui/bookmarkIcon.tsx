import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Badge } from "antd";
import { FiBookmark } from "react-icons/fi";

export const BookmarkIcon = memo(() => {
  const movies = useSelector((state: RootState) => state.bookmark.movies);

  
  return (
    <Badge count={movies.length} size="small" offset={[0, 6]}>
      <FiBookmark size={22} className="text-white cursor-pointer" />
    </Badge>
  );
});
