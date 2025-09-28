// import { memo } from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
// import { BiMoviePlay } from "react-icons/bi";
// import { BsBookmark } from "react-icons/bs";
// import { useTranslation } from "react-i18next";

// export const Navigation = memo(() => {
//   const { t } = useTranslation();

//   return (
//     <nav className="flex gap-8">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `flex flex-col items-center font-medium transition ${
//             isActive
//               ? "text-red-500"
//               : "text-gray-900 dark:text-white hover:text-red-500"
//           }`
//         }
//       >
//         <AiOutlineHome size={24} className="mb-1" />
//         {t("header.navigation.home")}
//       </NavLink>

//       <NavLink
//         to="/movie"
//         className={({ isActive }) =>
//           `flex flex-col items-center font-medium transition ${
//             isActive
//               ? "text-red-500"
//               : "text-gray-900 dark:text-white hover:text-red-500"
//           }`
//         }
//       >
//         <BiMoviePlay size={24} className="mb-1" />
//         {t("header.navigation.movies")}
//       </NavLink>

//       <NavLink
//         to="/bookmark"
//         className={({ isActive }) =>
//           `flex flex-col items-center font-medium transition ${
//             isActive
//               ? "text-red-500"
//               : "text-gray-900 dark:text-white hover:text-red-500"
//           }`
//         }
//       >
//         <BsBookmark size={22} className="mb-1" />
//         {t("header.navigation.bookmark")}
//       </NavLink>

//       <NavLink
//         to="/search"
//         className={({ isActive }) =>
//           `flex flex-col items-center font-medium transition ${
//             isActive
//               ? "text-red-500"
//               : "text-gray-900 dark:text-white hover:text-red-500"
//           }`
//         }
//       >
//         <AiOutlineSearch size={24} className="mb-1" />
//         {t("header.navigation.search")}
//       </NavLink>
      
//     </nav>
//   );
// });




import { memo } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const movies = useSelector((state: RootState) => state.bookmark.movies);

  return (
    <nav className="flex gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center font-medium transition ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <AiOutlineHome size={24} className="mb-1" />
        {t("header.navigation.home")}
      </NavLink>

      <NavLink
        to="/movie"
        className={({ isActive }) =>
          `flex flex-col items-center font-medium transition ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <BiMoviePlay size={24} className="mb-1" />
        {t("header.navigation.movies")}
      </NavLink>

      <NavLink
        to="/bookmark"
        className={({ isActive }) =>
          `flex flex-col items-center font-medium transition ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <Badge count={movies.length} size="small" offset={[8, 0]}>
          <BsBookmark
            size={22}
            className="mb-1 text-gray-900 dark:text-white"
          />
        </Badge>
        {t("header.navigation.bookmark")}
      </NavLink>


      <NavLink
        to="/search"
        className={({ isActive }) =>
          `flex flex-col items-center font-medium transition ${
            isActive
              ? "text-red-500"
              : "text-gray-900 dark:text-white hover:text-red-500"
          }`
        }
      >
        <AiOutlineSearch size={24} className="mb-1" />
        {t("header.navigation.search")}
      </NavLink>
    </nav>
  );
});
