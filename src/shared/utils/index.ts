export const createImageUrl = (path: string | null) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original${path}`;
  }
  return "https://static.thenounproject.com/png/1077596-200.png";
};
