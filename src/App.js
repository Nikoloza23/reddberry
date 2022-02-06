import React from 'react'
import './App.css'
import Navbar from './components/home/Navbar'
import {Routes, Route} from 'react-router-dom'
import Products from './components/products/Products';
import Product from './components/products/Product';


function App() {
   return (
     <div className="App">
    <Navbar />
     <Routes>
      <Route path='/products' element={<Products/>} /> 
      <Route path='/products/:id' element={<Product/>} /> 
     </Routes>
    </div>
  );
}


export default App;

