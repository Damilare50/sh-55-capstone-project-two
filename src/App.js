import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Products from './components/Products';
import Nav from './components/Nav';
import Product from './components/Products/Product';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products productList={productList} setProductList={setProductList} navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen}/>} />
          <Route path={`/products/product/:id`} element={<Product productList={productList}  navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;