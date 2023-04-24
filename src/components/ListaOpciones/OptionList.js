import styles from "./OptionList.module.css";

const OptionList = (props) => {
  const changeHandler = (e) => {
    props.setName(e.target.value);
  };

  return (
    <div className={styles.option_list}>
      <label>Equipos</label>
      <select value={props.valor} onChange={changeHandler}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.teams.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionList;
