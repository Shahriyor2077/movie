import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Option } from "./Option";
import { Enter } from "./Enter";

export const Header = memo(() => {
  return (
    <header className="  py-3 w-full shadow-md  ">
      <div className="  max-w-[1300px] mx-auto flex items-center justify-between px-6">
        <Logo/>
        <Navigation/>
        <Option/>
        <Enter/>
      </div>
    </header>
  );
});
