import React, { useRef } from 'react'
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// El tilt 3D solo tiene sentido con mouse (no en pantallas táctiles).
const canTilt = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Card = ({key, isOpen, name, parr, icon, color, onClick, parrOpens, index = 0}) => {
  const cardRef = useRef(null);
  const totalElements = parrOpens.length;
  const elementsInUl1 = Math.ceil(totalElements / 2);

  // Slice the data into two parts for each <ul>
  const ul1Data = parrOpens.slice(0, elementsInUl1);
  const ul2Data = parrOpens.slice(elementsInUl1);

  const handleMouseMove = (e) => {
    if (!canTilt()) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    // Menos inclinación en la tarjeta abierta (es más ancha).
    const max = isOpen ? 3 : 7;
    card.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
    card.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`);
    card.style.setProperty('--mx', `${x * 100}%`);
    card.style.setProperty('--my', `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <section
      ref={cardRef}
      cardKey={key}
      className={`${styles.cardDiv} ${color} ${isOpen ? styles.isOpen : ""}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-reveal=""
      style={{ '--reveal-delay': `${(index % 2) * 120}ms` }}
    >
      <div className={styles.cardSolucion}>
        <div><FontAwesomeIcon className={styles.iconoCard} icon={icon} /></div>
        <a className={styles.btnCard}>{isOpen ? "TGROUP" : "Ver más"}</a>
        <h4>{name}</h4>
        <p >{parr}</p>
        <article className={styles.uls}>
          <ul className={styles.ulsli}>
          {ul1Data.map((item, index) => (
            <li key={index} style={{ '--i': index }}>{item}</li>
          ))}
          </ul>
          <ul className={styles.ulsli}>
          {ul2Data.map((item, index) => (
            <li key={index} style={{ '--i': index + elementsInUl1 }}>{item}</li>
          ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Card
