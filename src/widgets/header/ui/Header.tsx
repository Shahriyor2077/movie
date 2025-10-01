import { memo } from "react";
import { Navigation } from "./Navigation";
import { Option } from "./Option";
import { Enter } from "./Enter";
import { Logo } from "./Logo";

export const Header = memo(() => {
  return (
    <>
      <header className="py-3 w-full shadow-md bg-white dark:bg-black z-50 relative">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6">
          <Logo />
          <div className="hidden md:block">
            <Navigation />
          </div>
          <div className="flex items-center gap-4">
            <Option />
            <Enter />
          </div>
        </div>
      </header>
      <div className="md:hidden">
        <Navigation />
      </div>
    </>
  );
});
