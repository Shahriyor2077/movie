import { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/shared/assets/logo.png";
import homeIcon from "@/shared/assets/bilet.svg";
import movieIcon from "@/shared/assets/afisha.svg";
import bookmarkIcon from "@/shared/assets/seans.svg";
import searchIcon from "@/shared/assets/search.svg";
import DarkModeToggle from "@/shared/ui/DarkModeToggle";

export const Header = memo(() => {
  return (
    <header className="bg-black py-3 w-full shadow-md">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          <span className="text-red-500 font-bold text-xl tracking-widest"></span>
        </div>

        <nav className="flex gap-8">
          <NavLink
            to=""
            className="flex flex-col items-center text-white font-medium hover:text-red-500 transition"
          >
            <img src={homeIcon} alt="Home" className="h-6 w-6 mb-1" />
            Home
          </NavLink>
          <NavLink
            to="/movie"
            className="flex flex-col items-center text-white font-medium hover:text-red-500 transition"
          >
            <img src={movieIcon} alt="Movie" className="h-6 w-6 mb-1" />
            Movie
          </NavLink>
          <NavLink
            to="/bookmark"
            className="flex flex-col items-center text-white font-medium hover:text-red-500 transition"
          >
            <img src={bookmarkIcon} alt="Bookmark" className="h-6 w-6 mb-1" />
            Bookmark
          </NavLink>
          <NavLink
            to="/search"
            className="flex flex-col items-center text-white font-medium hover:text-red-500 transition"
          >
            <img src={searchIcon} alt="Search" className="h-6 w-6 mb-1" />
            Search
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <button className="bg-white text-black px-5 py-1 cursor-pointer rounded font-semibold hover:bg-red-500 hover:text-white transition shadow">
            Kirish
          </button>
        </div>
      </div>
    </header>
  );
});
