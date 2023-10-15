import ReactDOM from 'react-dom/client'
import HelloWorld from './pages/Ex1'
import UserClicks from './pages/Ex2'
import Home from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Custom_Component from './pages/Ex3.tsx'
import StateProps from './pages/Ex4.tsx'
import MapList from './pages/Ex5.tsx'
import MapListComponent from './pages/Ex6.tsx'
import BuildingForm from './pages/Ex7.tsx'
import RenderingJson from './pages/Ex8.tsx'
import WorkingApi from './pages/Ex9.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hello-world' element={<HelloWorld />} />
      <Route path='/user_clicks' element={<UserClicks />} />
      <Route path='/custom_component' element={<Custom_Component />} />
      <Route path='/state_props' element={<StateProps />} />
      <Route path='/map_list' element={<MapList />} />
      <Route path='/map_list_component' element={<MapListComponent />} />
      <Route path='/building_form' element={<BuildingForm />} />
      <Route path='/rendering_json' element={<RenderingJson />} />
      <Route path='/working_API' element={<WorkingApi />} />
    </Routes>

  </BrowserRouter>
  ,
)