import React from "react";
import Link from "next/link";
import styles from "./CV.module.css";

export default function CV() {
  return (
    <section className={styles.cv} id="cv">
      <div className="container">
        <div className={styles.cv__content}>
          <div className={styles.cv__info}>
            <span className={styles.subtitle}>Conoce mi trayectoria</span>

            <h2 className={styles.title}>Mi Currículum</h2>

            <p className={styles.description}>
              Descarga mi CV para conocer mi formación académica,
              habilidades técnicas y experiencia profesional.
            </p>

            <div className={styles.buttons}>
              <Link href="#" className={styles.btnPrimary}>
                Descargar CV
              </Link>

              <Link href="#" className={styles.btnSecondary}>
                Ver CV Digital
              </Link>
            </div>
          </div>

          <div className={styles.cv__social}>
            <h3 className={styles.socialTitle}>Conectemos</h3>

            <div className={styles.socialLinks}>
              <Link href="https://linkedin.com" className={styles.card}>
                LinkedIn
              </Link>

              <Link href="https://github.com" className={styles.card}>
                GitHub
              </Link>

              <Link href="mailto:correo@email.com" className={styles.card}>
                Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}