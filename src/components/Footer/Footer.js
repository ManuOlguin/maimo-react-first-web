import React from 'react'
import styles from './Footer.module.css';
import myImage from './logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
            <div id={styles.footer_logo}>
                <a className={styles.navbar_logo} href="/">
                    <img src={myImage} height="40" class="d-inline-block align-top" alt="logoVegetalex"></img>
                    </a>
            </div>
            <div id={styles.footer_links}>
                <a>Inicio</a>
                <a>Tienda</a>
                <a>Quienes somos</a>
                <a>Contacto</a>
            </div>
        </footer>
  )
}

export default Footer