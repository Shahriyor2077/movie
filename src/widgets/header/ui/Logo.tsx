import { memo } from 'react'
import logo from "@/shared/assets/logo.png";

export const Logo = memo(() => {
  return (
    <div className=" flex items-center">
      <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
      <span className="text-red-500 font-bold text-xl tracking-widest"></span>
    </div>
  );
})
