import React, { useEffect, useState, useRef } from "react";


function App() {
  // const [ renderCount, setRenderCount ] = useState(1);

  const [value, setValue] = useState('default');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("")

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value;
  }, [value])


  const focus = () => inputRef.current.focus();

  return (
    <div className="container">
      <h1>Amount of Rendering: {renderCount.current}</h1>
      <p>Past Value: {prevValue.current}</p>
      <input 
        ref={inputRef}
        type="text" 
        onChange={e => setValue(e.target.value)} 
        value={value  }
      />
      <button className="success" onClick={focus}>Click Me</button>
    </div>
  );
}

export default App;



// useRef --> we can count how many times our component renderd
// useref works as useState() but useref doesn't recieve second paramtetr