import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans, {loader as vansLoader} from "./pages/vans/Vans";
import './data/server'
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/host/Dashboard";
// import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/layout/HostLayout";
import Income from "./pages/host/income";
import HostVans from "./pages/host/HostVans"
import HostVan from "./pages/host/HostVan";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route 
      path="vans" 
      element={<Vans />}
      loader={vansLoader}
      errorElement={<Error />}
      />
    <Route path="vans/:id" element={<VanDetails />} />
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVan />}>
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path='photos' element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>} />
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
