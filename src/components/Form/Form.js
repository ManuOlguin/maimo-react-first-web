import React from 'react';
import styles from './Form.module.css';


const Form = () => {
  return <section id={styles.form_contacto}>
<form
        action="https://formspree.io/f/xbjvgedn"
        method="POST">
    <h2>Contactanos</h2> 
    <input type="text" name='Nombre' placeholder="Nombre"/>
    <input type="email" name='Email' placeholder="Email"/>
    <textarea id={styles.message} name='Mensaje' type="text" placeholder="Tu mensaje"/>
    <button type="submit" class="btn btn-light">Enviar</button>
</form>
</section>

};

export default Form;
