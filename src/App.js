import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainApp from "./MainApp";
import CropProtection from "./articles/CropProtection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/CropProtection" element={<CropProtection />} />
      </Routes>
    </Router>
  );
};

export default App;
