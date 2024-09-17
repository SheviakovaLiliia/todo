import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
