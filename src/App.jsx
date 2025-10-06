// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plani from "./pages/Plani";
import Teams from "./pages/Teams";
import Merch from "./pages/Merch";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plani" element={<Plani />} />
         <Route path="/teams" element={<Teams />} />
          <Route path="/merch" element={<Merch />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
