
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import FuncaoAcai from '../src/funcaoAcai/index'
import FuncaoSigno from '../src/funcaoSigno/index'
import FuncaoSorvete from '../src/funcaoSorvete/index'
import FuncaoFebre from '../src/funcaoFebre/index'
import FuncaoSalario from '../src/funcaoSalario/index'
import FuncaoParadas from '../src/funcaoParadas/index'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<FuncaoAcai/>}/>
      <Route path='/funcaosigno' element={<FuncaoSigno/>}/>
      <Route path='/funcaosorvete' element={<FuncaoSorvete/>}/>
      <Route path='/funcaofebre'element={<FuncaoFebre/>}/>
      <Route path='/funcaosalario' element={<FuncaoSalario/>}/>
      <Route path='/fucaoparadas' element={<FuncaoParadas/>}/>
      

      
     

      
      
      

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

