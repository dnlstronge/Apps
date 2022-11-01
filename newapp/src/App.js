
//imports

import './App.css';
import {useState} from 'react'

// demonstrate the use of state in template
// each object should be a separate event
// cycle throught the array and output part of each
function App() {
  const [name, setName] = useState("Dave")
  const [events, setEvents] = useState([
    {title: "Park run", id: 1},
    {title: "race in the morning", id: 2},
    {title: "fly me to the moon", id: 3}
  ])
  
  const handleClick = () => {
    setName('Stevie')
  }

// important to give each of the mapped items a unique value
// see div below
  return (
    <div className="App">
    <h1>My name is {name}</h1>
    <button onClick={handleClick}>Change Name</button>
        {events.map((event) => (
          <div key={event.id}><h2>{event.title}</h2></div>
        ))}
    </div>
  );
}

export default App;
