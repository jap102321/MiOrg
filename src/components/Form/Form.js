import { useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/index.js";
import OptionList from "../ListaOpciones/OptionList.js";
import Button from "../Button/Button.js";

const Form = (props) => {
  //Add colaborator form states.
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [picture, setPicture] = useState("");
  const [team, setTeam] = useState("");

  //Add team form states.
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const { addColaborator, addTeam } = props;

  const sendDataHandler = (e) => {
    e.preventDefault();
    let dataHandler = {
      name,
      role,
      picture,
      team,
    };
    addColaborator(dataHandler);
  };

  const sendNewTeamHandler = (e) => {
    e.preventDefault();
    addTeam({ titulo: title, primaryColor: color });
  };

  return (
    <section className={styles.form}>
      <form onSubmit={sendDataHandler}>
        <h2>Rellena el formulario para crear colaborador.</h2>
        <Input
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={name}
          inputReaderHandler={setName}
        />
        <Input
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={role}
          inputReaderHandler={setRole}
        />
        <Input
          titulo="Foto"
          placeholder="Ingresar enlace foto"
          required
          valor={picture}
          inputReaderHandler={setPicture}
        />

        <OptionList teams={props.teamList} valor={team} setName={setTeam} />

        <Button>Crear</Button>
      </form>
      <form onSubmit={sendNewTeamHandler}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Input
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={title}
          inputReaderHandler={setTitle}
        />
        <Input
          titulo="Color"
          placeholder="Ingresar el color en hex"
          required
          valor={color}
          inputReaderHandler={setColor}
          type="color"
        />
        <Button>Crear nuevo equipo</Button>
      </form>
    </section>
  );
};

export default Form;
