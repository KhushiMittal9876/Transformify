import React, { useState } from "react";
import { Themes } from "../constants/themes";

function LandingPage({onThemeChange}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme" || "coffee");
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    onThemeChange(newTheme);
  };
  return (
    <div className="p-2 h-full w-full">
      <p className="text-lg mt-2">
        Current Theme: <span className="font=bold">{theme}</span>
      </p>
      <h1 className="text-2xl font-bold mb-6">Select Your Theme</h1>
      <div className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {Themes.map((t) => (
          <button
            key={t}
            onClick={() => changeTheme(t)}
            className={`btn btn-ghost btn-outline ${theme === t ? "btn-active" : ""}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default LandingPage;
