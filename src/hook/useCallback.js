import React, { useState, useCallback } from "react";
import ItemList from "./ItemList";


function App() {
  const [ colored, setColored ] = useState(false);
  const [ count, setCount ] = useState(1);

  const styles = {
    color: colored ? 'crimson' : 'white',
  };

  const generateItem = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, index) => `Element ${index + indexNumber}`);
  }, [count]);
  


  return(
    <div className="container">
      <p style={styles}>Amount of Count: {count}</p>

      <button className="success" onClick={() => setCount((prev)=> prev + 1)}> Add Count</button>
      <button className="danger" onClick={() => setColored((prev) => !prev)}>Change Color</button>

      <ItemList getItems={generateItem} />
    </div>
  )
}

export default App;