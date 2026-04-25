import React from "react";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section className={styles.interests} id="interests">
      <div className="container">
        <h2 className={styles.title}>Intereses</h2>
        <p className={styles.subtitle}>
          Áreas que me apasionan dentro de la tecnología
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Desarrollo Web</h3>
            <p>Creación de interfaces modernas con React y Next.js.</p>
          </div>

          <div className={styles.card}>
            <h3>Bases de Datos</h3>
            <p>Diseño y conexión con MySQL, Supabase y PostgreSQL.</p>
          </div>

          <div className={styles.card}>
            <h3>Redes</h3>
            <p>Configuración de topologías, VLANs y Cisco Packet Tracer.</p>
          </div>

          <div className={styles.card}>
            <h3>Análisis de Datos</h3>
            <p>R, SAS y estadística aplicada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}