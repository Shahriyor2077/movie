import { Button } from "antd";
import { useEffect, useState, memo } from "react";

const DarkModeToggle = memo(() => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Button
      onClick={toggleDark}
      className="p-2 rounded cursor-pointer bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {isDark ? "☀️ Light" : "🌛 Dark"}
    </Button>
  );
});

export default DarkModeToggle;
