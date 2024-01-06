// import React from "react"
// // import Navbar from "./compoent/Navbar"
// import Home from "./compoent/Home"
// import About from "./compoent/About"
// import Skills from "./compoent/Skills"
// import Contact from "./compoent/Contact"
// import Services from "./compoent/Services"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './compontent/Home'
import About from './compontent/About'
import Skills from './compontent/Skills'
import Contact from './compontent/Contact'
import Services from './compontent/Services'
import Navbar from './compontent/Navbar'

//z

function App() {
  return (
    <>

        <BrowserRouter>
        <Navbar/>
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/services' element={<Services/>}/>
            </Routes> 
        </BrowserRouter>
    </>
  )
}

export default App