import React from "react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.page}> {/* Primeira seção */}
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>O LAR PERFEITO</p>
          <h1 className={styles.mainText}>existe</h1>
          <div className={styles.logoContainer}>
            <img
              src="/images/logo.png"
              alt="Logo"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
      <div className={styles.secondaryPage}> {/* Segunda seção com background */}
        <p className={styles.subtitle}>Segunda Seção</p>
        <h1 className={styles.mainText}>Outro Conteúdo</h1>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.tertiaryPage}> {/* Terceira seção com novo background */}
        <p className={styles.subtitle}>Terceira Seção</p>
        <h1 className={styles.mainText}>Mais Conteúdo</h1>
        <div className={styles.logoContainer}>
          <img
            src="/images/logobranco.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.quaternaryPage}> {/* Quarta seção com novo background */}
        <p className={styles.subtitle}>Quarta Seção</p>
        <h1 className={styles.mainText}>Último Conteúdo</h1>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.quinaryPage}> {/* Quinta seção com novo background */}
        <p className={styles.subtitle}>Quinta Seção</p>
        <h1 className={styles.mainText}>Conteúdo Adicional</h1>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </>
  );
}
