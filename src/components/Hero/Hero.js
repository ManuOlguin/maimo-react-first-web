import React from 'react'
import styles from './Hero.module.css';
import heroImage from './hero.png';


const Hero = () => {
  return (
    <section id={styles.hero}>
    <div className={styles.heroText}>
      <h1>¡Subí tu empresa a la <span className={styles.gradientText}>revolución digital</span>!</h1>
      <h2>Nosotros te acompañamos</h2>
      <h3>Conseguí el mejor software de gestión con soluciones hechas a medida para organizar todos tus recursos empresariales</h3>
    </div>
    <div className={styles.heroVisual} aria-hidden="true">
      <span className={`${styles.blob} ${styles.blobTeal}`}></span>
      <span className={`${styles.blob} ${styles.blobOrange}`}></span>
      <span className={styles.dots}></span>
      <img src={heroImage} alt=""></img>
    </div>
  </section>
  )
}

export default Hero
