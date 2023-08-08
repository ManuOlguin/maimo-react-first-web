import React from 'react'
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({key, isOpen, name, parr, icon, color, onClick, parrOpens}) => {
  const totalElements = parrOpens.length;
  const elementsInUl1 = Math.ceil(totalElements / 2);

  // Slice the data into two parts for each <ul>
  const ul1Data = parrOpens.slice(0, elementsInUl1);
  const ul2Data = parrOpens.slice(elementsInUl1);
  return (
    <section cardKey={key} className={`${styles.cardDiv} ${color} ${isOpen ? styles.isOpen : ""}`} onClick={onClick}>
      <div className={styles.cardSolucion}>
        <div><FontAwesomeIcon className={styles.iconoCard} icon={icon} /></div>
        <a className={styles.btnCard}>{isOpen ? "TGROUP" : "Ver más"}</a>
        <h4>{name}</h4>
        <p >{parr}</p>
        <article className={styles.uls}>
          <ul className={styles.ulsli}>
          {ul1Data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
          <ul className={styles.ulsli}>
          {ul2Data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Card