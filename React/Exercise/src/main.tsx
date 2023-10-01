import ReactDOM from 'react-dom/client'
import HelloWorld from './pages/Ex1'
import UserClicks from './pages/Ex2'
import Home from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hello-world' element={<HelloWorld />} />
      <Route path='/user_clicks' element={<UserClicks />} />
    </Routes>

  </BrowserRouter>
  ,
)
