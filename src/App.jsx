// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plani from "./pages/Plani";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plani" element={<Plani />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
