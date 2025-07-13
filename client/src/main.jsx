import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

// Importamos los componentes de las páginas que creaste
// ... imports ...
import HomePage from './pages/HomePage/HomePage.jsx';
import DetalleProducto from './pages/DetalleProducto/DetalleProducto.jsx';
import Contacto from './pages/Contacto/Contacto.jsx'; // Asegúrate de importarla
// ...

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta Padre - Nuestro Layout */}
        <Route path="/" element={<App />}>
          {/* Rutas Hijas que se renderizarán dentro del Outlet */}
          <Route index element={<HomePage />} /> {/* 'index' marca la ruta por defecto ('/') */}
          <Route path="producto/:id" element={<DetalleProducto />} />
          <Route path="contacto" element={<Contacto />} />
          {/* <Route path="carrito" element={<... />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);