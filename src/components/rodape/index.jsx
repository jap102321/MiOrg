import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: "url(/img/Footer.png)" }}
    >
      <div className={styles.redes}>
        <a href="https://www.aluracursos.com/">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/logo.png" alt="org" />
      <strong>Desarrollado por Alura</strong>
    </footer>
  );
};

export default Rodape;
