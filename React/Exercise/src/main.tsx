import ReactDOM from 'react-dom/client'
import HelloWorld from './pages/Ex1'
import UserClicks from './pages/Ex2'
import Home from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Custom_Component from './pages/Ex3.tsx'
import StateProps from './pages/Ex4.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hello-world' element={<HelloWorld />} />
      <Route path='/user_clicks' element={<UserClicks />} />
      <Route path='/custom_component' element={<Custom_Component />} />
      <Route path='/state_props' element={<StateProps />} />
    </Routes>

  </BrowserRouter>
  ,
)