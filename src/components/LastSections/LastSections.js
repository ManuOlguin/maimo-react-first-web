import React from 'react';
import styles from './LastSections.module.css';
import Form from '../Form/Form';
import Support from '../Support/Support';


const LastSections = () => {
  return <section id={styles.lastSections}>
    <Form></Form>
    <Support></Support>
</section>
};

export default LastSections;
