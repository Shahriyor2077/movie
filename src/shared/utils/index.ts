import defaultImage from "@/shared/assets/di.jpg";

export const createImageUrl = (path: string | null) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original${path}`;
  }
  return defaultImage;
};
