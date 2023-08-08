import React, { useEffect, useState } from 'react';
import styles from './FullInfo.module.css';
import myImage from './logotg.png';
import $ from 'jquery';
import { faL } from '@fortawesome/free-solid-svg-icons';

const FullInfo = () => {
  const frasesLoading = [
    "Trabajando para vos",
    "Implementando nuevas soluciones",
    "Respondiendo tickets",
    "Diseñando nuevos productos",
    "Asesorando empresas"
  ];
  
  let [posicionActual, setPosicionActual] = useState(0);
  let [puntos, setPuntos] = useState(1);
  let [puntos2, setPuntos2] = useState(2);
  const [infoActive, setInfoActive] = useState(1);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [desaparecer1, setDesaparecer1] = useState(false);
  const [desaparecer2, setDesaparecer2] = useState(true);

let wawa = 1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosicionActual((prevPosicion) => (prevPosicion + 1)   % frasesLoading.length);
    }, 10000);

    const intervalId2 = setInterval(() => {
      wawa = (wawa % 3) + 1;
      setPuntos(() => {return wawa;});
      setPuntos2(() => 3- wawa);

    }, 1000);
    

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);
  function handleClick1() {
    alternar(0);
  }

  function handleClick2() {
    alternar(1);
  }

  function alternar(num) {
    if (num === 0) {
      setActive1(true)
      setActive2(false)
      setInfoActive(1);
      setTimeout(() => {
        setDesaparecer1(true);
      }, 400);
    }
    if (num === 1) {
      setActive1(false)
      setActive2(true)
      setInfoActive(2);
      setTimeout(() => {
        setDesaparecer2(true);
      }, 400);
    }

  }

  return (
    <article id={styles.tgroup_full_info}>
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
            {frasesLoading[posicionActual]}{'.'.repeat(puntos)}
            <span id={styles.puntos_loading_text}>
              {'.'.repeat(puntos2)}
            </span>
          </h4>
        </div>
      </section>
      <section id={styles.botones_tgroup}>
        <div id={styles.quienes_somos}>
          <a id={styles.infoActive1} active={infoActive.toString()} onClick={handleClick1}>
            <h5>¿Quienes somos?</h5>
            <div></div>
          </a>
        </div>
        <div id={styles.socios_estrategicos}>
          <a id={styles.infoActive2} active={infoActive.toString()} onClick={handleClick2}>
            <h5>Socios Estrategicos</h5>
            <div></div>
          </a>
        </div>
      </section>
      <div id={styles.textoInfo}>
        <p id={styles.textoInfo1} className={styles.textosInfos} desaparecer={desaparecer1.toString()} active={active1.toString()}>Tgroup es un equipo interdisciplinario especializado en el asesoramiento a empresas ofreciendo las mejores soluciones de sistemas de gestión disponibles en el mercado. Contamos con desarrolladores, programadores y especialistas en integración de herramientas web y demas soluciones para todo tipo de empresas y rubros.
        </p>
        <p id={styles.textoInfo2} className={styles.textosInfos} desaparecer={desaparecer2.toString()} active={active2.toString()}>Dentro de las soluciones que ofrecemos nuestro principal proveedor de licencias y partner es Cia. General de Sofware SRL con su linea de productos <span>ITRIS SOFWARE.</span>
          <br />
          <br />
          Con ellos tenemos una alianza estratégica que nos permite modelizar utilizando su herramienta y sus módulos estandar por lo que actuamos en ese caso utilizandolo como una <span>plataforma de desarrollo</span> que nos permite en un corto plazo ofrecer <span>proyectos a medida.</span>
        </p>
        <div id={styles.circulo1} active={infoActive.toString()}></div>
        <div id={styles.circulo2} active={infoActive.toString()}></div>
      </div>
    </article>
  );
};

export default FullInfo;