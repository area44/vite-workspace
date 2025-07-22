import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1280px] mx-auto p-8 text-center">
      <div className="flex justify-center space-x-8">
        <a href="https://vite.dev" target="_blank" rel="noopener">
          <img
            src={viteLogo}
            className="h-24 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img
            src={reactLogo}
            className="h-24 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold my-8">Vite + React</h1>
      <div className="p-8 border rounded-lg shadow-md inline-block">
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className=" text-black font-semibold py-2 px-4 rounded transition"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
