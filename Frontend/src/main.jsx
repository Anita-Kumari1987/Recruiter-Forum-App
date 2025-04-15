import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/index.css";
import App from "./App.jsx";

import "sweetalert2/src/sweetalert2.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
