import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/header/Header.js";
import Form from "./components/Form/Form.js";
import MiOrg from "./components/MiOrg/index.js";
import Teams from "./components/Teams/index.js";
import Rodape from "./components/rodape";

function App() {
  const [formVisibility, setVisibilityHandler] = useState(false);
  const [colaborators, setNewColaborator] = useState([
    {
      id: uuidv4(),
      team: "Front End",
      picture: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      role: "Instructor",
      fav: true,
    },
    {
      id: uuidv4(),
      team: "Programación",
      picture: "https://github.com/genesysaluralatam.png",
      name: "Genesys Rondón",
      role: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "UX y Diseño",
      picture: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      role: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Programación",
      picture: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      role: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Innovación y Gestión",
      picture: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      role: "Dev FullStack",
      fav: false,
    },
  ]);
  const [teams, updTeams] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]);

  //Visibility check
  const visibilityChecker = () => {
    setVisibilityHandler(!formVisibility);
  };

  //Add colaborator.
  const addColaborator = (colab) => {
    setNewColaborator([...colaborators, colab]);
  };

  //Delete Colab
  const deleteColaborator = (id) => {
    const newColaborators = colaborators.filter((colab) => colab.id != id);
    setNewColaborator(newColaborators);
  };

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    updTeams(updatedTeams);
  };

  //Add team
  const addTeam = (newTeam) => {
    updTeams([...teams, { ...newTeam, id: uuidv4() }]);
    console.log(teams);
  };

  //Add Fav
  const addFavorite = (id) => {
    const colaboradoresActualizados = colaborators.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    setNewColaborator(colaboradoresActualizados);
  };

  //DOM Render
  return (
    <div>
      <Header />

      {formVisibility && (
        <Form
          teamList={teams.map((data) => data.titulo)}
          addColaborator={addColaborator}
          addTeam={addTeam}
        />
      )}

      <MiOrg visibilityChecker={visibilityChecker} />

      {teams.map((teamInfo) => (
        <Teams
          team={teamInfo}
          key={teamInfo.titulo}
          colaborators={colaborators.filter(
            (colab) => colab.team === teamInfo.titulo
          )}
          deleteColab={deleteColaborator}
          updateColor={updateColor}
          like={addFavorite}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
