import { useEffect, useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const handleTheme = () => {
    setTheme((prevTheme: string) => {
      if (prevTheme === "light") return "dark";
      else return "light";
    });
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else document.querySelector("html")?.classList.remove("dark");
  }, [theme]);

  return (
    <div className="h-screen flex justify-center items-center dark:bg-black">
      <button
        className="bg-slate-200 py-2 px-4 hover:bg-slate-300 rounded-md dark:bg-neutral-600 dark:text-cyan-50"
        onClick={handleTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export { App };
