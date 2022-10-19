
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import FuncaoRetangulo from '../src/funcaoRetangulo/index'
import FuncaoLinha from '../src/funcaoLinha/index';
import FuncaoContador from '../src/funcaoContador/index'
import FuncaoOrcamento from '../src/funcaoOrcamento/index'
import FuncaoCinema from '../src/funcaoCinema/index'
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
      <Route path='/funcaocinema' element={<FuncaoCinema/>}/>
      <Route path='/funcaoorcamento' element={<FuncaoOrcamento/>}/>
      <Route path='/funcaocontador' element={<FuncaoContador/>}/>
      <Route path='/funcaolinha' element={<FuncaoLinha/>}/>
      <Route path='/funcaoretangulo' element={<FuncaoRetangulo/>}/>
      


      

      
      

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

