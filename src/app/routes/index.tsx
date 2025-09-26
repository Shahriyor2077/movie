import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const Bookmark = lazy(() => import("@/pages/bookmark"));
const Search = lazy(() => import("@/pages/search"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));
const Cast = lazy(() => import("@/pages/movie-detail/cast"));
const Review = lazy(() => import("@/pages/movie-detail/review"));
const Other = lazy(() => import("@/pages/movie-detail/other"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movie", element: <Movie /> },
        { path: "/bookmark", element: <Bookmark /> },
        { path: "/search", element: <Search /> },
        { path: "/movie-detail/:id", element: <MovieDetail />, 
          children:[
          {index: true, element: <Cast/>},
          {path: "review", element: <Review/>},
          {path: "other", element: <Other/>}
        ] },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
