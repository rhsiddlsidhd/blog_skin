import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Globalstyles from "./styles/GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Globalstyles />
    <App />
  </StrictMode>
);
