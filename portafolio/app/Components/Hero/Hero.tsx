import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} section`} id="home">
      <div className={`${styles.hero__container} container`}>
        <div className={styles.hero__content}>
          <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
          <h1 className={styles.hero__title}>Mauricio Omar Baez Villanueva</h1>

          <h2 className={styles.hero__subtitle}>
            <span className={styles.highlight}>Ingeniero de Software</span> en Crecimiento
          </h2>

          <p className={styles.hero__description}>
            Recién egresado de Tecnologías de la Información apasionado por crear
            soluciones digitales innovadoras. Combino creatividad técnica con un
            enfoque orientado a resultados para transformar ideas en código funcional.
          </p>

          <div className={styles.hero__buttons}>
            <Link href="#projects" className="btn btn--primary">
              <i className="fas fa-rocket"></i> Ver mis proyectos
            </Link>

            <Link href="#contact" className="btn btn--outline">
              <i className="fas fa-envelope"></i> Contáctame
            </Link>
          </div>
        </div>

        <div className={styles.hero__image}>
          <div className={styles.hero__blob}>
            <div className={styles.hero__avatar}>
              <i className="fas fa-user-astronaut"></i>
            </div>
          </div>
          <div className={`${styles.hero__decoration} ${styles.hero__decoration1}`}></div>
          <div className={`${styles.hero__decoration} ${styles.hero__decoration2}`}></div>
          <div className={`${styles.hero__decoration} ${styles.hero__decoration3}`}></div>
        </div>
      </div>

      <div className={styles.hero__scroll}>
        <Link href="#interests" className={styles.hero__scrollLink}>
          <span>Scroll</span>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
}