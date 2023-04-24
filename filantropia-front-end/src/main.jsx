import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./utils/context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* // Se envuelve la aplicacion del provider de rutas */}
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </>
);
