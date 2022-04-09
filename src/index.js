import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MiscProvider } from "./Contexts/Context";
import { MobileDataProvider } from "./Contexts/Context";
import { LoginProvider } from "./Contexts/Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <MiscProvider>
          <MobileDataProvider>
            <App />
          </MobileDataProvider>
        </MiscProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
