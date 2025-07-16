import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* LOGO + NOMBRE */}
      <div className={styles.brand}>
        <Link to="/">
          <img src="../../sonicStore.png" alt="Sonic Store" className={styles.logo} />
        </Link>
      </div>

      {/* ENLACES */}
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
        <li>
          <NavLink to="/carrito" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Carrito
          </NavLink>
        </li>
      </ul>

      {/* ICONOS */}
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faPhone} title="Llamar" />
        <FontAwesomeIcon icon={faEnvelope} title="Mensajes" />
        <FontAwesomeIcon icon={faUser} title="Perfil" />
      </div>
    </nav>
  );
}

export default Navbar;
