import React from 'react';
import styles from './FullInfo.module.css';
import myImage from './logotg.png';


const FullInfo = () => {
  return <article id={styles.tgroup_full_info}>
  <section id={styles.tgroup_info}>
    <div>
      <h2 id={styles.Tgroup_title}>TGroup</h2>
      <h3>Tu mejor aliado estratégico</h3>
    </div>
    <div id={styles.loading_tgroup}>
      <div id={styles.flex_tgroup_logo}>
        <div id={styles.background_logo} className={styles.rotate}>
          <canvas id="demo"></canvas>
          <img id={styles.img_logo_gr} src={myImage} alt="logo" />
        </div>
      </div>
      <h4 id={styles.loading_text}>
        Equipo Trabajando. <span id={styles.puntos_loading_text}>..</span>
      </h4>
    </div>
  </section>
  <section id={styles.botones_tgroup}>
    <div id={styles.quienes_somos}>
      <a><h5>¿Quienes somos?</h5>
      <div></div></a>
    </div>
  </section>
  <div id={styles.textoInfo}>
    <p id={styles.textoInfo1}>Tgroup es un equipo interdisciplinario especializado en el asesoramiento a empresas ofreciendo las mejores soluciones de sistemas de gestión disponibles en el mercado. Contamos con desarrolladores, programadores y especialistas en integración de herramientas web y demas soluciones para todo tipo de empresas y rubros. 
    </p>
    <p id={styles.textoInfo2}>Dentro de las soluciones que ofrecemos nuestro principal proveedor de licencias y partner es Cia. General de Sofware SRL con su linea de productos <span>ITRIS SOFWARE.</span> 
      <br/>
      <br/>
      Con ellos tenemos una alianza estratégica que nos permite modelizar utilizando su herramienta y sus módulos estandar por lo que actuamos en ese caso utilizandolo como una <span>plataforma de desarrollo</span> que nos permite en un corto plazo ofrecer <span>proyectos a medida.</span>
    </p>
    <div id={styles.circulo1}></div>
    <div id={styles.circulo2}></div>
  </div>
</article>
  
};



export default FullInfo;
