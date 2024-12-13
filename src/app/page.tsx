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
            {/* Logo ou outros elementos */}
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
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/X-2bew0fjeA"  // Link corrigido para embed
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.tertiaryPage}> {/* Terceira seção com novo background */}
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <p className={styles.textInsideBox}>
              O projeto ELEGANZ é Inovação, alto padrão<br />
              e design. Tudo isso assinado pela ARCD<br />
              Construtech. Nós mudamos o seu modo de<br />
              pensar e enxergar a arquitetura, com projetos<br />
              que unem luxo, sofisticação e funcionalidade.<br />
              Priorizamos sua segurança e seu conforto, tudo<br />
              isso dentro do Condomínio Quintas da Colina I,<br />
              além de contarmos com uma equipe qualificada<br />
              e equipamentos com o que há de mais avançado em tecnologia, facilitando assim todo<br />
              o processo de construção de seu sonho.
            </p>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/logobranco.png" alt="Logo" className={styles.logo} />
        </div>
      </div>

      <div className={styles.quaternaryPage}> {/* Quarta seção com novo background */}
        <h1 className={styles.mainText}>As melhores <br /> propriedades <br /> de alto padrão,</h1>
        <h2 className={styles.subtitle}>perfeitas para morar ou investir.</h2>
        <p className={styles.topicoum}>Arquitetura sofisticada.</p>
        <p className={styles.topicodois}>Localizações privilegiadas.</p>
        <p className={styles.topicotres}>Prontas para morar ou personalizar.</p>
        <p className={styles.topiquatro}>Agende sua visita agora.</p>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/images/casa.png"
            alt="Casa"
            className={styles.casaImage}
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
