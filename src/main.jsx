import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderWrapper } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </React.StrictMode>
);
