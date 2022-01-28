import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import AboutComponent from './components/About';
import CartComponent from './components/Cart';
import ContactComponent from './components/Contacts';
import ProductComponent from './components/Product';
import Products from './components/Products';
import { Product } from './models/product.interface';

import reportWebVitals from './reportWebVitals';

const product ={
  id:1,
  title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price:109.95,
  description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category:"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating:
  {rate:3.9,count:120}
  } as Product
  
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/>}>
        <Route path="/products" element={ <Products/>}/>
        <Route path="/product" element={ <ProductComponent product={product}/>}/>
        <Route path="/cart" element={ <CartComponent/>}/>
        <Route path="/contact" element={ <ContactComponent/>}/>
        <Route path="/about" element={ <AboutComponent/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
