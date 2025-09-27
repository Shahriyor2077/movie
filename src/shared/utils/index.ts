export const createImageUrl = (path: string | null) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original${path}`;
  }
  return "https://s1.best-wallpaper.net/wallpaper/iphone/1111/Amazing-eiffel-tower-Paris_iphone_s.jpg";
};

