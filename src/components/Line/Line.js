import React from "react";
import styles from "./Line.module.css";

const Line = () => {
  return (
    <section className={styles.divisorflex}>
      <div className={styles.raya} data-reveal="line"></div>
    </section>
  );
};

export default Line;
