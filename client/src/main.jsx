import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

// Importamos los componentes de las páginas que creaste
import DetalleProducto from './pages/DetalleProducto/DetalleProducto.jsx';
// Por ahora, crearemos placeholders para las otras páginas
// import CarritoDeCompras from './pages/CarritoDeCompras/CarritoDeCompras.jsx';
// import Contacto from './pages/Contacto/Contacto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* La ruta raíz '/' mostrará nuestro listado de productos */}
        <Route path="/" element={<App />} />
        
        {/* Ruta dinámica para el detalle de producto */}
        {/* El :id le dice al router que esta parte de la URL es variable */}
        <Route path="/producto/:id" element={<DetalleProducto />} />

        {/* Aquí añadiríamos las otras rutas en el futuro */}
        {/* <Route path="/carrito" element={<CarritoDeCompras />} /> */}
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);