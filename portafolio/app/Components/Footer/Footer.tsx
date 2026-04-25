import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">

        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>

            <Link href="#" className={styles.footer__logo}>
              <span className={styles.logo__bracket}>&lt;</span>
              Mauricio
              <span className={styles.logo__bracket}>/&gt;</span>
            </Link>

            <p className={styles.footer__text}>
              Gracias por visitar mi portfolio.
              ¡Espero que podamos trabajar juntos pronto!
            </p>
          </div>

          <div className={styles.footer__social}>
            <a href="https://linkedin.com" className={styles.footer__socialLink}>
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://github.com" className={styles.footer__socialLink}>
              <i className="fab fa-github"></i>
            </a>

            <a href="mailto:correo@email.com" className={styles.footer__socialLink}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>© 2026 Mauricio Omar Baez</p>

          <p>
            Hecho con <i className="fas fa-heart"></i> y café
          </p>
        </div>

      </div>
    </footer>
  );
}