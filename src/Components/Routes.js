import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import Pages from '../Pages/Pages';
import Blog from '../Pages/Blog';
import Portfolio from '../Pages/Portfolio';
import Shop from '../Pages/Shop';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/pages' element={<Pages />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}