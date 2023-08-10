import React from 'react';
import styles from './Support.module.css';


const Support = () => {
  return <section id={styles.support}>
    <article>
      <div>
        <h4>¿Ya sos cliente?</h4>
        <h2>SOPORTE</h2>
      </div>
      <a href='https://download.teamviewer.com/download/TeamViewerQS.exe'> Descargar Soporte Remoto</a>

    </article>
    <div className={styles.textos}>
      <p id={styles.primerTexto}><span>ACCESO A TICKETS Y CHAT:</span><br></br>
        <a href='http://tickets.tgroup.com.ar'>http://tickets.tgroup.com.ar</a><br></br>
        Atendemos de Lunes a Viernes de 08 a 17 hs, exclusivamente por esta vía.</p>
        <p id={styles.segundoTexto}><span>GUARDIA</span> <br></br>
          <bold>Solo en caso de emergencia (no poder facturar o no poder usar el sistema)
          Sólo a través de llamado telefónico.</bold>
          <br></br>
          Lun. a Vie. de 17 a 20:30 hs
          Sábados de 08 a 20:30 hs.
          <br></br>
          Cel. 011 15 3570 1310</p>
    </div>
</section>
};

export default Support;
