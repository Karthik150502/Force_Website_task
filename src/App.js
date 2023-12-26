import React,{useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.js';
import Mens from './Components/MenSection/Mens.js';
import Womens from './Components/WomenSection/Womens.js';


const mainStyle = {
  height:"auto"
}
function App() {
  return (
    <div className="App" stytle={mainStyle}>
        <Navbar/> 
          <Routes>
            <Route path='/mensection' element={<Mens/>}></Route>
            <Route path='/womensection' element={<Womens/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
