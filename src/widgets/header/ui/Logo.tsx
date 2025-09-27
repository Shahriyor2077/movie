import { memo } from 'react'
import logo from "@/shared/assets/logo.png";
import { useNavigate } from 'react-router-dom';

export const Logo = memo(() => {
  const navigate=useNavigate()
  return (
    <div className=" flex items-center cursor-pointer">
      <img onClick={()=>navigate(`/`)} src={logo} alt="Logo" className="h-10 w-auto mr-2" />
      <span className="text-red-500 font-bold text-xl tracking-widest"></span>
    </div>
  );
})
