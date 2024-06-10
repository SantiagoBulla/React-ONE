import { useState } from "react";
import { v4 as uuid } from 'uuid';
import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import MyOrg from './components/myOrg/myOrg';
import Team from "./components/team/team";
import Footer from "./components/footer/footer";

function App() {

  const [formVisibility, setFormVisibility] = useState(false)
  const [partners, setPartners] = useState([
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      position: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      position: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      team: "Innovación y Gestión",
      photo: "https://github.com/santiagobulla.png",
      name: "David Bulla",
      position: "Dev FullStack",
      fav: false
    }])
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: '#D9F7E9',
      secondaryColor: '#57C278'
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: '#E8F8FF',
      secondaryColor: '#82CFFA'
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: '#F0F8E2',
      secondaryColor: '#A6D157'
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: '#FDE7E8',
      secondaryColor: '#E06B69'
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: '#FAE9F5',
      secondaryColor: '#DB6EBF'
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: '#FFF5D9',
      secondaryColor: '#FFBA05'
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: '#FFEEDF',
      secondaryColor: '#FF8A29'
    },
  ])

  const handleClick = () => {
    console.log(formVisibility);
    setFormVisibility(!formVisibility);
  }

  const createPartner = (partner) => {
    //Spread operator
    setPartners([...partners, partner])
  }

  const deletePartner = (id) => {
    const updatedPartners = partners.filter(partner => partner.id != id)
    setPartners(updatedPartners)
  }

  const updateTeamColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      team.id === id && (team.secondaryColor = color)
      return team;
    })

    setTeams(updatedTeams)
  }

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }])
  }

  const handleLikeChange = (id) => {
    const updatedPartners = partners.map((partner) => {
      partner.id === id && (partner.fav = !partner.fav)
      return partner
    })

    setPartners(updatedPartners)
  }

  return (
    <div>
      <Header />
      {/* {formVisibility ? <Form /> : <></>} */}
      {
        formVisibility &&
        <Form
          teams={teams.map(team => team.title)}
          onSubmitAction={createPartner}
          onSubmitTeamForm={createTeam}
        />
      }

      <MyOrg onClickFunction={handleClick} />
      {
        teams.map((team) => <Team
          key={team.title}
          teamData={team}
          partners={partners.filter(partner => partner.team === team.title)}
          onDeletePartner={deletePartner}
          onUpdateColor={updateTeamColor}
          handleLikeChange={handleLikeChange}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
