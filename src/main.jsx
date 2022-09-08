import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home/home.jsx'
import {Clientes} from './pages/Clientes/Clientes.jsx'
import {Cliente} from './pages/Cliente/Cliente.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from './components/Header/header.jsx'
import './index.css'
import { Provider } from './context/provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/clientes' element={<Clientes />} />
          <Route path ='/cliente/:id' element={<Cliente />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
