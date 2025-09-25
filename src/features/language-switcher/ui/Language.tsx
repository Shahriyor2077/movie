import { memo } from "react";

export const LanguageSwitcher = memo(() => {
  return (
    <select className="flex flex-col items-center text-gray-900 dark:text-white font-medium hover:text-red-500 transition">
      <option value="">uz</option>
      <option value="">en</option>
      <option value="">ru</option>
    </select>
  );
});
