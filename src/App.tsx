import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1280px] mx-auto p-8 text-center">
      <div className="flex justify-center space-x-8">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vite Website"
        >
          <img
            src={viteLogo}
            className="h-24 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React Website"
        >
          <img
            src={reactLogo}
            className="h-24 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold my-8">Vite Workspace</h1>

      <div className="p-8 border rounded-lg shadow-md inline-block bg-white dark:bg-gray-800">
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Count is {count}
        </button>

        {count > 0 && (
          <p className="mt-3 text-green-600 font-medium">
            You've clicked {count} time{count > 1 ? "s" : ""}!
          </p>
        )}

        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Edit{" "}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
