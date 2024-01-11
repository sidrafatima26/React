import React from 'react';
import {Route,Routes, NavLink} from 'react-router-dom'
import Notfound from './components/Notfound';
import About from "./components/About"
import Support from './components/Support';
import Home from './components/Home';
import Contact from './components/Contact';
import Mainheader from './components/Mainheader';


function App() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <ul>
        <li> <NavLink to="/"> Home </NavLink> </li>
        <li> <NavLink to="/support"> Support </NavLink> </li>
        <li> <NavLink to="/about"> About </NavLink> </li>
        <li> <NavLink to="/contact"> Conatct  </NavLink></li>
        <li> <NavLink to="*"> Not Found  </NavLink> </li>
      </ul>


      <Routes>
        <Route path="/" element={ <Mainheader></Mainheader> }>  
        <Route index element={ <Home></Home> }></Route>
        <Route path="/support" element={ <Support></Support> }> </Route>
        <Route path="/about" element={ <About></About> }></Route>
        <Route path="/contact" element={<Contact></Contact>}> </Route>
        <Route path="*" element={ <Notfound></Notfound> }></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

//Nested Routing
