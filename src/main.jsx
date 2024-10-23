const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6c9a34lnjn0vYWJrZ6EV0WSYof_tAYxVVTg&s";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <>
      <h1 style={{ fontFamily: "monospace" }}>Famous Sports In The World</h1>
      <img src={url} alt="football" className="image" width={200} />
      <ul>
        <li>Circket</li>
        <li>Hockey</li>
        <li>BaseBall</li>
        <li>BasketBall</li>
        <li>Football</li>
      </ul>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
