import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink es como Link, pero añade estilos al enlace activo
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>MiTienda</NavLink>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Contacto
          </NavLink>
        </li>
        {/* Futuro enlace al carrito */}
        <li>
          <NavLink to="/carrito" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Carrito
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;