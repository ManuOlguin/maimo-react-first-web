import React from 'react';
import styles from './Header.module.css';
import myImage from './logo.png';

const Header = () => {
  return <header className={styles.flex_container}>
      <nav className={styles.navbar}>
      <a href=" ">
        <img src={myImage} height="40" class="d-inline-block align-top" alt="logoTgroup"></img>
      </a>

      <a href="form-contacto" className={styles.navbar_item}>Contacto</a>
      <a href="#entra-tienda" className={styles.navbar_item}>Nosotros</a>

      <a href="#tags-tienda" className={styles.navbar_item}>Soluciones</a>
    </nav>
  </header>
};


export default Header;
