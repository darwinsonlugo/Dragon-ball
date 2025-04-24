import React from 'react'
import './ImformationPerson.css'
import CardPersonaje from '../../Component/Card/Card_personaje'
import foto from "../../Imagenes/foto.png";




const ImformationPerson = () => {
  const user = {
    name: "Darwin Vargas",
    image: foto,
    race: "Saiyan",
    gender: "Male",
    ki: "infinite",
    maxKi: "infinite",
    affiliation: "Z Fighters"
  };
  return (
    <main>
      <CardPersonaje user={user} />
      
    </main>
  )
}
export default ImformationPerson