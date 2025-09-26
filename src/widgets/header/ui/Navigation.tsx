import { memo } from 'react'
import { NavLink } from 'react-router-dom';
import homeIcon from "@/shared/assets/bilet.svg";
import movieIcon from "@/shared/assets/afisha.svg";
import bookmarkIcon from "@/shared/assets/seans.svg";
import searchIcon from "@/shared/assets/search.svg";

export const Navigation = memo(() => {
  return (
    <nav className=" flex gap-8">
      <NavLink
        to=""
        className="flex flex-col items-center text-gray-900 dark:text-white font-medium hover:text-red-500 transition"
      >
        <img src={homeIcon} alt="Home" className="h-6 w-6 mb-1" />
        Home
      </NavLink>
      <NavLink
        to="/movie"
        className="flex flex-col items-center text-gray-900 dark:text-white font-medium hover:text-red-500 transition"
      >
        <img src={movieIcon} alt="Movie" className="h-6 w-6 mb-1" />
        Movie
      </NavLink>
      <NavLink
        to="/bookmark"
        className="flex flex-col items-center text-gray-900 dark:text-white font-medium hover:text-red-500 transition"
      >
        <img src={bookmarkIcon} alt="Bookmark" className="h-6 w-6 mb-1" />
        Bookmark
      </NavLink>
      <NavLink
        to="/search"
        className="flex flex-col items-center text-gray-900 dark:text-white font-medium hover:text-red-500 transition"
      >
        <img src={searchIcon} alt="Search" className="h-6 w-6 mb-1" />
        Search
      </NavLink>
    </nav>
  );
})
