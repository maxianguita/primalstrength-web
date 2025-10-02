import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Plani from "./pages/Plani";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planificaciones" element={<Plani />} />
      </Routes>
    </Router>
  );
}

export default App;
