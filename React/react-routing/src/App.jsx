import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import './data/server'
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
