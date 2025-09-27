import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const { Option } = Select;

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.language}
      onChange={(value) => i18n.changeLanguage(value)}
      className="w-24"
      dropdownClassName="dark:bg-gray-800"
    >
      <Option value="uz">Uz</Option>
      <Option value="en">En</Option>
      <Option value="ru">Ru</Option>
    </Select>
  );
});
