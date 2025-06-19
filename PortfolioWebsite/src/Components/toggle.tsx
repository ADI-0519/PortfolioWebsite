import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function Toggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []); // <-- run once on mount, no need to depend on dark

  function handleClick() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  }

  return (
    <>
      {/* Desktop & tablet button: top-right, hidden on small screens */}
      <button
        onClick={handleClick}
        className="fixed max-sm:hidden top-6 right-5 cursor-pointer rounded-full transition-colors duration-300 focus:outline-none z-50 w-10 h-10 p-2"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="text-yellow-300" /> : <Moon className="text-blue-900" />}
      </button>

      {/* Mobile button: bottom-right, visible only on small screens */}
      <button
        onClick={handleClick}
        className="fixed sm:hidden bottom-6 right-6 cursor-pointer rounded-full transition-colors duration-300 focus:outline-none z-50 w-12 h-12 p-3 bg-white dark:bg-gray-800 shadow-lg"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="text-yellow-300" /> : <Moon className="text-blue-900" />}
      </button>
    </>
  );
}

export default Toggle;
