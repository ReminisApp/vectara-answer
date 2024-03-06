import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigContextProvider } from "./contexts/ConfigurationContext";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";

// @ts-expect-error - grecaptcha is a global variable.
grecaptcha.ready(() => {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

  root.render(
    <React.StrictMode>
      <ConfigContextProvider memid={''}>
        <AuthenticationContextProvider>
          <App />
        </AuthenticationContextProvider>
      </ConfigContextProvider>
    </React.StrictMode>
  );
});
