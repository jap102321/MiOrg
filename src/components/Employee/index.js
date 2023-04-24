import { click } from "@testing-library/user-event/dist/click";
import styles from "./Colaborator.module.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborator = (props) => {
  const { picture, name, role, team, id, fav } = props.data;
  const { primaryColor, deleteColab, like } = props;

  return (
    <div className={styles.container}>
      <AiFillCloseCircle
        className={styles.delete}
        onClick={() => deleteColab(id)}
      />
      <div className={styles.header} style={{ backgroundColor: primaryColor }}>
        <img src={picture} alt={`${name} ${role}`} />
      </div>
      <div className={styles.colaboratorData}>
        <h4>{name}</h4>
        <h5>{role}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborator;
