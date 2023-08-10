import React from 'react';
import styles from './Header.module.css';
import myImage from './logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className={styles.flex_container}>
      <nav className={styles.navbar}>
      <a href=" ">
        <img src={myImage} height="40" class="d-inline-block align-top" alt="logoTgroup"></img>
      </a>

      <Link
              activeClass='active'
              className={styles.navbar_item1}
              to={'support'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                Soporte
      </Link>
      <Link
              activeClass='active'
              className={styles.navbar_item}
              to={'lastSections'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                Contacto
      </Link>
      <Link
              activeClass='active'
              className={styles.navbar_item}
              to={'fullInfo'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                Nosotros
      </Link>
      <Link
              activeClass='active'
              className={styles.navbar_item}
              to={'cardsContainer'}
              spy={true}
              smooth={true}
              duration={300}
              offset={-90}
            >
                Soluciones
      </Link>

    </nav>
  </header>
};


export default Header;
