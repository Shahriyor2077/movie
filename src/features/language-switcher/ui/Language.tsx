import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      style={{ width: 90}}
      options={[
        { value: "uz", label: "Uz" },
        { value: "en", label: "En" },
        { value: "ru", label: "Ru" },
      ]}
    />
  );
});
