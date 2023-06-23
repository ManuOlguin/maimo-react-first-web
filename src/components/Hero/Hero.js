import React from 'react'
import styles from './Hero.module.css';
import heroImage from './hero.png';


const Hero = () => {
  return (
    <section id={styles.hero}>
    <div>
      <h1>¡Subí tu empresa a la revolución digital!</h1>
      <h2>Nosotros te acompañamos</h2>
      <h3>Conseguí el mejor software de gestión con soluciones hechas a medida para organizar todos tus recursos empresariales</h3>
    </div>
    <img src={heroImage} alt=""></img>
  </section>
  )
}

export default Hero