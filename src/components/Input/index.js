import styles from "./Input.module.css";

const Input = (props) => {
  const { type = "text" } = props;

  const inputValueHandler = (e) => {
    props.inputReaderHandler(e.target.value);
  };

  const placeholderMod = `${props.placeholder}...`;
  return (
    <div className={styles.input}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderMod}
        required={props.required}
        value={props.valor}
        onChange={inputValueHandler}
        type={type}
      />
    </div>
  );
};

export default Input;
