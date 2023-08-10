import React from 'react';
import styles from './LastSections.module.css';
import Form from '../Form/Form';
import Support from '../Support/Support';
import { Element } from 'react-scroll';


const LastSections = () => {
  return <section id={styles.lastSections}>
    <Form></Form>
    <Element name="support" className="element">
        <Support></Support>
    </Element>
</section>
};

export default LastSections;
