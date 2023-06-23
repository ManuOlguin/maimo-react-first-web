import React from 'react';
import styles from './Form.module.css';


const Form = () => {
  return <section id={styles.form_contacto}>
<form>
    <h2>Contactanos</h2> 
    <input type="text" placeholder="Nombre"/>
    <input type="email" placeholder="Email"/>
    <input type="text" placeholder="Tu mensaje"/>
    <button type="submit" class="btn btn-light">Submit</button>
</form>
</section>

};

export default Form;
