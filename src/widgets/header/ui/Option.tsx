import { memo } from "react";
import { LanguageSwitcher } from "../../../features/language-switcher";
import DarkModeToggle from "../../../shared/ui/DarkModeToggle";

export const Option = memo(() => {
  return (
    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
      <LanguageSwitcher />
      <DarkModeToggle />
    </div>
  );
});
