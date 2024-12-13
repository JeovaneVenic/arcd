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
           
          </div>
        </div>
      </div>

  <div className={styles.secondaryPage}>
  <div className={styles.contentWrapper}>
  <h1 className={styles.paragrafo1}> SEU LAR DE</h1>
  <h2 className={styles.paragrafo2}> ALTO PADRÃO</h2>
    <div className={styles.imageContainer}>
      <img
        src="/images/familia.png"
        alt="Familia"
        className={styles.familiaImage}
      />
    </div>
    <div className={styles.videoContainer}>
      <video width="100%" height="auto" controls>
        <source src="/videos/sample-video.mp4" type="video/mp4" />
       
      </video>
    </div>
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