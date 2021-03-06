import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import AboutComponent from './components/About'
import CartComponent from './components/Cart'
import ContactComponent from './components/Contacts'
import Products from './components/Products'
import reportWebVitals from './reportWebVitals'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/category/jewelery"
              element={<Products category="jewelery" />}
            />
            <Route
              path="/products/category/electronics"
              element={<Products category="electronics" />}
            />{' '}
            <Route
              path="/products/category/men"
              element={<Products category="men's clothing" />}
            />{' '}
            <Route
              path="/products/category/women"
              element={<Products category="women's clothing" />}
            />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/about" element={<AboutComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
