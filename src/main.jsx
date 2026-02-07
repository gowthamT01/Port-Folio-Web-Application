import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import TechnicalSkills from './TechnicalSkills.jsx'
import Project from './Project.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/Home',
    element:<Home/>
  },{
    path:'/About',
    element:<About/>
  },{
    path:'/Contact',
    element:<Contact/>
  },
  {
    path:'/Project',
    element:<Project/>
  },{
    path:'./TechnicalSkills',
    element:<TechnicalSkills/>
  }
])
createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
