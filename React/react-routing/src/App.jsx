import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans, {loader as vansLoader} from "./pages/vans/Vans";
import './data/server'
import VanDetails, {loader as vanLoader} from "./pages/vans/VanDetails";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/layout/HostLayout";
import Income from "./pages/host/income";
import HostVans, {loader as hostVansLoader} from "./pages/host/HostVans"
import HostVan, {loader as HostVanLoader} from "./pages/host/HostVan";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Login from "./pages/Login";
import { requireAuth } from "./data/utils";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route 
      path="vans" 
      element={<Vans />}
      loader={vansLoader}
      errorElement={<Error />}
      />
    <Route 
      path="vans/:id" 
      element={<VanDetails />}
      loader={vanLoader}
      errorElement={<Error />}
      />
    <Route 
      path="host" 
      element={<HostLayout />} 
      >
        <Route 
          index 
          element={<Dashboard />}
          loader={async () => await requireAuth()}
          />
        <Route path="income" element={<Income />} 
          loader={async () => await requireAuth()} />
        <Route path="reviews" element={<Reviews />} 
          loader={async () => await requireAuth()}
          />
        <Route 
          path="vans" 
          element={<HostVans />}
          loader={hostVansLoader} 
          errorElement={<Error/>}
          />
        <Route 
          path="vans/:id" 
          element={<HostVan />}
          loader={HostVanLoader}
          >
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
