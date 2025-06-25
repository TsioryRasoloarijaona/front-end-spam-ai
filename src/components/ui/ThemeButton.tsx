import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="absolute top-4 left-4 text-4xl cursor-pointer"
      onClick={toggleTheme}
    >
      {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
}
