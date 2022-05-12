import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Products from './components/Products';
import Nav from './components/Nav';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;