import Colaborator from "../Employee/index.js";
import styles from "./Teams.module.css";
import hexToRgba from "hex-to-rgba";
const Teams = (props) => {
  const { primaryColor, secondaryColor, titulo, id } = props.team;
  const { colaborators, deleteColab, updateColor, like } = props;

  return (
    <>
      {colaborators.length > 0 && (
        <div
          className={styles.teams}
          style={{ backgroundColor: hexToRgba(primaryColor, 0.6) }}
        >
          <input
            className={styles.input_color}
            type="color"
            value={primaryColor}
            onChange={(e) => {
              updateColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: primaryColor }}>{titulo}</h3>
          <div className={styles.teamMembers}>
            {colaborators.map((colab, index) => (
              <Colaborator
                data={colab}
                key={index}
                primaryColor={primaryColor}
                deleteColab={deleteColab}
                like={like}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Teams;
