import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainApp from "./MainApp";
import CropProtection from "./articles/CropProtection";
import HealthySoil from "./articles/HealthySoil";
import GrainStorage from "./articles/GrainStorage";
import IrrigationSystems from "./articles/IrrigationSystems";
import Irrigation from "./articles/Irrigtaion";
import SprinklerIrrigation from "./articles/SprinklerIrrigation";
import WildAnimals from "./articles/WildAnimals";
import Farm from "./articles/Farm";
import Pests from "./articles/Pests";
import Macronutrients from "./articles/Macronutrients";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/CropProtection" element={<CropProtection />} />
        <Route path="/HealthySoil" element={<HealthySoil />} />
        <Route path="/GrainStorage" element={<GrainStorage />} />
        <Route path="/IrrigationSystems" element={<IrrigationSystems />} />
        <Route path="/Irrigation" element={<Irrigation />} />
        <Route path="/SprinklerIrrigation" element={<SprinklerIrrigation />} />
        <Route path="/WildAnimals" element={<WildAnimals />} />
        <Route path="/Farm" element={<Farm />} />
        <Route path="/Pests" element={<Pests />} />
        <Route path="/Macronutrients" element={<Macronutrients />} />
      </Routes>
    </Router>
  );
};

export default App;
