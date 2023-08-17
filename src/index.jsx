import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CitiesProvider } from "./contexts/cities_context.jsx";
import { AuthProvider } from "./contexts/auth_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  </React.StrictMode>
);
