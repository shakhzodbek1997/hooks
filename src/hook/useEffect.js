import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState('Users');  
  const [data, setData ] = useState([]); // in default case our list will be empty

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })


  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    })
  }, [])


  // useEffect(() => {
  //   console.log('rendering....' + title);
  // }, [title]); 
 

  // using API with useEffect
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return ()=> {
      console.log("Clean")
    }
  }, [title])



  return (
    <div className="container">
      <h1>Title: {title}</h1>

      <div className="btn-group">
        <button onClick={() => setTitle('Users')} className="success">Users</button>
        <button onClick={() => setTitle('Posts')} className="danger">Posts</button>
        <button onClick={() => setTitle('Todos')} className="secondary">Todos</button>
      </div>
    
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>

  );
}

export default App;


// useEffect --> is an effect, we can effect to the element or state 
// but witout change other elements