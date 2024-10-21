import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <h1>React app by Muhammad Anas</h1>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Made By Muhammad Anas</h1>
  </StrictMode>
);
