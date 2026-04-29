import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GorduraCorporal from "./pages/GorduraCorporal";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gordura-corporal" element={<GorduraCorporal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;