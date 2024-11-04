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
  return <button onClick={handleClick}>you clicked {count} time</button>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
