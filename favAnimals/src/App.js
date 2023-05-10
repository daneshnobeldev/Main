import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';


function App() {
    const [animalList,SetAnimalList] = useState([]);
    const animals = ['bird','cat','cow','dog','gator','horse'];
    const AddAnimal = () => {
        
        SetAnimalList([...animalList,getRandomAnimal()]);
        
    }

    const getRandomAnimal = () => {
        return animals[Math.floor(Math.random()*animals.length)];
    }

    const renderedAnimals = animalList.map((animal,index) => {
        return <AnimalShow type={animal} key={index} />
    }
    )
    return (
        <div className="app">
            <h2>Favourites!</h2>
            <button className="btn-add" onClick={AddAnimal}>Add Animal</button>
           <div className="animal-list">{renderedAnimals}</div> 
        </div>
    );
}

export default App;