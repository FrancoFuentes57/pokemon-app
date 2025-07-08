"use client";
/* Next Themes */
import { useTheme } from "next-themes";
/* React Icons */
import { FaMoon, FaSun } from "react-icons/fa";
/* Components */
import { Button } from "../../components/ui/Button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full dark:bg-[#0f172a] dark:hover:bg-[#0f172a] transition-all duration-300"
      onClick={handleTheme}
    >
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
    </Button>
  );
};

export { ThemeToggle };
