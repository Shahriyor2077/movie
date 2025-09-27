import { memo } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = memo(() => {
  const{i18n} = useTranslation()
  return (
    <select value={i18n.language} onChange={(e)=>i18n.changeLanguage(e.target.value)} className="flex flex-col items-center text-gray-900 dark:text-white font-medium hover:text-red-500 transition">
      <option value="uz">uz</option>
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  );
});
