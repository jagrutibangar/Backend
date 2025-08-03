import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";

function App() {
  // State to hold jokes 
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    
    axios.get('/api/jokes')
    .then((response) =>{
    setJokes(response.data.jokes || response.data); // Handle both array and object responses
  })
    .catch((error) => {
    console.error("There was an error fetching the jokes!", error);
  });

  })


  return (
    <>
    <div >
      <h1>Hello FunApp</h1>
      <h2>Jokes for Your!</h2>
      <p>{jokes.map((j) =>  {
        return <div key={j.id}><h3>{j.joke}</h3></div>
      })}</p>
      </div>
    </>
  )
}

export default App
