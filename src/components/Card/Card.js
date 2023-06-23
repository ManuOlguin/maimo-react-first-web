import React from 'react'
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({name, parr, icon, color}) => {
  return (
    <div className={`${styles.cardDiv} ${color}`}>
      <div className={styles.cardSolucion}>
        <div><FontAwesomeIcon className={styles.iconoCard} icon={icon} /></div>
        <h4>{name}</h4>
        <p>{parr}</p>
      </div>
    </div>
  )
}

export default Card