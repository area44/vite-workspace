import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vite Starter</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Built with React, TypeScript & Tailwind CSS
      </p>
      <button
        type="button"
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition"
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
