import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import AppWrapper from "./AppWrapper";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App
