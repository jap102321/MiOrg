import styles from "./MiOrg.module.css";

const MiOrg = (props) => {
  return (
    <div className={styles.org__div}>
      <h3 className={styles.title}>Mi organización</h3>
      <img src="/img/add.png" alt="Añadir" onClick={props.visibilityChecker} />
    </div>
  );
};

export default MiOrg;
