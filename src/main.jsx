const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6c9a34lnjn0vYWJrZ6EV0WSYof_tAYxVVTg&s";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div
        className="bg-slate-900 text-white uppercase h-screen flex justify-center items-center flex-col-reverse
      "
      >
        <button
          className="border-slate-100 border p-4 rounded-full"
          onClick={handleClick}
        >
          you clicked {count} time
        </button>
        <h1 className=" text-white text-center text-2xl">Hello Tailwind</h1>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
