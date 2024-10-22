import { useState } from 'react';
import Navbar from './Components/NavBar/Navbar'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import JobsPage from './Pages/JobsPage';
import HomePage from './Pages/HomePage';
import './index.css'
import MainLayout from './Layout/MainLayout';
import Services from './Pages/Services';
import Timeline from './Pages/Timeline';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout/>}>
      <Route path='/JobsPage' element = {<JobsPage/>}/>
      <Route index element = {<HomePage/>} />
      <Route path='/Services' element = {<Services/>}></Route>
      <Route path='/about' element = {<Timeline/>}></Route>

    </Route>
)
)
function App() {
  

  return <RouterProvider router={router}/>
}

export default App


// (
//   <>
//   
//   <Footer/>
//   </>
// )