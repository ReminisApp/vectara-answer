import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import AppWrapper from "./AppWrapper";
import "./App.scss";
import { ConfigContextProvider } from "./contexts/ConfigurationContext";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";
import { SearchContextProvider } from "./contexts/SearchContext";

const App = () => {
  return (
    <Router>
      <ConfigContextProvider>
        <AuthenticationContextProvider>
          <SearchContextProvider>
            <AppWrapper />
          </SearchContextProvider>
        </AuthenticationContextProvider>
      </ConfigContextProvider>
    </Router>
  )
}

export default App
