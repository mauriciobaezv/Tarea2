import React from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={styles.title}>Mis Proyectos</h2>

        <p className={styles.subtitle}>
          Algunos trabajos desarrollados en web, redes y programación.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Portafolio Web</h3>
            <p>Sitio desarrollado con HTML, CSS y Next.js.</p>
          </div>

          <div className={styles.card}>
            <h3>Topología de Red</h3>
            <p>Diseño de red empresarial en Cisco Packet Tracer.</p>
          </div>

          <div className={styles.card}>
            <h3>Análisis en R</h3>
            <p>Modelos estadísticos y regresión lineal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}