
import React from "react";
import './../styles/App.css';
import { About } from "./About";
import {Routes,Route,Link} from 'react-router-dom';

const App = () => {
  return (
    <>
    <div>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='about'>About</Link></li>
    </ul>
    </div>
    <Routes>
      <Route path='/' element={<h1>Welcome to my website!</h1>}></Route>
      <Route path='about' element={<About/>}></Route>
    </Routes>
   </>
  )
}

export default App
