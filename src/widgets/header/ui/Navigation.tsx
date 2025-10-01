import { memo } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { useTranslation } from "react-i18next";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const movies = useSelector((state: RootState) => state.bookmark.movies);

  return (
    <nav
      className="
        fixed bottom-0 left-0 w-full bg-white dark:bg-black border-t 
        flex justify-around py-2 z-40
        md:static md:flex md:gap-10 md:justify-center md:border-none
      "
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs md:text-sm font-medium transition 
          ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <AiOutlineHome size={22} className="mb-1" />
        <span className="hidden md:block">{t("header.navigation.home")}</span>
      </NavLink>

      <NavLink
        to="/movie"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs md:text-sm font-medium transition 
          ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <BiMoviePlay size={22} className="mb-1" />
        <span className="hidden md:block">{t("header.navigation.movies")}</span>
      </NavLink>

      <NavLink
        to="/bookmark"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs md:text-sm font-medium transition 
          ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <Badge count={movies.length} size="small" offset={[8, 0]}>
          <BsBookmark size={20} className="mb-1" />
        </Badge>
        <span className="hidden md:block">
          {t("header.navigation.bookmark")}
        </span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs md:text-sm font-medium transition 
          ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <AiOutlineSearch size={22} className="mb-1" />
        <span className="hidden md:block">{t("header.navigation.search")}</span>
      </NavLink>
    </nav>
  );
});
