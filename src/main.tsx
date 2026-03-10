import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import MobileBlocker from "./components/MobileBlocker";

function isMobileOrTablet() {
  // Checks for viewport width <= 1024px (tablet/mobile)
  return window.innerWidth <= 1024;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

function renderApp() {
  root.render(
    <StrictMode>
      {isMobileOrTablet() ? (
        <MobileBlocker />
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </StrictMode>,
  );
}

renderApp();

window.addEventListener("resize", () => {
  renderApp();
});
