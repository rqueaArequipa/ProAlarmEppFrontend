import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import Machinery from './pages/machinery/Machinery';
import FormMachinery from './pages/machinery/form/FormMachinery';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/machinery-list' element={<Machinery/>}/>
        <Route path='/add-machinery/:machinery' element={<FormMachinery/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
