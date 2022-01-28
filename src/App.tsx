
import React from 'react';
import NavBar from './components/Navbar';

import { Product } from './models/product.interface';
import "./App.scss"
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
    <NavBar/> 
    <Outlet/>
   </>
  );
}

export default App;
