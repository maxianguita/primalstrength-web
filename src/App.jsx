import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"; 
import Plani from "./pages/Plani";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planificaciones" element={<Plani />} />
      </Routes>
    </HashRouter>
  );
}
