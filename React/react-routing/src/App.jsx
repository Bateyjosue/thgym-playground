import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import './data/server'
import VanDetails from "./pages/vans/VanDetails";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
