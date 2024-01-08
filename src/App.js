import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './compontent/Home'
import Write from './compontent/Write'
import Navbar from './compontent/Navbar'
import React from "react";

//z

class App extends React.Component {
  state = {
    query: ""
  };
  render() {
    return (

        <BrowserRouter>
                          
        <Navbar/>
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Write' element={<Write/>}/>
            </Routes> 
        </BrowserRouter>
    );
  }
}
// 1111
export default App