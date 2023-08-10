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
                <a styles="font-weight: 500;">Polo empresarial K41, Avenida Gaona 11024, Of. 309 B, Fransico Alverez, Provincia de Buenos Aires</a>
                <a>contacto@tgroup.com.ar</a>
            </div>
        </footer>
  )
}

export default Footer