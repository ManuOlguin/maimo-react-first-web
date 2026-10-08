import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import myImage from './logo.png';
import { Link } from 'react-scroll';

const links = [
  { to: 'cardsContainer', label: 'Soluciones', duration: 300 },
  { to: 'fullInfo', label: 'Nosotros', duration: 500 },
  { to: 'lastSections', label: 'Contacto', duration: 500 },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <header className={`${styles.flex_container} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
      <a href=" " className={styles.logo}>
        <img src={myImage} height="40" className="d-inline-block align-top" alt="logoTgroup"></img>
      </a>

      {links.map((link) => (
        <Link
              key={link.to}
              className={styles.navbar_item}
              to={link.to}
              spy={true}
              smooth={true}
              duration={link.duration}
              offset={-90}
            >
                {link.label}
        </Link>
      ))}
      <Link
              className={styles.navbar_item1}
              to={'support'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                Soporte
      </Link>

    </nav>
  </header>
};


export default Header;
