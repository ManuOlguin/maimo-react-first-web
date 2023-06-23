import React from 'react'
import styles from './CardsContainer.module.css';
import Card from '../Card/Card'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'



const data = [
  {
    name: 'Gestión ERP',
    parr: 'Ventas, compras, contratos, tesoreria, stock, credito personal, importaciones, contabilidad, integracion positiva y más!',
    icon: faGear,
    color: styles.verde
  },
  {
    name: 'Gestión E-Commerce',
    parr: 'Integración con sistema de gestión ERP',
    icon: faStore,
    color: styles.azul
  },
  {
    name: 'Gestión de la Producción',
    parr: 'Organizá tus procesos de producción facil y rapidamente',
    icon: faGear,
    color: styles.gris
  },
  {
    name: 'Gestión Escuelas e Institutos Privados',
    parr: 'Integración con sistema de gestión ERP',
    icon: faGear,
    color: styles.verde
  }
];
const CardsContainer = () => {
  
  return (
    <section id={styles.soluciones}>
    <h2>Soluciones</h2>
    <article id={styles.solucionesCards}>
    {data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          parr={item.parr}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </article>
  </section>
  )
}

export default CardsContainer