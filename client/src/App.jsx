import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet es el marcador de posición para las páginas hijas
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        {/* Las rutas anidadas se renderizarán aquí, en el Outlet */}
        <Outlet />
      </main>
    </div>
  );
}

export default App; 