import { useState } from 'react';
import Navbar from './Components/NavBar/Navbar'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import JobsPage from './Pages/JobsPage';
import HomePage from './Pages/HomePage';
import './index.css'
import MainLayout from './Layout/MainLayout';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Services from './Pages/Services';
import Timeline from './Pages/Timeline';
import Contact from './Pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout/>}>
      <Route path='/JobsPage' element = {<JobsPage/>}/>
      <Route path='/Signup' element = {<Signup/>} /> 
      <Route path='/Login' element = {<Login/>} /> 
      <Route index element = {<HomePage/>} />
      <Route path='/Services' element = {<Services/>}></Route>
      <Route path='/about' element = {<Timeline/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
    </Route>
)
)
function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}/>
}

export default App


// (
//   <>
//   
//   <Footer/>
//   </>
// )