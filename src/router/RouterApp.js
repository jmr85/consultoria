import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PageNotFound from '../components/PageNotFound'
import Home from '../components/Home'
import Form from '../components/Form'
import Proposito from '../components/Proposito'
import Valores from '../components/Valores'

const RouterApp = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contacto" element={<Form/>} />
            <Route path="/proposito" element={<Proposito/>} />
            <Route path="/valores" element={<Valores/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
    </Router>
  )
}

export default RouterApp