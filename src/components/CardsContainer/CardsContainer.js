import React, { useEffect, useState } from 'react';
import styles from './CardsContainer.module.css';
import Card from '../Card/Card'
import { faGear, faL } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'



const data = [
  {
    name: 'Gestión ERP',
    parr: 'Ventas, compras, contratos, tesoreria, stock, credito personal, importaciones, contabilidad, integracion positiva y más!',
    icon: faGear,
    color: styles.verde,
    isOpen: true,
    parrOpen: [
      "Integración con sistema de gestión ERP",
      "Actualización de stock",
      "Precios",
      "Carga de órdenes de pedido",
      "Integraciones web con tiendas: Mercado Libre, Tienda nube, Woocommerce, Fulljause, Producteca",
      "Integraciones con Paginas Web",
      "Desarrollo App a medida"
    ]
  },
  {
    name: 'Gestión E-Commerce',
    parr: 'Integración con sistema de gestión ERP',
    icon: faStore,
    color: styles.azul,
    isOpen: false,
    parrOpen: [
      "Integración con sistema de gestión ERP",
      "Actualización de stock",
      "Precios",
      "Carga de órdenes de pedido",
      "Integraciones web con tiendas: Mercado Libre, Tienda nube, Woocommerce, Fulljause, Producteca",
      "Integraciones con Paginas Web",
      "Desarrollo App a medida"
    ]
  },
  {
    name: 'Gestión de la Producción',
    parr: 'Organizá tus procesos de producción facil y rapidamente',
    icon: faIndustry,
    color: styles.gris,
    isOpen: false,
    parrOpen: [
      "Administración de fórmulas por artículo con procesos, subprocesos",
      "Estimaciones de planes de producción en función de ventas",
      "Planes de Producción",
      "Programaciones y partes",
      "Necesidad de Materia Prima para compras",
      "Trazabilidad"
    ]
  },
  {
    name: 'Gestión Escuelas e Institutos Privados',
    parr: 'Integración con sistema de gestión ERP',
    icon: faGraduationCap,
    color: styles.azul,
    isOpen: false,
    parrOpen: [
      "Administración de fórmulas por artículo con procesos, subprocesos",
      "Estimaciones de planes de producción en función de ventas",
      "Planes de Producción",
      "Programaciones y partes",
      "Necesidad de Materia Prima para compras",
      "Trazabilidad"
    ]
  },
  {
    name: 'Gestión de Liquidación de Sueldos',
    parr: 'Ventas, compras, contratos, tesoreria, stock, credito personal, importaciones, contabilidad, integracion positiva y más!',
    icon: faCalculator,
    color: styles.verde,
    isOpen: false,
    parrOpen: [
      "Uso de múltiples razones sociales",
      "Módulo de vacaciones",
      "Liquidaciones finales",
      "Integración impositiva",
      "Control de horarios",
      "Integración ERP Itris"
    ]
  },
  {
    name: 'Consultoria y Asesoramiento en Sistemas',
    parr: 'Organizá tus procesos de producción facil y rapidamente',
    icon: faLightbulb,
    color: styles.gris,
    isOpen: false,
    parrOpen: [
      "Capacitaciones remotas al personal",
      "Capacitaciones en planta al personal",
      "Análisis de circuitos de trabajos",
      "Definiciones de nuevos procesos"
    ]
  },
  {
    name: 'Servicios de Desarrollo a Medida',
    parr: 'Integración con sistema de gestión ERP',
    icon: faToolbox,
    color: styles.azul,
    isOpen: false,
    parrOpen: [
      "Servicio de migración de datos",
      "Diseño de informes a medida",
      "Diseño de impresiones a medida",
      "Integración con tiendas de ecommerce",
      "Integración con otros sistemas de gestión y/o informáticos"
    ]
  }
];

function setAllIsOpenToFalse(data) {
  return data.map(item => ({
    ...item,
    isOpen: false
  }));
}

const CardsContainer = () => {
  const [cardsData, setCardsData] = useState(data);

  const handleCardClick = (index) => {
    // Create a copy of the cardsData array to avoid directly mutating state
    let updatedCardsData = [...cardsData];
    updatedCardsData = setAllIsOpenToFalse(updatedCardsData);

    // Toggle the "isOpen" property of the clicked card
    updatedCardsData[index].isOpen = true;
    // Update the state with the modified data
    setCardsData(updatedCardsData);
  };

  const handleScroll = () => {
    const cardsContainer = document.getElementById(styles.solucionesCards);
    const containerHeight = cardsContainer.clientHeight;
    const cardElements = cardsContainer.querySelectorAll('section');
  
    // Get the heights of all the cards and their positions within the container
    const cardHeights = Array.from(cardElements).map((card) => card.offsetHeight + (window.innerWidth < 800 ? 350 : 0));
    const cardOffsets = Array.from(cardElements).map((card) => card.offsetTop + (window.innerWidth < 800 ? 350 : 0));
  
    // Calculate the scroll percentage for each card
    const scrollTop = window.scrollY;
    const scrollBottom = scrollTop + containerHeight;
    const screenWidth = window.innerWidth; // Get the current window width
  
    const cardScrollPercentages = cardHeights.map((height, index) => {
      const cardTop = cardOffsets[index];
      const cardBottom = cardTop + height;
  
      let visibleTop = Math.max(cardTop, scrollTop);
      let visibleBottom = Math.min(cardBottom, scrollBottom);
  
      // Adjust the visibleTop and visibleBottom for cards in the same row (screen width > 1600)

      return ((visibleBottom - visibleTop) / height) * 100;
    });
    console.log(cardScrollPercentages)
  
    // Find the card with the highest scroll percentage and activate it
    const highestScrollPercentage = Math.max(...cardScrollPercentages);
    const cardIndexToActivate = cardScrollPercentages.indexOf(highestScrollPercentage);    
    console.log(cardIndexToActivate)
    
    if(window.innerWidth < 800)
    {
      handleCardClick(cardIndexToActivate);

    }
    else{
      handleCardClick(cardIndexToActivate);

    }
  };
  

    // Attach event listener for scroll events when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <section id={styles.soluciones}>
    <h2>Soluciones</h2>
    <article id={styles.solucionesCards}>
    {cardsData.map((item, index) => (
        <Card
          key={index}
          isOpen={item.isOpen}
          name={item.name}
          parr={item.parr}
          icon={item.icon}
          color={item.color}
          onClick={() => handleCardClick(index)} // Pass the click event handler as a prop
          parrOpens={item.parrOpen}

        />
      ))}
    </article>
  </section>
  )
}

export default CardsContainer