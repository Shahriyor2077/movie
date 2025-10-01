import { memo } from "react";
import logo from "@/shared/assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Logo = memo(() => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/`)}
      className="flex items-center cursor-pointer select-none"
    >
      <img
        src={logo}
        alt="Logo"
        className="h-8 w-auto mr-2 md:h-10 transition-all duration-200"
      />

      <span className="hidden md:inline text-red-500 font-bold text-xl tracking-widest">
        MyMovie
      </span>
    </div>
  );
});
